import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({});
  const [_nam, set_nam] = useState('');
  const [_course, set_course] = useState('');
  const [_typpe, set_typpe] = useState('');
  const [_phone, set_phone] = useState('');
  const [_addires, set_addires] = useState('');
  const [_companyName, set_companyName] = useState('');
  const [_companyLogo, set_companyLogo] = useState('profile.png');
  const [_profilePic, set_profilePic] = useState('profile.png');
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    fetch("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.ok ? res.json() : Promise.reject("Unauthorized"))
      .then((data) => {
        setUser(data.profile); // ✅ Correct key
        set_companyLogo(data.profile.companyLogo || '');
        set_profilePic(data.profile.profilePic || '');
      })
      
      .catch((err) => {
        console.error("Token invalid or expired:", err);
        setUser({ error: "Unauthorized" });
      });
  }, []);

  if (user.error) return <p>{user.error}</p>;

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setSelectedImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      if (user.role === 'Company') {
        set_companyLogo(reader.result);
      } else {
        set_profilePic(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('email', user.email);
  formData.append('role', user.role);

  if (user.role === "Company") {
    formData.append('companyName', _companyName || user.companyName);
    formData.append('phone', _phone || user.phone);
    formData.append('address', _addires || user.address);
    if (selectedImageFile) formData.append('image', selectedImageFile);
  } else {
    formData.append('fullName', _nam || user.fullName);
    formData.append('course', _course || user.course);
    formData.append('typpe', _typpe || user.typpe);
    formData.append('phone', _phone || user.phone);
    formData.append('address', _addires || user.address);
    if (selectedImageFile) formData.append('image', selectedImageFile);
  }

  try {
    const res = await fetch("http://localhost:5000/api/editprofile", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      alert("Profile updated successfully!");
      window.location.reload();
    } else {
      alert(data.message || "Update failed");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("An error occurred");
  }
};


  return (
    <div className="profile-edit-page">
      <div className="main-profile">
        <div className="left-profile-image">
          <div className="left-image">
            <img
              src={
                user.role === 'Company'
                  ? _companyLogo || 'profile.png'
                  : _profilePic || 'profile.png'
              }
              alt="profile"
              className="profilepng"
            />
            <label htmlFor="profile-upload">
              <img src="/magic-tool.png" alt="edit" className="profile-edit" />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="right-profile-content">
          <form className="form-right-profile" onSubmit={handleSubmit}>
            <h2>Your Profile</h2>

            {user.role === "Company" ? (
              <>
                <div className="form-group">
                  <label>Company Name <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    defaultValue={user.companyName || ''}
                    onChange={(e) => set_companyName(e.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label>Full Name <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    defaultValue={user.fullName || ''}
                    onChange={(e) => set_nam(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Course <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    defaultValue={user.course || ''}
                    onChange={(e) => set_course(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>User Type <span style={{ color: "red" }}>*</span></label>
                  <select
                    name="type"
                    onChange={(e) => set_typpe(e.target.value)}
                    defaultValue={user.typpe || ''}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Recent Graduate">Recent Graduate</option>
                    <option value="Fresher">Fresher</option>
                  </select>
                </div>
              </>
            )}

            <div className="form-group">
              <label>Email <span style={{ color: "red" }}>*</span></label>
              <input type="email" value={user.email || ''} readOnly />
            </div>

            <div className="form-group">
              <label>Phone <span style={{ color: "red" }}>*</span></label>
              <input
                type="tel"
                defaultValue={user.phone || ''}
                onChange={(e) => set_phone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Address <span style={{ color: "red" }}>*</span></label>
              <textarea
                rows={4}
                defaultValue={user.address || ''}
                onChange={(e) => set_addires(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="save-btn">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
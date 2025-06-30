import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({});
  const [_roll, set_roll] = useState('');
  const [_nam, set_nam] = useState('');
  const [_course, set_course] = useState('');
  const [_typpe, set_typpe] = useState('');
  const [_phone, set_phone] = useState('');
  const [_addires, set_addires] = useState('');
  const [_companyName, set_companyName] = useState('');
  const [_companyLogo, set_companyLogo] = useState('');
  const [_profilePic, set_profilePic] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    fetch("http://localhost:5000/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.ok ? res.json() : Promise.reject("Unauthorized"))
      .then((data) => {
        set_roll(data.role)
        const profile = data.profile;
        setUser(profile);
        set_companyLogo(profile.companyLogo || '');
        set_profilePic(profile.profilePic || '');
        set_companyName(profile.companyName || '');
        set_nam(profile.fullName || '');
        set_course(profile.course || '');
        set_typpe(profile.typpe || '');
        set_phone(profile.phone || '');
        set_addires(profile.address || '');
      })
      .catch((err) => {
        console.error("Token invalid or expired:", err);
        setUser({ error: "Unauthorized" });
      });
  }, []);
  if(!_roll) return <p>error fetching or session expired</p>

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (_roll === 'Company') {
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
    formData.append('role', _roll);

    if (_roll === "Company") {
      formData.append('companyName', _companyName);
      formData.append('phone', _phone);
      formData.append('address', _addires);
      if (selectedImageFile) formData.append('image', selectedImageFile);
    } else {
      formData.append('fullName', _nam);
      formData.append('course', _course);
      formData.append('typpe', _typpe);
      formData.append('phone', _phone);
      formData.append('address', _addires);
      if (selectedImageFile) formData.append('image', selectedImageFile);
    }

    try {
      const token = sessionStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/editprofile", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
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

  const imagePath = _roll === 'Company' ? _companyLogo : _profilePic;
  const displayImage = imagePath?.startsWith("data:")
  ? imagePath
  : imagePath
  ? `http://localhost:5000${imagePath}`
  : '/profile.png';

  // console.log(imagePath);

  return (
    <div className="profile-edit-page">
      <div className="main-profile">
        <div className="left-profile-image">
          <div className="left-image" style={{ transform: 'translateX(14px)' }}>
            <img
              src={displayImage}
              alt="profile"
              className="profilepng"
              onError={(e) => {
                e.target.onerror = null; // prevent infinite loop
                e.target.src = '/profile.png'; // fallback to default
              }}
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

            {_roll === "Company" ? (
              <>
                <div className="form-group">
                  <label>Company Name <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    value={_companyName}
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
                    value={_nam}
                    onChange={(e) => set_nam(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Course <span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    value={_course}
                    onChange={(e) => set_course(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>User Type <span style={{ color: "red" }}>*</span></label>
                  <select
                    value={_typpe}
                    onChange={(e) => set_typpe(e.target.value)}
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
                value={_phone}
                onChange={(e) => set_phone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Address <span style={{ color: "red" }}>*</span></label>
              <textarea
                rows={4}
                value={_addires}
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

import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // console.log('token', token);
    fetch("http://localhost:5000/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.ok ? res.json() : Promise.reject("Unauthorized"))
      .then((data) => setUser(data))
      .catch((err) => {
        console.error("Token invalid or expired:", err);
        setUser({ error: "Unauthorized" });
      });
  }, []);

  if (user.error) return <p>{user.error}</p>;

  return (
    <div className="profile-edit-page">
      <div className="main-profile">
        <div className="left-profile-image">
          <div className="left-image">
            <img src="profile.png" alt="profile" className="profilepng" />
            <img src="magic-tool.png" alt="edit-profile" className="profile-edit" />
          </div>
        </div>
        <div className="right-profile-content">
          <form className="form-right-profile">
            <h2>Edit Profile</h2>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" defaultValue={user.name || ''} required />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="gender-form">
                <div>
                  <input type="radio" id="Male" name="gender" value="Male" defaultChecked={user.gender === "Male"} />
                  <label htmlFor="Male">Male</label>
                </div>
                <div>
                  <input type="radio" id="Female" name="gender" value="Female" defaultChecked={user.gender === "Female"} />
                  <label htmlFor="Female">Female</label>
                </div>
                <div>
                  <input type="radio" id="Others" name="gender" value="Others" defaultChecked={user.gender === "Others"} />
                  <label htmlFor="Others">Others</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Course</label>
              <input type="text" placeholder="Enter your course name" defaultValue={user.course || ''} required />
            </div>

            <div className="form-group">
              <label>College</label>
              <input type="text" placeholder="Enter your college name" defaultValue={user.college || ''} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" defaultValue={user.email || ''} required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone number" defaultValue={user.phone || ''} required />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea rows={5} placeholder="Enter your address" defaultValue={user.address || ''} />
            </div>

            <div>
              <h3 className="resume-up">Upload your resume</h3>
              <input type="file" name="upload" id="resumeuplode" />
            </div>

            <button type="submit" className="save-btn">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div>
            <div className="main-profile">
                <div className="left-profile-image">
                    <div className="left-image">
                        <img src="profile.png" alt="profile" className="profilepng" />
                    </div>
                </div>
                <div className="right-profile-content">
                    <div >
                    <form className="form-right-profile">
                        <h2>Edit Profile</h2>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Enter your phone number" />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" placeholder="Enter your address" />
                        </div>

                        <button type="submit" className="save-btn">Save Changes</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

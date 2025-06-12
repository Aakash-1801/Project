import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div className="profile-edit-page">
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
                            <input type="text" placeholder="Enter your full name" required/>
                        </div>
                            
                        <div className="form-group">
                            <label>Gender</label>
                            <div className="gender-form">
                                <div>
                                    <input type="radio" id="Male" name="gender" value="Male" />
                                    <label htmlFor="Male">Male</label>
                                </div>
                                <div>
                                    <input type="radio" id="Female" name="gender" value="Female" />
                                    <label htmlFor="Female">Female</label>
                                </div>
                                <div>
                                    <input type="radio" id="Others" name="gender" value="Others" />
                                    <label htmlFor="Others">Others</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Course</label>
                            <input type="text" placeholder="Enter your course name" required/>
                        </div>

                        <div className="form-group">
                            <label>college</label>
                            <input type="text" placeholder="Enter your college name" required/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" required/>
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Enter your phone number" required/>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <textarea rows={5} type="address" placeholder="Enter your address" />
                        </div>

                        <div>
                            <h3 className="resume-up">Upload your resume</h3>
                            <input type="file" name="upload" id="resumeuplode"/>
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

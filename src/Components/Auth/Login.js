import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function AuthForm({ setLoggedIn, setEmail }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userdata, setUserdata] = useState({
    fullName: '',
    email: '',
    course: '',
    phone: '',
    typpe: '',
    address: '',
    role: 'User',
    companyName: '',
    companyLogo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'companyLogo') {
      setUserdata((prev) => ({ ...prev, companyLogo: files[0] }));
    } else {
      setUserdata((prev) => ({ ...prev, [name]: value }));
      if (name === 'email') setEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === 'signup' && password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    const endpoint = mode === 'login' ? 'login' : 'register';

    let formData;
    if (mode === 'signup') {
      formData = new FormData();
      for (const key in userdata) {
        if (userdata[key]) formData.append(key, userdata[key]);
      }
      formData.append('password', password);
    }

    const options = {
      method: 'POST',
      body: mode === 'signup' ? formData : JSON.stringify({
        email: userdata.email,
        password,
        role: userdata.role
      }),
      headers: mode === 'login' ? { 'Content-Type': 'application/json' } : undefined
    };

    try {
      const res = await fetch(`http://localhost:5000/api/${endpoint}`, options);
      const data = await res.json();

      if (res.ok) {
        console.log('token while login', data.token);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('auth', 'true');
        sessionStorage.setItem('email', userdata.email);
        sessionStorage.setItem('role', userdata.role);
        setLoggedIn(true);
        alert(`${mode === 'login' ? 'Login' : 'Signup'} successful!`);
        navigate('/');
      } else {
        alert(data.message || 'Failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form" encType="multipart/form-data">
        <div className="tab-header">
          <span className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Login</span>
          <span className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Sign Up</span>
        </div>

        <label>
          Role <span style={{ color: 'red' }}>*</span>
        </label>
        <select name="role" value={userdata.role} onChange={handleChange} required>
          <option value="User">User</option>
          <option value="Company">Company</option>
        </select>

        <label>
          Email <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="email" name="email" value={userdata.email} onChange={handleChange} required />

        <label>
          Password <span style={{ color: 'red' }}>*</span>
        </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {mode === 'signup' && (
          <>
            <label>
              Confirm Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            {userdata.role === 'User' ? (
              <>
                <label>
                  Full Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" name="fullName" value={userdata.fullName} onChange={handleChange} required />

                <label>
                  Course <span style={{ color: 'red' }}>*</span>
                </label>
                <select name="course" value={userdata.course} onChange={handleChange} required>
                  <option value="">Select Course</option>
                  <option value="B.Tech/BE">B.Tech/BE</option>
                  <option value="MBA">MBA</option>
                  <option value="Other">Other</option>
                </select>

                <label>
                  Phone <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" name="phone" value={userdata.phone} onChange={handleChange} required />

                <label>
                  Type <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" name="typpe" value={userdata.typpe} onChange={handleChange} required />

                <label>
                  Address <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" name="address" value={userdata.address} onChange={handleChange} required />
              </>
            ) : (
              <>
                <label>
                  Company Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="text" name="companyName" value={userdata.companyName} onChange={handleChange} required />

                <label>
                  Company Logo
                </label>
                <input type="file" name="companyLogo" onChange={handleChange} />
              </>
            )}
          </>
        )}

        <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
}

export default AuthForm;

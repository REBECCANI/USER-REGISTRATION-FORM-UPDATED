'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred!');
    }
  };

  return (
    <div className={styles.content}>
      <h1>USER REGISTRATION FORM</h1>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label htmlFor="fname">FIRST NAME</label>
        <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} required /><br /><br />
        <label htmlFor="lname">LAST NAME</label>
        <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} required /><br /><br />
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />
        <label htmlFor="password">PASSWORD</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />
        <button type="submit">REGISTER</button>
      </form>
      <p id="message" className={styles.hidden}>Please check your email for confirmation.</p>
    </div>
  );
}

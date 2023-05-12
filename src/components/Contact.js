import React, { useState, useEffect, useRef } from 'react';
import 'styles/contact.css';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_grccemm', 'template_hlatgpe', form.current, 'qTq6OGEExX3rv-VfH')
      .then((result) => {
        console.log(result.text);
        setFormData({ user_name: '', user_email: '', message: '' });
        alert("빠른 확인 후 연락드리겠습니다.")
      }, (error) => {
        console.log(error.text);
      });
  };




  return (
    <div className='contact'>

      <div className='section_title'>
        <h2>Contact</h2>
      </div>

      <div className='contents'>
        <div className='contact_wrap'>
          <div className='touch'>
            <h3><FaPhoneAlt />GET IN TOUCH</h3>
            <ul>
              <li>
                <dl>
                  <dt>PHONE</dt>
                  <dd>(+82)10 6685 0145</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>E-MAIL</dt>
                  <dd>aromad1117@naver.com</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>GITHUB</dt>
                  <dd>
                    <a href='https://github.com/'>
                      <FaGithub />
                    </a>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>

          <div className='mail'>
            <h3><FaEnvelope />SEND A MAIL</h3>

            <form ref={form} onSubmit={handleSubmit}>

              <div className='form_con'>
                <label>이름</label>
                <input type="text" name="user_name" onChange={handleChange} value={formData.user_name} required />
              </div>

              <div className='form_con'>
                <label>이메일</label>
                <input type="email" name="user_email" onChange={handleChange} value={formData.user_email} required />
              </div>

              <div className='form_con'>
                <label>내용</label>
                <textarea name="message" onChange={handleChange} value={formData.message} required />
              </div>
              <input type="submit" value="전송" className='send_btn' />

            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;

import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "180f3558-2912-4559-9f5b-c01205daf260");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send a message<img src = {msg_icon} alt = ""/></h3>
            <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Please reach out using any of the methods below, and we'll get back to you as soon as possible.</p>
            <ul>
               <li><img src = {mail_icon} alt = ""/>test1234@gmail.com</li>
               <li><img src = {phone_icon} alt = ""/>+917374656383</li>
               <li><img src = {location_icon} alt = ""/>VIT BHOPAL Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh 466114</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type = "text" name = "name" placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type = "tel"  name = 'phone' placeholder='Enter your Phone Number' required />
                <label>Email</label>
                <input type = "email" name = "email" placeholder='Enter your Email-Id' required />
                <label>Message</label>
                <textarea type = "message" id = "" cols = "30" rows = "10" placeholder='Enter your message' required></textarea>
                <button type= "submit" className='btn dark-btn'>Send message<img src = {white_arrow} alt = ""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
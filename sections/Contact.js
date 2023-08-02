import { Title, TitleSm } from "@/components/common/Title"
import React, { useState } from "react"
import emailjs from "emailjs-com";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    projectDescription: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
    .send("service_gkys2ya", "template_eb7ydal", {
      to_name: "Velltech Group", // Replace with the organization's name or email
      from_name: formData.name,
      message: formData.projectDescription
    }, "rlRaSaTOWffiU2IBF")
   .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          // Add any success message or redirect to a thank-you page if desired
        },
        (error) => {
          console.error("Error sending email:", error);
          // Add error handling or display an error message to the user
        }
      );

    // // Clear the form fields after submission
    // setFormData({
    //   name: "",
    //   email: "",
    //   budget: "",
    //   timeframe: "",
    //   projectDescription: ""
    // });
  };
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
            <p>We are eagerly awaiting the opportunity to work on your next exciting project! Reach out to us from Monday to Friday, 9 am to 6 pm, and let's discuss how we can create magic together. 
              </p>
              <p>Call us at +254 769290772 or simply fill out our "Request For Quote" form, and we'll get back to you promptly. Your success is our priority, and we are ready to make it happen.
</p>
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>254-769290772</h3>
                  <span>Call us: Mon - Fri 9:00 - 18:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Nairobi</h3>
                  <span>008 Kileleshwa, 2th Floor,10022</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>Velltechgroup@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@Velltechgroup.com</h3>
                  <span>Career at Velltechgroup</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form onSubmit={handleSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button type="submit" className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

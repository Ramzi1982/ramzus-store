import React from "react";
import contact from '../images/contact.jpg'

const ContactForm = () => {
  return (
    <div>
     
      <div className="container-form" >
      
        <form className="form-container">
       
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
          
        </form>
        <img className="img-contact"    src={contact}alt="Card image"  height={"800px"}/>
      </div>
     
    </div>
  );
};

export default ContactForm;

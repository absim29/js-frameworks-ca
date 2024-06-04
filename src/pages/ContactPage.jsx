import React, { useState } from "react";
import styles from "../styles/ContactForm.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (formData.fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }
    if (formData.subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = "Email must be a valid email address";
    }
    if (formData.body.length < 3) {
      errors.body = "Body must be at least 3 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log("Form submitted", formData);
    }
  };

  return (
    <>
      <h1>Contact us</h1>
      <div className="prodContainer">
        <p>
          If you have any questions or need further assistance, please don't
          hesitate to contact us by using the form below.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.error : ""}
            />
            {errors.fullName && <p>{errors.fullName}</p>}
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? styles.error : ""}
            />
            {errors.subject && <p>{errors.subject}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.error : ""}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Body</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              className={errors.body ? styles.error : ""}
            />
            {errors.body && <p>{errors.body}</p>}
          </div>
          <div className="btn-wrap">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;

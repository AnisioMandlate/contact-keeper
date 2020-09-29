import React, { useState, useContext } from "react";
import ContactContex from "../../context/contact/contactContex";

const ContactForm = () => {
  const contactContex = useContext(ContactContex);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContex.addContact(contact);
    setContact({ name: "", email: "", phone: "", type: "Personal" });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="Personal"
        checked={type === "Personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="Professional"
        checked={type === "Professional"}
        onChange={onChange}
      />{" "}
      Professional{" "}
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;

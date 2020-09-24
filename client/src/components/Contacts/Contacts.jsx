import React, { useContext, Fragment } from "react";
import ContactItem from "./ContactItem";
import ContactContex from "../../context/contact/contactContex";

const Contacts = () => {
  const contactContex = useContext(ContactContex);
  const { contacts } = contactContex;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;

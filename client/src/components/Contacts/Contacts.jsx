import React, { useContext, Fragment } from "react";
import ContactContex from "../../context/contact/contactContex";
import ContactItem from "./ContactItem";

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

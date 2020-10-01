import React, { useContext, Fragment } from "react";
import ContactItem from "./ContactItem";
import ContactContex from "../../context/contact/contactContex";

const Contacts = () => {
  const contactContex = useContext(ContactContex);
  const { contacts, filtered } = contactContex;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;

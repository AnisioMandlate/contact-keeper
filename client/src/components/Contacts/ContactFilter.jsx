import React, { useContext, useRef, useEffect } from "react";
import ContactContex from "../../context/contact/contactContex";

const ContactFilter = () => {
  const contactContex = useContext(ContactContex);
  const { filterContacts, clearFilter, filtered } = contactContex;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;

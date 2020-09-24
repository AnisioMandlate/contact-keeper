import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContex from "./contactContex";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "555-555-5555",
        type: "Personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "115-555-5555",
        type: "Personal",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-555-5555",
        type: "Professional",
      },
    ],
  };
  /** Pull out and dispatch the state from the reducer */

  const [state, dispatch] = useReducer(contactReducer, initialState);

  /** Add contact */

  /** Delete contact */

  /** Set current contact */

  /** Clear current contact */

  /** Update contact */

  /** Filter contact */

  /** Clear filter */

  return (
    <ContactContex.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContex.Provider>
  );
};

export default ContactState;

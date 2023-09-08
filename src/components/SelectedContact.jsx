import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : contact ? (
        <ContactRow contact={contact} />
      ) : (
        <div>No contact selected.</div>
      )}
    </>
  );
}

import {useEffect, useState} from "react";
import axios from "axios";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/contact/all');
                console.log(response.data);
                setContacts(response.data);
            } catch (error) {
                console.error('There was an error fetching the contacts:', error);
            }
        };


        fetchContacts();
    }, []);

    return (
        <div>
            {contacts.map(contact => (
                <div key={contact.id}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    <p>{contact.email}</p>
                    <p>{contact.comment}</p>
                    <a href={`mailto:${contact.email}?subject=Response to your contact message&body=Dear ${contact.firstName},`} target="_blank" rel="noopener noreferrer">
                        Send Email
                    </a>
                </div>
            ))}
        </div>
    );


}
export default ContactList;
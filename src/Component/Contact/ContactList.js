import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme} from "@mui/material";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const theme = useTheme();


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
        <Container

            sx={{
                mt: 1,
                display: 'flex',
                flexDirection:'column',
                gap: 2,
                padding: '10px',
                borderRadius: '8px',
                backgroundColor:
                    theme.palette.mode === 'dark'
                        ? theme.palette.background.paper
                        : 'white',
                color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
                border: '2px solid #888',
                margin: '10px',
                width: 'calc(100% - 20px)',
                boxSizing: 'border-box',
                '& .MuiTextField-root': { m: 1 },
            }}>
            <Typography variant='h5' color={"cornflowerblue"}>
            Messages from Contact us
            </Typography>

    <Table
sx={{ border: '4px solid blue'
    }}
    >

        <TableHead
            sx={{fontWeight:'bold',backgroundColor: 'cornflowerblue',
            }}>
            <TableRow
            >
            <TableCell>Full Name</TableCell>
            <TableCell>Email-address</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Action</TableCell>
        </TableRow>

        </TableHead>
            {contacts.map(contact => (
                <TableBody key={contact.id}
                           >
                  <TableRow
                      sx={{fontWeight:'bold',backgroundColor:
                          theme.palette.mode === 'dark'
                          ? "darkgray"
                          : 'white',
                          color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',

                      }}>
                    <TableCell >{contact.firstName} {contact.lastName}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.comment}</TableCell>
                    <a href={`mailto:${contact.email}?subject=Response to your contact message&body=Dear ${contact.firstName},`} target="_blank" rel="noopener noreferrer">
                        Send Email
                    </a></TableRow>
                </TableBody>
            ))}
        </Table>
        </Container>

);


}
export default ContactList;
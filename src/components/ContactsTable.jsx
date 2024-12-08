// src/components/ContactsTable.jsx
import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function ContactsTable({ contacts }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Company</TableCell>
          <TableCell>City</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company?.name}</TableCell>
            <TableCell>{contact.address?.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ContactsTable;

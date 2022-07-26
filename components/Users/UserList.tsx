import React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";
import MyUriField from "../UI/MyUriField";

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
            <MyUriField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

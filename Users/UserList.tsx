import React from "react";
import { List, Datagrid, TextField, EmailField, BooleanField } from "react-admin";

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="password" />
            <TextField source="email" />
            <BooleanField source="isActive" />
        </Datagrid>
    </List>
);

import React from "react";
import {
    Datagrid,
    EditButton,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput,
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" reference="users" label="User">
        <SelectInput optionText="name"></SelectInput>
    </ReferenceInput>,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

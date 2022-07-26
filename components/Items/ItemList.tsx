import React from "react";
import {
    ArrayField,
    BooleanField,
    ChipField,
    Datagrid,
    DateField,
    List,
    SingleFieldList,
    TextField,
} from "react-admin";

export const ItemList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="size" />
            <TextField source="color" />
            <TextField source="gender" />
            <BooleanField source="available" />
            <ArrayField source="photos">
                <SingleFieldList>
                    <ChipField source="id" />
                </SingleFieldList>
            </ArrayField>
        </Datagrid>
    </List>
);

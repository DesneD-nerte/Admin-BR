import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import UserTitle from "./ItemTitle";

export const ItemEdit = () => (
    <Edit title={<UserTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";
import UserTitle from "./UserTitle";

export const UserEdit = () => (
    <Edit title={<UserTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="password" disabled />
            <TextInput source="email" />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
);

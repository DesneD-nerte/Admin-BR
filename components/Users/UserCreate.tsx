import { BooleanInput, Create, PasswordInput, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <PasswordInput source="password" />
            <TextInput source="email" />
            <BooleanInput source="isActive" defaultValue={true} disabled />
        </SimpleForm>
    </Create>
);

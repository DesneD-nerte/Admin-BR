import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ItemCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const PantsPromoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/* <ReferenceInput source="pantsPromoId" reference="pants">
                <SelectInput source="id" optionText="name"  />
            </ReferenceInput> */}
            <TextInput source="name" />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Edit>
);

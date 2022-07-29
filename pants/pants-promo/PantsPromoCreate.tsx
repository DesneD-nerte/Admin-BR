import {
    Create,
    ImageField,
    ImageInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";

export const PantsPromoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <ImageInput source="imageUrl" label="Related pictures" accept="image/*">
                <ImageField source="imageUrl" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

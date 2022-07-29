import { Datagrid, ImageField, List, TextField, ReferenceField } from "react-admin";
import MyImageField from "../../UI/MyImageField";

function PantsPromoList() {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
                {/* <ImageField title="image"/> */}
                <MyImageField source="imageUrl"></MyImageField>
                <ReferenceField source="pantsId" reference="items/pants">
                    <TextField source="name" />
                </ReferenceField>
            </Datagrid>
        </List>
    );
}

export { PantsPromoList };

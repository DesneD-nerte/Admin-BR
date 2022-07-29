// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser, fetchUtils, EditGuesser } from "react-admin";

import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../Users/UserList";
import { PostList } from "../Posts/PostList";
import { PostEdit } from "../Posts/PostEdit";
import { PostCreate } from "../Posts/PostCreate";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { UserCreate } from "../Users/UserCreate";
import { UserEdit } from "../Users/UserEdit";
import { ItemList } from "../Items/ItemList";
import { ItemCreate } from "../Items/ItemCreate";
import { ItemEdit } from "../Items/ItemEdit";

import pantsPromo from "../pants/pants-promo";

const dataProvider = simpleRestProvider("http://localhost:5000");
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
        <Resource
            name="items"
            list={ItemList}
            create={ItemCreate}
            edit={ItemEdit}
            icon={PostIcon}
        ></Resource>
        <Resource
            name="pants-promo"
            options={{ label: "Pants Promo" }}
            {...pantsPromo}
        ></Resource>
        <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
            icon={UserIcon}
        ></Resource>
    </Admin>
);

export default App;

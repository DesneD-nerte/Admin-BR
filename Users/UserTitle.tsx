import React from "react";
import { useRecordContext } from "react-admin";

function UserTitle() {
    const record = useRecordContext();

    return <span>User {record ? `"${record.title}"` : ""}</span>;
}

export default UserTitle;

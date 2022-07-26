import React from "react";
import { useRecordContext } from "react-admin";

function ItemTitle() {
    const record = useRecordContext();

    return <span>Item {record ? `"${record.title}"` : ""}</span>;
}

export default ItemTitle;

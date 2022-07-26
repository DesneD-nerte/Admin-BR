import React from "react";
import { useRecordContext } from "react-admin";

type uriFieldProps = {
    source: string;
};

function MyUriField({ source }: uriFieldProps) {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]} style={{ color: "blue" }}>
            {record[source]}
        </a>
    ) : null;
}

export default MyUriField;

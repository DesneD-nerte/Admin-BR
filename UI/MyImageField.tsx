import Image from "next/image";
import React from "react";
import { useRecordContext } from "react-admin";

type imageFieldProps = {
    source: string;
};

function MyImageField({ source }: imageFieldProps) {
    const record = useRecordContext();
    console.log(record);

    return (
        <div>
            <Image
                src={"http:localhost:5000/" + record[source]}
                width={120}
                height={70}
            />
        </div>
    );
}

export default MyImageField;

import { useState } from "react";
import ScaleLoader  from "react-spinners/ScaleLoader";

const override = {
    display: "block",
    width: "fit-content",
    margin: "100px auto",
};

export default function Loader() {
    let [loading] = useState(true);
    let [color] = useState("#334155");

    return (
        <ScaleLoader 
            color={color}
            loading={loading}
            cssOverride={override}
            size={100}
        />
    );
}

import { useState } from "react";
import ScaleLoader  from "react-spinners/ScaleLoader";

const override = {
    display: "block",
    width: "fit-content",
    margin: "100px auto",
    borderColor: "red",
};

export default function Loader() {
    let [loading] = useState(true);
    let [color] = useState("#6366f1");

    return (
        <ScaleLoader 
            color={color}
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

import React, { useEffect, useState } from "react";
import { getProdcutsService } from "../../services/services";
import Card from "../card/card";
import Alert from "../common/alert/alert";

export default function Cards() {
    const [products, setProducts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const skeletons = [1, 2, 3, 4, 5];

    const getProducts = async () => {
        try {
            const { data } = await getProdcutsService();
            setProducts(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setTimeout(() => {
                setIsPending(false);
            }, 1100);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="w-full p-20 grid xl:grid-cols-4 md:grid-cols-2 auto-rows-auto justify-items-center gap-y-8">
            {isPending ? (
                skeletons.map((skeleton) => (
                    <div
                        key={skeleton}
                        className="skeleton h-[450px] w-[250px]"
                    ></div>
                ))
            ) : errorMessage ? (
                <Alert message={errorMessage} />
            ) : (
                products.map((product) => (
                    <Card key={product?.id} {...product} />
                ))
            )}
        </div>
    );
}

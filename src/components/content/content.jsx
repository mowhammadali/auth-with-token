import React, { useEffect, useState } from "react";
import { getUserDataService } from "../../services/services";

export default function Content() {
    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        try {
            const { data } = await getUserDataService();
            setUserData(data);
        } catch (error) {}
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="w-full flex justify-center items-center mt-12">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body flex-row justify-between items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl">{userData?.name}</h2>
                        <p className="text-lg">{userData?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

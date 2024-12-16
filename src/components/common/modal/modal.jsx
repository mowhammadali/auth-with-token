import React from "react";
import { MdLogout } from "react-icons/md";

export default function Modal({func}) {
    return (
        <React.Fragment>
            <dialog id="logout_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-slate-800 absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="text-base-content mb-8">Are you sure to sign out?</h3>
                    <button className="btn btn-active btn-neutral rounded-md"
                        onClick={func}>
                        <MdLogout className="text-2xl"/>
                        <p>Sign out</p>
                    </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </React.Fragment>
    );
}

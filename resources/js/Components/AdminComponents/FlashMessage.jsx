import React, { useEffect, useState } from "react";

const FlashMessage = ({ flash }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState({
        message: "",
        error: "",
    });
    const [timestamp, setTimestamp] = useState(Date.now());

    useEffect(() => {
        if (flash.message || flash.error) {
            setAlertMessage(flash);
            setShowAlert(true);

            const timer = setTimeout(() => {
                setShowAlert(false);
                setAlertMessage({ message: "", error: "" });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [flash, timestamp]);

    return (
        <>
            {showAlert && (
                <div className="w-full h-full  bg-secondary bg-opacity-10 fixed z-[100] flex justify-center items-center backdrop-blur-sm alert-container-animation">
                    <div className="w-[30%] h-[30%] bg-white shadow-lg rounded-md p-5  alert-animation flex flex-col  items-center">
                        {/* create button close */}
                        <div className="w-full flex justify-end ">
                            <button
                                onClick={() => {
                                    setShowAlert(false);
                                    setAlertMessage({ message: "", error: "" });
                                }}
                                className="btn btn-secondary rounded-full"
                            >
                                <i className="bi bi-x-lg font-bold"></i>
                            </button>
                        </div>

                        {alertMessage.message && (
                            <>

                                <h1
                                    className="text-center text-xl font-extrabold text-primary"

                                >{alertMessage.message}</h1>
                                <img
                                    className="object-contain h-[50%] "
                                    src="/assets/img/konten/checklist.gif"
                                    alt=""
                                />
                            </>
                        )}

                        {alertMessage.error && (
                            <>
                                <h1
                                className="text-center text-xl font-extrabold text-primary"
                                >{alertMessage.error}</h1>
                                <img
                                    className="object-contain h-[50%] "
                                    src="/assets/img/konten/will.gif"
                                    alt=""
                                />
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* create alert animation pop up absolute center */}
        </>
    );
};

export default FlashMessage;

import React, { useEffect, useState } from "react";

const FlashMessage = ({flash}) => {
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
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [flash, timestamp]);
    return (
        <>
            {showAlert && (
                <div
                    className={`alert ${
                        alertMessage.message ? "alert-info" : "alert-error"
                    } my-4 flex transition ease-in-out delay-150`}
                >
                    <div className="rounded-full border-2 border-blue-950">
                        {alertMessage.message && (
                            <i className="fas fa-info px-2"></i>
                        )}

                        {alertMessage.error && (
                            <i className="fas fa-exclamation-triangle px-2"></i>
                        )}
                    </div>

                    {alertMessage.message && (
                        <span>{alertMessage.message}</span>
                    )}

                    {alertMessage.error && <span>{alertMessage.error}</span>}
                </div>
            )}
        </>
    );
};

export default FlashMessage;

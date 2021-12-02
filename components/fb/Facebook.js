import { useEffect } from "react";
import { init, cleanup } from "./Fb";

export default function Facebook1() {
    useEffect(() => {
        console.log("Facebook1");
        init();

        return () => {
            cleanup();
        };
    }, []);

    return (
        <>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat"></div>
        </>
    );
}

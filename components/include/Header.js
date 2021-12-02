import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useRef } from "react";
import EventEmitter from "eventemitter3";

export default function Header() {
    const [active, setActive] = useState(false);
    const [btnSlider, setBtnSlider] = useState("btn1");
    const myRef = useRef(null);

    const btnClass = active ? styles.active : styles.menu_btn;
    const navClass = active ? styles.navigation_active : styles.navigation;
    const eventEmitter = new EventEmitter();

    const onClick = () => {
        setActive(!active);
        // console.log("On click", active);
    };

    const scrollClick = () => {
        console.log("Scroll click");
        eventEmitter.emit("event");
    };
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <a className={styles.brand}>
                        <span style={{ margin: "0", padding: "0" }}>
                            Naadam Festival
                        </span>
                        <p className={styles.logo_text}>
                            Fascinating event of the nomads
                        </p>
                    </a>
                </Link>
                <div className={btnClass} onClick={onClick} />
                <div className={navClass}>
                    <div className={styles.navigation_items}>
                        <Link href="/">
                            <a className="">HOME</a>
                        </Link>
                        <Link href={"/alltours"}>
                            <a className="">NAADAM FESTIVAL TOURS</a>
                        </Link>
                        <Link href="/travelsupport">
                            <a className="">TRAVEL SUPPORT</a>
                        </Link>
                        <Link href="/tailormadeholiday">
                            <a className="">TAILOR MADE HOLIDAY</a>
                        </Link>
                        <Link href="/contactus">
                            <a className="">CONTACT US</a>
                        </Link>
                        <Link href="/aboutus">
                            <a className="">ABOUT US</a>
                        </Link>
                        <Link href="/requestbrochure">
                            <a className="">REQUEST BROCHURE</a>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

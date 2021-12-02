import styles from "../styles/VideoSlide.module.css";
import Link from "next/link";

export default function VideoSlide() {
    return (
        <>
            <section className={styles.home}>
                <video src="/video/video2.mp4" autoPlay={true} muted loop />
                <div className={`${styles.content}`}>
                    <h1>Your lifelong lasting memories </h1>
                    <div style={{ bottom: "0" }}>
                        <h1>Naadam Festival highlights</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

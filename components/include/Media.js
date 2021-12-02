import styles from "./Media.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitterSquare,
    faYoutubeSquare,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Media(props) {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#ecebc7",
                    height: "250px",
                    paddingTop: "10px",
                }}
            >
                <div className={styles.line}>
                    <hr className={styles.h_line} />
                </div>
                <div className={styles.main}>
                    <div className={styles.title}>
                        <h1>{props?.text}</h1>
                        <p>{props?.text2}</p>
                    </div>
                    <div className={styles.icon}>
                        <Link href="https://www.facebook.com/Naadam-Festival-103432442049755">
                            <a target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    color="#3b5998"
                                />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/naadamfestival/?fbclid=IwAR1UINf6SxN5dx4OjU7nylcWukrg1oBckEodI58vOKs4skKkokdeHrfqI0E">
                            <a target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faInstagramSquare}
                                    color="#bc2a8d"
                                />
                            </a>
                        </Link>
                        <Link
                            href="https://twitter.com/NaadamF?fbclid=IwAR063lmtFuuu4bLKciMQX2Iwb4DSATSCRPQWUoB9kBoykRUT3QqjAT2KF8w"
                            passHref
                        >
                            <a target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faTwitterSquare}
                                    color="#00aced"
                                />
                            </a>
                        </Link>
                        <Link href="">
                            <a target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faYoutubeSquare}
                                    color="#cd201f"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitterSquare,
    faYoutubeSquare,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faShareAltSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export default function SocialIcons() {
    return (
        <>
            <div className="fixed-menu hidden-xs" id="title">
                <ul>
                    <li className="info">
                        <Link
                            href={
                                "https://www.facebook.com/Naadam-Festival-103432442049755"
                            }
                        >
                            <a>
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                    color="#FFF"
                                />
                            </a>
                        </Link>
                        <div className="collapse-menu">
                            <Link
                                href={
                                    "https://www.facebook.com/Naadam-Festival-103432442049755"
                                }
                            >
                                <a target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faInstagramSquare}
                                        color="#FFF"
                                    />
                                    <span> Facebook</span>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className="info">
                        <Link
                            href={
                                "https://twitter.com/NaadamF?fbclid=IwAR063lmtFuuu4bLKciMQX2Iwb4DSATSCRPQWUoB9kBoykRUT3QqjAT2KF8w"
                            }
                        >
                            <a>
                                <FontAwesomeIcon
                                    icon={faTwitterSquare}
                                    color="#FFF"
                                />
                            </a>
                        </Link>
                        <div className="collapse-menu">
                            <Link
                                href={
                                    "https://twitter.com/NaadamF?fbclid=IwAR063lmtFuuu4bLKciMQX2Iwb4DSATSCRPQWUoB9kBoykRUT3QqjAT2KF8w"
                                }
                            >
                                <a target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faTwitterSquare}
                                        color="#FFF"
                                    />
                                    <span> Twitters</span>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className="info">
                        <a>
                            <FontAwesomeIcon
                                icon={faInstagramSquare}
                                color="#FFF"
                            />
                        </a>
                        <div className="collapse-menu">
                            <Link
                                href={
                                    "https://www.instagram.com/naadamfestival/?fbclid=IwAR1UINf6SxN5dx4OjU7nylcWukrg1oBckEodI58vOKs4skKkokdeHrfqI0E"
                                }
                            >
                                <a target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faInstagramSquare}
                                        color="#FFF"
                                    />
                                    <span> Instagram</span>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className="info">
                        <a>
                            <FontAwesomeIcon
                                icon={faShareAltSquare}
                                color="#FFF"
                            />
                        </a>
                        <div className="collapse-menu">
                            <Link
                                href={
                                    "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnaadamfest.com"
                                }
                            >
                                <a target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faShareAltSquare}
                                        color="#FFF"
                                    />
                                    <span> Share</span>
                                </a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                .fixed-menu {
                    position: fixed;
                    right: 1px;
                    top: 35%;
                    z-index: 9999;
                }

                .fixed-menu ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }

                .fixed-menu ul li {
                    position: relative;
                    z-index: 9999;
                }

                .fixed-menu ul li a {
                    display: block;
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 1.5rem;
                    background: #ff6600;
                    /* \tbackground: #064873 */
                    color: #fff;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    -moz-transition: all 200ms ease-in 0.1s;
                    -o-transition: all 200ms ease-in 0.1s;
                    transition: all 200ms ease-in 0.1s;
                }

                .fixed-menu ul li a:hover {
                    background: #ff6600;
                    font-size: 2rem;
                }

                .fixed-menu ul li.info {
                    position: relative;
                }

                .fixed-menu ul li.info .collapse-menu {
                    width: 200px;
                    position: absolute;
                    bottom: 0;
                    right: -200px;

                    z-index: 9;
                    -moz-transition: all 200ms ease-in 0.1s;
                    -o-transition: all 200ms ease-in 0.1s;
                    transition: all 200ms ease-in 0.1s;
                }

                .fixed-menu ul li.info .collapse-menu a {
                    float: right;
                    display: block;
                    width: 150px;
                    padding: 0;
                    margin: 0;
                    font-size: 1.5rem;
                    text-decoration: none;
                    cursor: pointer;
                }

                .fixed-menu ul li.info .collapse-menu a i {
                    margin-right: 10px;
                }

                .fixed-menu ul li.info:hover .collapse-menu {
                    right: 0;
                }

                .info {
                    margin: 0px;
                }

                @media (max-width: 1040px) {
                    .hidden-xs {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}

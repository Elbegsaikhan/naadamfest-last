import styles from "./Footer.module.css";
import Link from "next/link";
import Facebook1 from "../fb/Facebook";
import Contact from "../Contact";
import Media from "./Media";
import FooterSection from "./FooterSection";

export default function Footer() {
    return (
        <>
            <Contact />
            <div>
                <Media
                    text="Connect With Us"
                    text2="Follow us around the world"
                />
                <FooterSection />
            </div>

            <footer className={styles.site_footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mt-2">
                            <p className="text-justify mt-4">
                                Naadam Fest is a trade mark of Jargal Expedition
                                Ltd.
                                <br />
                                Registered in Mongolia. Company Registration
                                Number: 6497969.
                                <br />
                                Registered Office: Khan-Uul District, Chingis
                                Khan Avenue-20/1, Ulaanbaatar, Mongolia
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className={styles.footer_links}>
                                <li>
                                    <Link href={"/aboutus"}>
                                        <a>ABOUT US</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/bookingtermsandconditions"}>
                                        <a>BOOKING TERMS AND CONDITIONS</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/fortravelagent"}>
                                        <a>FOR TRAVEL AGENT</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/privacypolicy"}>
                                        <a>PRIVACY POLICY</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-5">
                            <h6>FESTIVAL TOURS</h6>
                            <ul className={styles.footer_links}>
                                <li>
                                    <Link
                                        href={
                                            "/naadamfestivaltours/naadam-festival-and-ancient-capital-city"
                                        }
                                    >
                                        <a
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            naadam festival and ancient capital
                                            city
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={
                                            "/naadamfestivaltours/naadam-festival-and-central-region-of-mongolia"
                                        }
                                    >
                                        <a
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            naadam festival and central region
                                            of mongolia
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={
                                            "/naadamfestivaltours/naadam-festival-and-epic-mongolian-overland"
                                        }
                                    >
                                        <a
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            naadam festival and epic mongolian
                                            overlord
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={
                                            "/naadamfestivaltours/naadam-festival-and-great-gobi-desert"
                                        }
                                    >
                                        <a
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            naadam festival and impressions of
                                            the great gobi desert
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={
                                            "/naadamfestivaltours/naadam-festival-and-mongolian-blue-pearl"
                                        }
                                    >
                                        <a
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            naadam festival and mongolian blue
                                            pearl
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={
                                            "/naadamfestivaltours/naadam-festival-and-ultimate-west"
                                        }
                                    >
                                        <a
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            naadam festival and ultimate west
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Facebook1 />
            </footer>
        </>
    );
}

import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiForumOutline, mdiEmail, mdiPhone } from "@mdi/js";
import { Container } from "react-bootstrap";
import Cards from "../components/Card/Cards";
import Media from "../components/include/Media";
import VideoSlide from "../components/VideoSlide";
import BlockContent from "@sanity/block-content-to-react";
import { getMainPage, getToursLink } from "../lib/api";
import Facebook1 from "../components/fb/Facebook";
import Contact from "../components/Contact";
import { useRef } from "react";
import EventEmitter from "eventemitter3";

export default function Home({ page, data }) {
    // const serializers = {
    //     types: {
    //         code: (props) => (
    //             <pre data-language={props.node.language}>
    //                 <code>{props.node.code}</code>
    //             </pre>
    //         ),
    //     },
    // };
    const myRef = useRef(null);
    const myLoader = ({ src }) => {
        return `${src}`;
    };
    const eventEmitter = new EventEmitter();

    eventEmitter.on("event", function firstListener() {
        console.log("EMiitititi");
        myRef.current.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <div>
            <Head>
                <title>Naadam Festival</title>
                <meta name="description" content="Naadam festival event" />
                <meta name="author" content="Naadam Festival" />
                <meta
                    name="keywords"
                    content="Naadam festival, Tailor Made Mongolia, Mongolia, Mongol naadam, NAADAM FESTIVAL AND ANCIENT CAPITAL CITY, NAADAM FESTIVAL AND CENTRAL REGION OF MONGOLIA,
                    NAADAM FESTIVAL AND EPIC MONGOLIAN OVERLAND, NAADAM FESTIVAL AND GREAT GOBI DESERT, NAADAM FESTIVAL AND MONGOLIAN BLUE PEARL, NAADAM FESTIVAL AND ULTIMATE WEST,
                    Jargal Expedition, Mongolia Travel Information, tailor made holidays in Mongolia"
                />
                <meta property="og:type" content="website" />
                {/*End url bichne*/}
                <meta property="og:url" content="http://naadamfest.com/" />
                <meta
                    property="og:title"
                    content="naadamfest.com :: Naadam Festival"
                />
                <meta
                    property="og:description"
                    content="For millennia, herders have lived on the Mongolian land, living as free as the country is wide. Mongolia’s vast steppe is home to one of the world’s last surviving nomadic cultures. The Mongolian steppe remains mostly intact, and its nomadic way of life has been largely unchanged for generations. Some herding customs alive today pre-date the era of Genghis Khan."
                />
                <meta property="og:site_name" content="naadamfest.com" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="799" />
                <meta
                    property="og:image"
                    content="https://cdn.sanity.io/images/aj69bwet/production/87731def5a651b9d29f99489ab9cd3077cebed78-3215x960.png?w=1000&h=1000&fit=max"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="naadamfest.com" />
                <link rel="canonical" href="http://naadamfest.com/" />
                <link rel="icon" href="/favicon_n.ico" />
            </Head>

            <main>
                <div
                    style={{ backgroundColor: "#ff6600", position: "relative" }}
                >
                    <div style={{ marginTop: "80px" }} />
                    <Image
                        src={page[0]["image"]}
                        alt="naadam festival"
                        objectFit="cover"
                        layout="responsive"
                        width={900}
                        height={300}
                    />
                    <div className={styles.main_title}>
                        <h1>
                            There is nowhere else like it
                            <br /> <span>
                                Mongolia is an unexplored beauty
                            </span>{" "}
                        </h1>
                    </div>
                    <div className={styles.bottom_text}>
                        <p>{page[0]["text1"]}</p>
                    </div>
                </div>
                <div className={styles.why_travel}>
                    <h1>{page[0]["text2"]}</h1>
                </div>
                <Container fluid style={{ margin: 0, padding: 0 }}>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            textAlign: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <div className={styles.travel_text}>
                            <h1>{page[0]["text2_sub1_title1"]}</h1>
                            <BlockContent
                                blocks={page[0]["text2_sub1"]}
                                // serializers={serializers}
                            />
                        </div>
                        <div className={styles.travel_text}>
                            <h1>{page[0]["text2_sub1_title2"]}</h1>
                            <BlockContent
                                blocks={page[0]["text2_sub2"]}
                                // serializers={serializers}
                            />
                        </div>
                        <div className={styles.travel_text}>
                            <h1>{page[0]["text2_sub1_title3"]}</h1>
                            <BlockContent
                                blocks={page[0]["text2_sub3"]}
                                // serializers={serializers}
                            />
                        </div>
                    </div>
                    <div className={styles.naadam_more}>
                        <Image
                            loader={myLoader}
                            src={page[0]["image2"]}
                            alt="naadam"
                            // objectFit="cover"
                            layout="responsive"
                            width={1350}
                            height={400}
                        />
                        <div className={styles.naadam_div}>
                            <p>{page[0]["image2Cap"]}</p>
                            <br />
                            <Link href="/whymongolia">
                                <a>Learn more</a>
                            </Link>
                        </div>
                    </div>
                    {/*Cards*/}
                    <Cards tours={data} />
                    {/*===*/}
                    <div className={styles.naadam_more}>
                        <Image
                            loader={myLoader}
                            src={page[0]["image3"]}
                            alt="naadam"
                            // objectFit="cover"
                            layout="responsive"
                            width={1350}
                            height={600}
                        />
                        <div className={styles.naadam_div}>
                            <p style={{ fontFamily: "CenturySchool" }}>
                                {page[0]["image3Cap"]}
                            </p>
                            <br />
                            <Link href="/tailormadeholiday">
                                <a>Learn more</a>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <VideoSlide />
                    </div>
                </Container>
            </main>
            {/*<Facebook1 />*/}
        </div>
    );
}

export const getServerSideProps = async () => {
    const page = await getMainPage();
    const data = await getToursLink();
    return {
        props: {
            page,
            data,
        },
    };
};

import Path from "../../components/Path";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import naadam3 from "../../public/images/sur.jpg";
import styles from "../../styles/Tours.module.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getAllToursSlug, getTours, getToursLink } from "../../lib/api";
import BlockContent from "@sanity/block-content-to-react";
import Comp from "../../components/Comp.js";
import Media from "../../components/include/Media";
import NaadamCard from "../../components/Card/NaadamCard";
import MyModal from "../../components/MyModal";

export default function Tours({ tours, related }) {
    // console.log("Tours", tours[0]);
    const iti = tours[0]["itinerary"];
    const img = tours[0]["itimage"];
    const dateAnd = tours[0]["dateand"];
    // console.log("ITi", img);
    return (
        <>
            <Head>
                <title>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</title>
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
            <div>
                <div className={styles.tours_main}>
                    <Image
                        src={naadam3}
                        alt="naadam festival"
                        layout="responsive"
                        objectFit="cover"
                    />
                    <div className={styles.image_title}>
                        <p>{tours[0]["title"]}</p>
                    </div>
                    <div className={styles.bottom_text}>
                        <p>
                            {" "}
                            Creating extraordinary tailor-made Naadam Festival
                            journeys across Mongolia{" "}
                        </p>
                    </div>
                </div>
                <Path name={`Festival Tours | ${tours[0]["title"]}`} />
                <Container fluid>
                    <Row>
                        <Col md={9}>
                            <Tabs className={styles.tabs}>
                                <TabList>
                                    <Tab>TOUR OVERVIEW</Tab>
                                    <Tab> ITINERARY</Tab>
                                    <Tab> DATES AND PRICES</Tab>
                                    <Tab> HOLIDAY INFORMATION</Tab>
                                </TabList>
                                {tours.map((tour, index) => (
                                    <>
                                        <TabPanel
                                            key={index}
                                            className={styles.tour_text}
                                        >
                                            <BlockContent
                                                blocks={tour.overview}
                                            />
                                        </TabPanel>
                                        <TabPanel>
                                            {iti?.map((it, index) => (
                                                <Comp
                                                    key={index}
                                                    title={it.title}
                                                    text={it.bio}
                                                    img={img[index]}
                                                />
                                            ))}
                                        </TabPanel>
                                        <TabPanel>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Departing</th>
                                                        <th>Tour Name</th>
                                                        <th>Code</th>
                                                        <th>Duration</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {
                                                                tour["dateand"][
                                                                    "depart"
                                                                ]
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                tour["dateand"][
                                                                    "tourname"
                                                                ]
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                tour["dateand"][
                                                                    "code"
                                                                ]
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                tour["dateand"][
                                                                    "duration"
                                                                ]
                                                            }
                                                        </td>
                                                        <td
                                                            style={{
                                                                display: "flex",
                                                            }}
                                                        >
                                                            From $
                                                            {
                                                                tour["dateand"][
                                                                    "price"
                                                                ]
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </TabPanel>
                                        <TabPanel
                                            key={index}
                                            className={styles.tour_text}
                                        >
                                            <BlockContent
                                                blocks={tour.holiday}
                                            />
                                        </TabPanel>
                                    </>
                                ))}
                            </Tabs>
                        </Col>
                        <Col md={3}>
                            <div className={styles.book_card}>
                                <div className={styles.book_title}>
                                    <p>
                                        From <span>${dateAnd["price"]}</span>per
                                        person
                                    </p>
                                    person**airfare not included
                                    <div>
                                        <div className={styles.button}>
                                            {/*Request A Quote{" "}*/}
                                            <MyModal
                                                buttoName={"Request A Quote"}
                                                custom={true}
                                                defTour={tours[0]["title"]}
                                            />
                                        </div>
                                        <hr />
                                        <div className={styles.par}>
                                            <p>
                                                Date: {dateAnd["depart"]}
                                                <br />
                                                Duration: {dateAnd["duration"]}
                                                <br />
                                                Accommodation: 4 nights 4 Star
                                                hotel, 1- night Ger Camp
                                                <br />
                                                Adventure rate: Comfortable &
                                                Active Tailor this tour: <br />{" "}
                                                As this is your holiday, please
                                                feel free to discuss your
                                                preferences with us and we will
                                                cover or cut a tour according to
                                                your wishes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Media text2="Follow as around" />
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <h1
                            style={{
                                textAlign: "center",
                                textTransform: "uppercase",
                                fontFamily: "Roboto",
                                fontSize: "2rem",
                                margin: "20px 40px",
                            }}
                        >
                            Naadam Festival Related Tours
                        </h1>
                        <NaadamCard related={related} />
                    </div>
                </Container>
            </div>
        </>
    );
}

export const getServerSideProps = async ({ params }) => {
    console.log("Get Static Props", params);

    const tours = await getTours(params);
    const related = await getToursLink();
    return {
        props: {
            tours,
            related,
        },
    };
};
// export const getStaticPaths = async () => {
//     console.log("getStatic paths");
//     let response = await getAllToursSlug();
//     const paths = response.map((slug) => ({
//         params: slug,
//     }));
//     return {
//         paths,
//         fallback: false,
//     };
// };

import styles from "../../styles/Cards.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Cards({ tours }) {
    const datas = Object.values(tours);
    console.log("DATAS", datas);
    // const date = datas["dateand"];
    const myLoader = ({ src }) => {
        return `${src}`;
    };
    return (
        <>
            <Container fluid>
                <div className={styles.main}>
                    <Row>
                        <Col md={3} className={styles.card_first}>
                            <div className={styles.cart_fff}>
                                <Image
                                    src={"/images/naadam.jpg"}
                                    alt="boh"
                                    layout="responsive"
                                    width={250}
                                    height={200}
                                    objectFit="cover"
                                    className={styles.fff_image}
                                />
                                <div className={styles.card_title}>
                                    <Link href={"/savenow"}>
                                        <a
                                            className={`${styles.link__metis}${styles.link}`}
                                        >
                                            <h1>SAVE NOW</h1>
                                        </a>
                                    </Link>
                                    <p>
                                        Special offers valid until 20 April
                                        2022. Don&apos;t miss out!
                                    </p>
                                    <Link href={"/savenow"}>
                                        <a>
                                            <h3>UP TO 15%</h3>
                                        </a>
                                    </Link>
                                    <p>On Naadam Festival event </p>
                                    <div
                                        style={{
                                            padding: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {/*<h4>Learn More</h4>*/}
                                        <Link href={"/savenow"}>
                                            <a>
                                                <Button
                                                    variant="outline-warning"
                                                    className={styles.button}
                                                >
                                                    Learn more
                                                </Button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Row>
                                {datas.map((tour, index) => (
                                    <Col md={4} xs={6} key={index}>
                                        <div className={styles.card_second}>
                                            <Link
                                                href={`/naadamfestivaltours/${tour.slug.current}`}
                                            >
                                                <a
                                                    href={`/naadamfestivaltours/${tour.slug.current}`}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <Image
                                                        loader={myLoader}
                                                        src={tour.image}
                                                        alt="boh"
                                                        layout="responsive"
                                                        width={300}
                                                        height={250}
                                                        objectFit="cover"
                                                        className={styles.image}
                                                    />
                                                </a>
                                            </Link>
                                            <div
                                                className={
                                                    styles.cart_second_title
                                                }
                                            >
                                                <p>
                                                    Trip Style: Classic, Short
                                                    Break
                                                </p>
                                                <Link
                                                    href={`/naadamfestivaltours/${tour.slug.current}`}
                                                >
                                                    <a>
                                                        <p
                                                            style={{
                                                                height: "40px",
                                                            }}
                                                        >
                                                            {tour.title}
                                                        </p>
                                                    </a>
                                                </Link>
                                                <p className={styles.date}>
                                                    {
                                                        tour["dateand"][
                                                            "duration"
                                                        ]
                                                    }
                                                </p>
                                                <hr
                                                    style={{ color: "#ff6600" }}
                                                />
                                                <div className={styles.price}>
                                                    <div>
                                                        <p>starting at:</p>
                                                        <p
                                                            className={
                                                                styles.date
                                                            }
                                                        >
                                                            ${" "}
                                                            {new Intl.NumberFormat(
                                                                "en-IN",
                                                                {
                                                                    maximumSignificantDigits: 3,
                                                                }
                                                            ).format(
                                                                tour["dateand"][
                                                                    "price"
                                                                ]
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={`/naadamfestivaltours/${tour.slug.current}`}
                                                        >
                                                            <a>
                                                                <Button
                                                                    variant="outline-warning"
                                                                    className={
                                                                        styles.button
                                                                    }
                                                                >
                                                                    View package
                                                                </Button>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import wwf from "../../public/images/wwf.png";
import mongol from "../../public/images/sadsa.jpg";

export default function FooterSection() {
    return (
        <>
            <Container>
                <div className="main">
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "10px",
                            marginRight: "10px",
                        }}
                    >
                        <h1 className="title1">
                            We Are <br /> Member
                        </h1>
                    </div>
                    <div>
                        <Link href={"http://www.travelmongolia.org/"}>
                            <a target="_blank" rel="noreferrer">
                                <Image
                                    src={mongol}
                                    alt="logo"
                                    layout={"fixed"}
                                    width={"200px"}
                                    height={"200px"}
                                />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href={"https://www.jata-net.or.jp/english/"}>
                            <a target="_blank" rel="noreferrer">
                                <Image
                                    src="/images/jata.png"
                                    alt="logo"
                                    layout={"fixed"}
                                    width={"250px"}
                                    height={"200px"}
                                />
                            </a>
                        </Link>
                    </div>
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "10px",
                            marginRight: "10px",
                        }}
                    >
                        <h1 className="title1">
                            We proudly <br /> work with
                        </h1>
                    </div>

                    <div>
                        <Link href={"https://mongolia.panda.org/"}>
                            <a target="_blank" rel="noreferrer">
                                <Image
                                    src={wwf}
                                    alt="logo"
                                    layout={"fixed"}
                                    width={"200px"}
                                    height={"200px"}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
            {/*<Container>*/}
            {/*    <Row>*/}
            {/*        <Col xs={"6"} md="auto">*/}
            {/*            <div*/}
            {/*                style={{*/}
            {/*                    height: "100%",*/}
            {/*                    display: "flex",*/}
            {/*                    alignItems: "center",*/}
            {/*                    marginLeft: "50px",*/}
            {/*                    marginRight: "10px",*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                <h1 className="title1">*/}
            {/*                    We Are <br /> Member*/}
            {/*                </h1>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*        <Col xs={"6"} md="auto">*/}
            {/*            <Image*/}
            {/*                src="http://riverfishingmongolia.com/wp-content/themes/mongoliangobitour/images/logo12.jpg"*/}
            {/*                alt="logo"*/}
            {/*                layout={"fixed"}*/}
            {/*                width={"200px"}*/}
            {/*                height={"200px"}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*        <Col xs={"6"} md="auto">*/}
            {/*            <div*/}
            {/*                style={{*/}
            {/*                    height: "100%",*/}
            {/*                    display: "flex",*/}
            {/*                    alignItems: "center",*/}
            {/*                    marginLeft: "10px",*/}
            {/*                    marginRight: "10px",*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                <h1 className="title1">*/}
            {/*                    We proudly <br /> work with*/}
            {/*                </h1>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*        <Col xs={"6"} md="auto">*/}
            {/*            <Image*/}
            {/*                src="http://riverfishingmongolia.com/wp-content/themes/mongoliangobitour/images/logo3.jpg"*/}
            {/*                alt="logo"*/}
            {/*                layout={"fixed"}*/}
            {/*                width={"200px"}*/}
            {/*                height={"200px"}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*        <Col xs={"12"} md="auto">*/}
            {/*            <Image*/}
            {/*                src="/images/jata.png"*/}
            {/*                alt="logo"*/}
            {/*                layout={"fixed"}*/}
            {/*                width={"250px"}*/}
            {/*                height={"200px"}*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}

            <style jsx>{`
                .main {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    //background-color: #bbbbbb;
                    max-height: 600px;
                    //max-width: 900px;
                    font-family: Transat, sans-serif;
                    text-transform: inherit;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    //margin-left: 50px;
                }

                .title1 {
                    font-size: 2.5rem;
                    color: #000000;
                    font-weight: 500;
                    text-align: center;
                }
            `}</style>
        </>
    );
}

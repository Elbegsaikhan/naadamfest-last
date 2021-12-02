import Head from "next/head";
import Path from "../components/Path";
import {
    Container,
    Form,
    Button,
    FloatingLabel,
    Row,
    Col,
} from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactUs() {
    const form2 = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_gxbg5jh",
                "template_fnnvxih",
                form2.current,
                "user_NCFtk0eFn8gJVz7VICkwq"
            )
            .then(
                (result) => {
                    console.log("Email js send test", result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
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
                    content="http://naadamfest.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Faj69bwet%2Fproduction%2F87731def5a651b9d29f99489ab9cd3077cebed78-3215x960.png&w=1920&q=75"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="naadamfest.com" />
                <link rel="canonical" href="http://naadamfest.com/contactus" />
                <link rel="icon" href="/favicon_n.ico" />
            </Head>

            <div>
                <Path name="Contact Us" />
                {/*<Container fluid style={{ width: "90%" }}>*/}
                {/*    <div className="main">*/}
                {/*        <h1>WE ARE HERE TO HELP</h1>*/}
                {/*        <p>*/}
                {/*            Whether you have a single question or a special*/}
                {/*            request, we&apos;re here for you.*/}
                {/*        </p>*/}
                {/*        <div style={{ marginBottom: "30px" }} />*/}
                {/*        <Row className="second">*/}
                {/*            <Col xs={12} md={6} className={"col"}>*/}
                {/*                <h1>Contact</h1>*/}
                {/*                <p>*/}
                {/*                    We will be happy to answer your questions*/}
                {/*                    about the Naadam Festival tours. Kindly*/}
                {/*                    provide the details below to know more about*/}
                {/*                    joining our extraordinary Naadam Festival*/}
                {/*                    exclusive tours.*/}
                {/*                </p>*/}
                {/*                <Form*/}
                {/*                    method={"post"}*/}
                {/*                    onSubmit={sendMail}*/}
                {/*                    ref={form2}*/}
                {/*                >*/}
                {/*                    <FloatingLabel*/}
                {/*                        controlId="floatingInput"*/}
                {/*                        label="Your name"*/}
                {/*                        className="mb-3"*/}
                {/*                    >*/}
                {/*                        <Form.Control*/}
                {/*                            type="text"*/}
                {/*                            placeholder="your name"*/}
                {/*                            name="yourname"*/}
                {/*                        />*/}
                {/*                    </FloatingLabel>*/}
                {/*                    <FloatingLabel*/}
                {/*                        controlId="floatingInput"*/}
                {/*                        label="Your email"*/}
                {/*                        className="mb-3"*/}
                {/*                    >*/}
                {/*                        <Form.Control*/}
                {/*                            type="text"*/}
                {/*                            placeholder="email"*/}
                {/*                            className={"email"}*/}
                {/*                            name="email"*/}
                {/*                        />*/}
                {/*                    </FloatingLabel>*/}
                {/*                    <FloatingLabel*/}
                {/*                        controlId="floatingTextarea2"*/}
                {/*                        label="Your message"*/}
                {/*                        className="mb-3"*/}
                {/*                    >*/}
                {/*                        <Form.Control*/}
                {/*                            as="textarea"*/}
                {/*                            placeholder="Leave a comment here"*/}
                {/*                            style={{ height: "100px" }}*/}
                {/*                            name={"text"}*/}
                {/*                        />*/}
                {/*                    </FloatingLabel>*/}
                {/*                    <Button*/}
                {/*                        variant={"light"}*/}
                {/*                        size="lg"*/}
                {/*                        style={{*/}
                {/*                            backgroundColor: "#ff6600",*/}
                {/*                            color: "#fff",*/}
                {/*                        }}*/}
                {/*                        type="submit"*/}
                {/*                    >*/}
                {/*                        Send*/}
                {/*                    </Button>*/}
                {/*                </Form>*/}
                {/*            </Col>*/}
                {/*            <Col xs={12} md={6}>*/}
                {/*                <h1>Address</h1>*/}
                {/*                <div className="second">*/}
                {/*                    <div className={"icon"}>*/}
                {/*                        <IoLocationOutline className="icons" />*/}
                {/*                        <p>*/}
                {/*                            Jargal Expedition LLC. Khan Uul*/}
                {/*                            District, 2 nd khoroo, Chingis Khaan*/}
                {/*                            Avenue, Ulaanbaatar, Mongolia*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                    <div className={"icon"}>*/}
                {/*                        <BiPhone className="icons" />*/}
                {/*                        <p>976(1)-750-50-999</p>*/}
                {/*                    </div>*/}
                {/*                    <div className={"icon"}>*/}
                {/*                        <AiOutlineMail className="icons" />*/}
                {/*                        <p>info@naadamfest.com</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </div>*/}
                {/*    <style jsx>{`*/}
                {/*        .main {*/}
                {/*            margin-bottom: 50px;*/}
                {/*            margin-top: 50px;*/}
                {/*            font-family: CenturySchool, Roboto, sans-serif;*/}
                {/*        }*/}

                {/*        .main h1 {*/}
                {/*            text-align: center;*/}
                {/*            margin-bottom: 10px;*/}
                {/*            color: #1a4652;*/}
                {/*            font-size: 2rem;*/}
                {/*        }*/}

                {/*        .main p {*/}
                {/*            text-align: center;*/}
                {/*            font-size: 1.5rem;*/}
                {/*        }*/}

                {/*        .second {*/}
                {/*            //display: flex;*/}
                {/*            text-align: left;*/}
                {/*            margin-left: 20px;*/}
                {/*            padding: 20px;*/}
                {/*            border-left: 2px solid #ff6600;*/}

                {/*            //background-color: #1a4652;*/}
                {/*        }*/}

                {/*        .second .col h1 {*/}
                {/*            text-align: left !important;*/}
                {/*        }*/}

                {/*        .icon {*/}
                {/*            color: #ff6600;*/}
                {/*            font-size: 3rem;*/}
                {/*            display: flex;*/}
                {/*            align-items: flex-start;*/}
                {/*            margin-bottom: 20px;*/}
                {/*        }*/}

                {/*        .icon .icons {*/}
                {/*            font-size: 3rem !important;*/}
                {/*        }*/}

                {/*        .icon p {*/}
                {/*            margin-left: 15px;*/}
                {/*        }*/}

                {/*        .icon p {*/}
                {/*            color: #1c2430;*/}
                {/*            font-size: 1.2rem;*/}
                {/*        }*/}
                {/*    `}</style>*/}
                {/*</Container>*/}
            </div>
        </>
    );
}

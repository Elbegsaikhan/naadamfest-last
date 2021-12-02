import {
    Container,
    Button,
    Col,
    FloatingLabel,
    Form,
    Row,
} from "react-bootstrap";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const form2 = useRef(null);

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
                    toast.success("Sending...");
                    console.log("Email js send test contact", result.text);
                    form2.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
            <div style={{ backgroundColor: "#fff", padding: "20px" }}>
                <Container fluid style={{ width: "90%" }}>
                    <ToastContainer />
                    <div className="main">
                        <h1>WE ARE HERE TO HELP</h1>
                        <p>
                            Whether you have a single question or a special
                            request, we&apos;re here for you.
                        </p>
                        <div style={{ marginBottom: "30px" }} />
                        <Row className="second">
                            <Col xs={12} md={6} className={"col"}>
                                <h1>Contact</h1>
                                <p>
                                    We will be happy to answer your questions
                                    about the Naadam Festival tours. Kindly
                                    provide the details below to know more about
                                    joining our extraordinary Naadam Festival
                                    exclusive tours.
                                </p>
                                <Form
                                    method={"post"}
                                    onSubmit={sendMail}
                                    ref={form2}
                                >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Your name"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="your name"
                                            name="yourname"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Your email"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="email"
                                            className={"email"}
                                            name="email"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingTextarea2"
                                        label="Your message"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: "100px" }}
                                            name={"text"}
                                        />
                                    </FloatingLabel>
                                    <Button
                                        variant={"light"}
                                        size="lg"
                                        style={{
                                            backgroundColor: "#ff6600",
                                            color: "#fff",
                                        }}
                                        type="submit"
                                    >
                                        Send
                                    </Button>
                                </Form>
                            </Col>
                            <Col xs={12} md={6}>
                                <h1>Address</h1>
                                <div className="second">
                                    <div className={"icon"}>
                                        <IoLocationOutline className="icons" />
                                        <p>
                                            Jargal Expedition LLC. Khan Uul
                                            District, 2 nd khoroo, Chingis Khaan
                                            Avenue, Ulaanbaatar, Mongolia
                                        </p>
                                    </div>
                                    <div className={"icon"}>
                                        <BiPhone className="icons" />
                                        <p>976(1)-750-50-999</p>
                                    </div>
                                    <div className={"icon"}>
                                        <AiOutlineMail className="icons" />
                                        <Link
                                            href={"mailto:info@naadamfest.com"}
                                        >
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p>info@naadamfest.com</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <style jsx>{`
                        .main {
                            margin-bottom: 50px;
                            margin-top: 50px;
                            font-family: CenturySchool, Roboto, sans-serif;
                        }

                        .main h1 {
                            text-align: center;
                            margin-bottom: 10px;
                            color: #1a4652;
                            font-size: 2rem;
                        }

                        .main p {
                            text-align: center;
                            font-size: 1.5rem;
                        }

                        .second {
                            //display: flex;
                            text-align: left;
                            margin-left: 20px;
                            padding: 20px;
                            border-left: 2px solid #ff6600;

                            //background-color: #1a4652;
                        }

                        .second .col h1 {
                            text-align: left !important;
                        }

                        .icon {
                            color: #ff6600;
                            font-size: 3rem;
                            display: flex;
                            align-items: flex-start;
                            margin-bottom: 20px;
                        }

                        .icon .icons {
                            font-size: 3rem !important;
                        }

                        .icon p {
                            margin-left: 15px;
                        }

                        .icon p {
                            color: #1c2430;
                            font-size: 1.2rem;
                        }
                    `}</style>
                </Container>
            </div>
        </>
    );
}

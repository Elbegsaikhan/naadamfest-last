import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import { Container } from "react-bootstrap";

export default function Comp({ title, text, img }) {
    console.log("IMage", img, title, text);
    return (
        <>
            <Container style={{ marginTop: "50px" }}>
                <h1>{title}</h1>
            </Container>
            <div className="container1">
                <div>
                    <div className="image">
                        <Image
                            src={img}
                            layout={"fixed"}
                            width={500}
                            height={350}
                            alt={""}
                            objectFit={"cover"}
                        />
                    </div>
                </div>

                <div className="container__text">
                    <BlockContent blocks={text} />
                </div>
            </div>

            <style jsx>{`
                .container1 {
                    //background: red;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-top: 30px;

                    //max-width: 1200px;
                }

                .image {
                    display: flex;
                    justify-content: center;
                }

                h1 {
                    font-size: 1.5rem;
                    color: #000;
                    max-width: 400px;
                    text-align: center;
                    font-family: CenturySchool, sans-serif;
                }

                .container__text {
                    color: #1a4652;
                    font-family: CenturySchool, sans-serif;
                    font-size: 1.2rem;
                    margin: 20px 0;
                }
            `}</style>
        </>
    );
}

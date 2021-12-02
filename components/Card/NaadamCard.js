import styles from "./NaadamCard.module.scss";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Link from "next/link";

export default function NaadamCard({ related }) {
    console.log("REl", related);
    let data = [];
    for (let i in related) {
        if (true) {
            data.push(related[i]);
        }
    }
    const myLoader = ({ src }) => {
        return `${src}`;
    };
    console.log("Slug", data[0]["slug"]["current"]);
    return (
        <>
            <div className={styles.body_main}>
                {data.map((rel, index) => (
                    <div key={index} className={styles.kook}>
                        <Image
                            loader={myLoader}
                            src={rel.image}
                            alt="boh"
                            layout="responsive"
                            width={isMobile ? 290 : 500}
                            height={isMobile ? 150 : 300}
                            objectFit="cover"
                            className={styles.image}
                        />
                        <h1>{rel.title}</h1>
                        <p>
                            By: Jargal Expedition <br /> Karakorum is Mongolian
                            ancient capital city and was founded in 1220 in
                            Orkhon Valley. Today the symbolic ruins of the first
                            Buddhist monastery in Mongolia Erdene Zuu left which
                            was built on the ground of the Karakorum in 1586...
                        </p>
                        <Link
                            href={`/naadamfestivaltours/${rel["slug"]["current"]}`}
                        >
                            <a className={styles.link}>
                                <h1
                                    style={{
                                        textAlign: "left",
                                        cursor: "pointer",
                                    }}
                                >
                                    VIEW MORE
                                </h1>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

import Head from "next/head";
import Path from "../components/Path";
import styles from "../styles/About.module.css";
import { Container } from "react-bootstrap";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
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
                <link
                    rel="canonical"
                    href="http://naadamfest.com/privacypolicy"
                />
                <link rel="icon" href="/favicon_n.ico" />
            </Head>

            <div>
                <Path name="About Us" />
                <Container>
                    <div className={styles.main}>
                        <h1>PRIVACY POLICY</h1>
                        <h3>Jargal Expedition Privacy Commitments</h3>
                        <p>
                            We highly value your trust in us and will duly and
                            diligently safeguard and protect the privacy and
                            confidentiality of your personal information. This
                            privacy policy applies to all of our services,
                            whether accessed or made available online device.
                            Jargal Expedition respects the privacy of every
                            person who visits, registers with our website, and
                            is committed to ensuring a safe online experience.
                            We won&apos;t email you unless you’ve expressively
                            indicated you want us to. Nor will we sell, share or
                            rent your email address to/with third parties. We
                            will only email you in one of the following cases:{" "}
                        </p>
                        <p>
                            <ul>
                                <li>
                                    You used one of our contact forms because
                                    you have a question or want to provide
                                    feedback to us. In those cases we can email
                                    you in reply to your request.
                                </li>
                                <li>
                                    If we believe it is very vital to contact
                                    you and share certain information, we may
                                    decide to email you. Commercial messages or
                                    advertising are not considered vital, so we
                                    will never use this as an excuse to send
                                    spam.
                                </li>
                            </ul>
                        </p>
                        <h3>Collection of personal data </h3>
                        <p>
                            Our primary goal in collecting personal data from
                            you is to give you an enjoyable customised
                            experience whilst allowing us to provide services
                            and features that most likely meet your needs.
                            <br />
                            We collect certain personal data from you, which you
                            give to us when using our site and/or registering
                            for our products and services. Please note that we
                            do not intend to collect any personal data from
                            children under thirteen years of age and no child
                            under thirteen should submit any personal data to
                            our site.{" "}
                        </p>
                        <h3>Types of personal data held and its use</h3>
                        <p>
                            We only collect personally identifiable data (such
                            as names, addresses, email addresses, and telephone
                            numbers) when our visitors have voluntarily
                            submitted it. Visitors may volunteer personal
                            information in the following circumstances: request
                            brochures, make general enquiries, and book on-line.
                            We do not collect personal information unless it has
                            been submitted to us.{" "}
                        </p>
                        <p>
                            This information may be used for one or more of the
                            following purposes.
                            <br />
                            <ul>
                                <li>to fulfill our obligations to you;</li>
                                <li>
                                    to improve the efficiency, quality and
                                    design of our services;{" "}
                                </li>
                                <li>
                                    to enable our managers or tour coordinator
                                    to contact with you online in connection
                                    with any content you may post to our site;
                                </li>
                            </ul>
                        </p>
                        <p>
                            We are committed to keeping the data you provide us
                            secure and will take reasonable precautions to
                            protect your personal data from loss, misuse or
                            alteration. We have implemented information security
                            policies, rules and technical measures to protect
                            the personal data that we have under our control
                            from:
                            <br />
                            <ul>
                                <li>unauthorised access </li>
                                <li>improper use or disclosure</li>
                                <li>unauthorised modification </li>
                                <li>
                                    unlawful destruction or accidental loss{" "}
                                </li>
                            </ul>
                            All our employees who have access to, and are
                            associated with the processing of your personal
                            data, are obliged to keep the information
                            confidential and not use it for any other purpose.
                            We also give you the option of using a secure
                            transmission method to send us personal data
                            identifiers, such as credit card details and bank
                            account number.
                        </p>
                        <h3>Security measures</h3>
                        <p>
                            We take strict security measures to protect
                            personally identifiable information from loss,
                            misuse, unauthorized access, disclosure, alteration
                            or destruction. These measures include limiting the
                            number of people who have physical access to our
                            database servers as well as electronic security
                            systems, data encryption and password protections,
                            which guard against unauthorized access.
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
}

import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "../styles/SaveNow.module.scss";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyModal({ buttoName, custom, defTour }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);

    const form1 = useRef();
    const notify = () => {
        //     toast.success("Sending...");
    };

    const sendEmail = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        e.preventDefault();
        if (validated) {
            console.log("FOrm", form1.current);
            emailjs
                .sendForm(
                    "service_gxbg5jh",
                    "template_xt8haal",
                    form1.current,
                    "user_NCFtk0eFn8gJVz7VICkwq"
                )
                .then(
                    (result) => {
                        console.log("Email js send contact", result.text);
                    },
                    (error) => {
                        console.log("Error", error.text);
                    }
                );
            toast.success("Sending...");
            handleClose();
        }
    };
    return (
        <>
            <div className={styles.button}>
                {custom ? (
                    <>
                        <div className={"button"} onClick={handleShow}>
                            Request A Quote
                        </div>
                        <style jsx>{`
                            .button {
                                margin-top: 5px;
                                border-radius: 0;
                                width: 100%;
                                background-color: #d1d1e9;
                                color: #ff6600;
                                text-align: center;
                                text-transform: uppercase;
                                height: 40px;
                                align-items: center;
                                display: flex;
                                justify-content: center;
                                cursor: pointer;
                            }
                        `}</style>
                    </>
                ) : (
                    <Button
                        variant={"outline-warning"}
                        onClick={handleShow}
                        style={{ backgroundColor: "#ff6600", color: "#fff" }}
                    >
                        {buttoName}
                    </Button>
                )}
            </div>
            <ToastContainer />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p style={{ textAlign: "center" }}>Request Quote</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        noValidate
                        validated={validated}
                        style={{ zIndex: "2" }}
                        ref={form1}
                        onSubmit={sendEmail}
                    >
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                name={"firstname"}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                name={"lastname"}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email address"
                                name={"email"}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                                name={"select"}
                                aria-label="Default select example"
                            >
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">
                                    American Samoa
                                </option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua & Barbuda">
                                    Antigua & Barbuda
                                </option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Ascension Island">
                                    Ascension Island
                                </option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia & Herzegovina">
                                    Bosnia & Herzegovina
                                </option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">
                                    Bouvet Island
                                </option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">
                                    British Indian Ocean Territory
                                </option>
                                <option value="British Virgin Islands">
                                    British Virgin Islands
                                </option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">
                                    Burkina Faso
                                </option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Canary Islands">
                                    Canary Islands
                                </option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Caribbean Netherlands">
                                    Caribbean Netherlands
                                </option>
                                <option value="Cayman Islands">
                                    Cayman Islands
                                </option>
                                <option value="Central African Republic">
                                    Central African Republic
                                </option>
                                <option value="Ceuta & Melilla">
                                    Ceuta & Melilla
                                </option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">
                                    Christmas Island
                                </option>
                                <option value="Clipperton Island">
                                    Clipperton Island
                                </option>
                                <option value="Cocos (Keeling) Islands">
                                    Cocos (Keeling) Islands
                                </option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo - Brazzaville">
                                    Congo - Brazzaville
                                </option>
                                <option value="Congo - Kinshasa">
                                    Congo - Kinshasa
                                </option>
                                <option value="Cook Islands">
                                    Cook Islands
                                </option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaçao">Curaçao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czechia">Czechia</option>
                                <option value="Côte d’Ivoire">
                                    Côte d’Ivoire
                                </option>
                                <option value="Denmark">Denmark</option>
                                <option value="Diego Garcia">
                                    Diego Garcia
                                </option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">
                                    Dominican Republic
                                </option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">
                                    Equatorial Guinea
                                </option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Eswatini">Eswatini</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">
                                    Falkland Islands
                                </option>
                                <option value="Faroe Islands">
                                    Faroe Islands
                                </option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">
                                    French Guiana
                                </option>
                                <option value="French Polynesia">
                                    French Polynesia
                                </option>
                                <option value="French Southern Territories">
                                    French Southern Territories
                                </option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">
                                    Guinea-Bissau
                                </option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard & McDonald Islands">
                                    Heard & McDonald Islands
                                </option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong SAR China">
                                    Hong Kong SAR China
                                </option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kosovo">Kosovo</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">
                                    Liechtenstein
                                </option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao SAR China">
                                    Macao SAR China
                                </option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">
                                    Marshall Islands
                                </option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia" selected="selected">
                                    Mongolia
                                </option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar (Burma)">
                                    Myanmar (Burma)
                                </option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">
                                    Netherlands Antilles
                                </option>
                                <option value="New Caledonia">
                                    New Caledonia
                                </option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">
                                    Norfolk Island
                                </option>
                                <option value="Northern Mariana Islands">
                                    Northern Mariana Islands
                                </option>
                                <option value="North Korea">North Korea</option>
                                <option value="North Macedonia">
                                    North Macedonia
                                </option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Outlying Oceania">
                                    Outlying Oceania
                                </option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territories">
                                    Palestinian Territories
                                </option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">
                                    Papua New Guinea
                                </option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn Islands">
                                    Pitcairn Islands
                                </option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Réunion">Réunion</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Saudi Arabia">
                                    Saudi Arabia
                                </option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">
                                    Sierra Leone
                                </option>
                                <option value="Singapore">Singapore</option>
                                <option value="Sint Maarten">
                                    Sint Maarten
                                </option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">
                                    Solomon Islands
                                </option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">
                                    South Africa
                                </option>
                                <option value="South Georgia & South Sandwich Islands">
                                    South Georgia & South Sandwich Islands
                                </option>
                                <option value="South Korea">South Korea</option>
                                <option value="South Sudan">South Sudan</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="St. Barthélemy">
                                    St. Barthélemy
                                </option>
                                <option value="St. Helena">St. Helena</option>
                                <option value="St. Kitts & Nevis">
                                    St. Kitts & Nevis
                                </option>
                                <option value="St. Lucia">St. Lucia</option>
                                <option value="MF">St. Martin</option>
                                <option value="PM">
                                    St. Pierre & Miquelon
                                </option>
                                <option value=" St. Vincent & Grenadines">
                                    St. Vincent & Grenadines
                                </option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard & Jan Mayen">
                                    Svalbard & Jan Mayen
                                </option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="São Tomé & Príncipe">
                                    São Tomé & Príncipe
                                </option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-Leste">Timor-Leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad & Tobago">
                                    Trinidad & Tobago
                                </option>
                                <option value="Tristan da Cunha">
                                    Tristan da Cunha
                                </option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">
                                    Turkmenistan
                                </option>
                                <option value="Turks & Caicos Islands">
                                    Turks & Caicos Islands
                                </option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="U.S. Outlying Islands">
                                    U.S. Outlying Islands
                                </option>
                                <option value="U.S. Virgin Islands">
                                    U.S. Virgin Islands
                                </option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">
                                    United Arab Emirates
                                </option>
                                <option value="United Kingdom">
                                    United Kingdom
                                </option>
                                <option value="United States">
                                    United States
                                </option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican City">
                                    Vatican City
                                </option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Wallis & Futuna">
                                    Wallis & Futuna
                                </option>
                                <option value="Western Sahara">
                                    Western Sahara
                                </option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                                <option value="Åland Islands">
                                    Åland Islands
                                </option>
                            </Form.Select>
                            <div style={{ marginBottom: "5px" }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Tour Information</Form.Label>
                            <Form.Select
                                name="tour"
                                aria-label="Default select example"
                            >
                                {defTour ? <option>{defTour}</option> : null}

                                <option value="NAADAM FESTIVAL AND GREAT GOBI DESERT">
                                    NAADAM FESTIVAL AND GREAT GOBI DESERT
                                </option>
                                <option value="NAADAM FESTIVAL AND ANCIENT CAPITAL CITY">
                                    NAADAM FESTIVAL AND ANCIENT CAPITAL CITY
                                </option>
                                <option value="NAADAM FESTIVAL AND CENTRAL REGION OF MONGOLIA">
                                    NAADAM FESTIVAL AND CENTRAL REGION OF
                                    MONGOLIA
                                </option>
                                <option value="NAADAM FESTIVAL AND EPIC MONGOLIAN OVERLAND">
                                    NAADAM FESTIVAL AND EPIC MONGOLIAN OVERLAND
                                </option>
                                <option value="NAADAM FESTIVAL AND MONGOLIAN BLUE PEARL">
                                    NAADAM FESTIVAL AND MONGOLIAN BLUE PEARL
                                </option>
                                <option value="NAADAM FESTIVAL AND ULTIMATE WEST">
                                    NAADAM FESTIVAL AND ULTIMATE WEST
                                </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Total Number of passengers</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Total number of passengers"
                                name="count"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Additional comments</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                name={"comment"}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            variant={"light"}
                            style={{ backgroundColor: "#ff6600" }}
                            type="submit"
                            onClick={notify}
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

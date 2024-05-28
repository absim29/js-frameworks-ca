import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>
                <Link
                    to="https://instagram"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
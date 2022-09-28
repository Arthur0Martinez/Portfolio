import React from "react";
import { Link } from "gatsby";
import * as styles from '../styles/home.module.css' 

const linkStyle = {
    color: "#716040",
    transform: "rotate(90deg)",
    width: "15%",
    "font-size": '1.6rem',
    margin: "2rem 0rem 10rem 0rem"
}

export default function Navbar() {
    return(
        <nav>
            <div className={styles.navbar}>
                <Link to="/linkedin" style={linkStyle}>LinkedIn</Link>
                <Link to="/github" style={linkStyle}>Github</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
            </div>
        </nav>
    )
}
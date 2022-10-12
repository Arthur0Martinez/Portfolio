import React from "react";
import { Link } from "gatsby";
import * as styles from '../styles/home.module.css' 


export default function Navbar() {
        return(
            <nav>
                <div className={styles.navbar}>
                    <a className={styles.first} href="https://www.codewars.com/users/Arthur0Martinez" target="_blank">CodeWars</a>
                    <a className={styles.second} href="https://www.linkedin.com/in/amartineza/" target="_blank">LinkedIn</a>
                    <a className={styles.third} href="https://github.com/Arthur0Martinez" target="_blank">Github</a>
                </div>
            </nav>
        )
}
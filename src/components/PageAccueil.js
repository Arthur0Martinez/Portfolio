import React from "react";
import * as styles from '../styles/home.module.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function PageAccueil() {
    return(
        <section>
            <div className={styles.align}>
                <div className={styles.presentation}>
                    <h1>Arthur Martinez</h1>
                    <h2>Développeur Web</h2>
                    <h2>Création Video</h2>
                </div>
                <div className={styles.circle}>
                    <div>
                        <img src="CV.jpg"></img>
                    </div>
                </div>
            </div>
            <div className={styles.scroll}>
                <p>Scroll down</p>
                <div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </section>
    )
}
import React from "react";
import * as styles from '../styles/home.module.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function PageAccueil() {
    return(
        <section>
            <div className={styles.align}>
                <div className={styles.presentation}>
                    <h1>Arthur Martinez</h1>
                    <h2 className="devWeb">Développeur Web</h2>
                    <h2 className="creaVid">Création Video</h2>
                </div>
                <div className={styles.circle}>
                    <div>
                        <img src="CV.jpg"></img>
                    </div>
                </div>
            </div>
            <AnchorLink to="#booki" title="Scroll Down">
                <div className={styles.arriveScroll}>
                    <div className={styles.scroll}>
                        <p>Scroll down</p>
                        <div>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                </div>
            </AnchorLink>
        </section>
    )
}
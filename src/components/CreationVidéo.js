import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/cine.module.css"

export default function CreationVideo() {
    return(
        <section className={styles.creationVideo}>

            <article className={styles.video}>
                <div className={styles.videoName}>
                    <h3>Mes projets vidéo</h3>
                    <h4>Fiction, documentaire</h4>
                </div>
                <p>Vidéo/Photo</p>
            </article>

            <article className={styles.photo}>
                <p>Vidéo/Photo</p>
                <div className={styles.videoName}>
                    <h3>Mes projets photo</h3>
                    <h4>Portrait, paysage</h4>
                </div>
            </article>

            <article>
                <h3>Logiciels maitrisés</h3>
                <p>Techno</p>
                <p>Techno</p>
                <p>Techno</p>
                <p>Techno</p>
                <p>Techno</p>
            </article>

            <article>
                <h3>Matériels connus</h3>
                <p>Techno</p>
                <p>Techno</p>
                <p>Techno</p>
                <p>Techno</p>
                <p>Techno</p>
            </article>

        </section>
    )
}
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
                <div className={styles.videoPhotoOne}></div>
            </article>

            <article className={styles.photo}>
            <div className={styles.videoPhotoTwo}></div>
                <div className={styles.photoName}>
                    <h3>Mes projets photo</h3>
                    <h4>Portrait, paysage</h4>
                </div>
            </article>

            <article className={styles.logiciel}>
                <h3>Logiciels maitrisés</h3>
                <div className={styles.logicielList}>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                </div>
            </article>

            <article className={styles.materiels}>
                <h3>Matériels connus</h3>
                <div className={styles.materielsList}>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                    <img src='exemple.jpg'></img>
                </div>
            </article>

        </section>
    )
}
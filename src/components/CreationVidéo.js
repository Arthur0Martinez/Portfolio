import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/cine.module.css"

export default function CreationVideo() {
    return(
        <section className={styles.creationVideo}>

            <article data-sal="fade" className={styles.video}>
                <div className={styles.videoName}>
                    <h3>Mes projets vidéo</h3>
                    <h4>Fiction, documentaire</h4>
                </div>
                <div className={styles.videoPhotoOne}></div>
            </article>

            <article data-sal="fade" className={styles.photo}>
            <div className={styles.videoPhotoTwo}></div>
                <div className={styles.photoName}>
                    <h3>Mes projets photo</h3>
                    <h4>Portrait, paysage</h4>
                </div>
            </article>

            <article data-sal="fade" className={styles.logiciel}>
                <h3>Logiciels maitrisés</h3>
                <div className={styles.logicielList}>
                    <img src='LogicielCine/Audition.png'></img>
                    <img src='LogicielCine/Lightroom.png'></img>
                    <img src='LogicielCine/Illustrator.png'></img>
                    <img src='LogicielCine/PremierePro.png'></img>
                    <img src='LogicielCine/Photoshop.png'></img>
                </div>
            </article>

            <article data-sal="fade" className={styles.materiels}>
                <h3>Matériels connus</h3>
                <div className={styles.materielsList}>
                    <img src='MatérielCine/Canon.jpg'></img>
                    <img src='MatérielCine/Neewer.png'></img>
                    <img src='MatérielCine/Nikon.png'></img>
                    <img src='MatérielCine/Pentax.png'></img>
                    <img src='MatérielCine/Rode.jpg'></img>
                </div>
            </article>

        </section>
    )
}
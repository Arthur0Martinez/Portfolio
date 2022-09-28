import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/dev.module.css"

export default function DevWeb() {
    return(
        <section className={styles.dev}>

            <article className={styles.booki}>
                <div className={styles.firstProjectName}>
                    <h3>Booki</h3>
                    <h4>HTML, CSS</h4>
                </div>
                <p>Image</p>
                <p>Image</p>
                <p>Image</p>
                <div className={styles.firstBackground}></div>
            </article>

            <article className={styles.ohMyFood}>
                <div className={styles.secondBackground}></div>
                <p>Image</p>
                <p>Image</p>
                <p>Image</p>
                <div className={styles.secondProjectName}>
                    <h3>OhMyFood</h3>
                    <h4>HTML, SCSS</h4>
                </div>
            </article>

            <article className={styles.kanap}>
                <div className={styles.thirdProjectName}>
                    <h3>Kanap</h3>
                    <h4>HTML, SCSS, JS</h4>
                </div>
                <div className={styles.thirdBackground}></div>
                <p>Image</p>
                <p>Image</p>
                <p>Image</p>
            </article>

            <article className={styles.piiquante}>
            <div className={styles.forthBackground}></div>
                <p>Image</p>
                <p>Image</p>
                <div className={styles.forthProjectName}>
                    <h3>Piiquante</h3>
                    <h4>JS, BDN Non SQL</h4>
                </div>
            </article>

            <article className={styles.groupomania}>
                <div className={styles.fifthProjectName}>
                    <h3>Groupomania</h3>
                    <h4>HTML, SCSS, JS, BDN Non SQL</h4>
                </div>
                <div className={styles.fifthBackground}></div>
                <p>Image</p>
                <p>Image</p>
                <p>Image</p>
                <p>Image</p>
            </article>

            <article className={styles.technologie}>
                <h3>Technologies favorites</h3>
                <div className={styles.technoList}>
                    <p>Techno</p>
                    <p>Techno</p>
                    <p>Techno</p>
                    <p>Techno</p>
                    <p>Techno</p>
                    <p>Techno</p>
                </div>
            </article>

        </section>
    )
}
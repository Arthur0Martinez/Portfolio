import React from "react";
import * as styles from "../styles/dev.module.css";


export default function DevWeb() {   
    return(
        <section className={styles.dev}>

            <article data-sal="fade" id={styles.booki}>
                <div className={styles.firstProjectName}>
                    <h3>Booki</h3>
                    <h4>HTML, CSS</h4>
                </div>
                <div className={styles.bookiImg}>
                    <img className={styles.bookiImgFirst} src='exemple.jpg'></img>
                    <img className={styles.bookiImgSecond} src='exemple.jpg'></img>
                    <img className={styles.bookiImgThird} src='exemple.jpg'></img>
                    <div className={styles.firstBackground}></div>
                </div>
            </article>

            <article id={styles.ohMyFood}>
                <div data-sal="fade" className={styles.ohMyFoodImg}>
                    <div className={styles.secondBackground}></div>
                    <img className={styles.ohMyFoodImgFirst} src='exemple.jpg'></img>
                    <img className={styles.ohMyFoodImgSecond} src='exemple.jpg'></img>
                    <img className={styles.ohMyFoodImgThird} src='exemple.jpg'></img>
                </div>
                <div data-sal="slide-right" className={styles.secondProjectName}>
                    <h3>OhMyFood</h3>
                    <h4>HTML, SCSS</h4>
                </div>
            </article>

            <article data-sal="fade" id={styles.kanap}>
                <div className={styles.thirdProjectName}>
                    <h3>Kanap</h3>
                    <h4>HTML, SCSS, JS</h4>
                </div>
                <div className={styles.kanapImg}>
                    <div className={styles.thirdBackground}></div>
                    <img className={styles.kanapImgFirst} src='exemple.jpg'></img>
                    <img className={styles.kanapImgSecond} src='exemple.jpg'></img>
                    <img className={styles.kanapImgThird} src='exemple.jpg'></img>
                </div>
            </article>

            <article data-sal="fade" id={styles.piiquante}>
                <div className={styles.piiquanteImg}>
                    <div className={styles.forthBackground}></div>
                    <img className={styles.piiquanteImgFirst} src='exemple.jpg'></img>
                    <img className={styles.piiquanteImgSecond} src='exemple.jpg'></img>
                </div>
                <div className={styles.forthProjectName}>
                    <h3>Piiquante</h3>
                    <h4>JS, BDN Non SQL</h4>
                </div>
            </article>

            <article data-sal="fade" id={styles.groupomania}>
                <div className={styles.fifthProjectName}>
                    <h3>Groupomania</h3>
                    <h4>HTML, SCSS, JS, BDN Non SQL</h4>
                </div>
                <div className={styles.groupomaniaImg}>
                    <div className={styles.fifthBackground}></div>
                    <img className={styles.groupomaniaImgFirst} src='exemple.jpg'></img>
                    <img className={styles.groupomaniaImgSecond} src='exemple.jpg'></img>
                    <img className={styles.groupomaniaImgForth} src='exemple.jpg'></img>
                </div>
            </article>

            <article data-sal="fade" id={styles.technologie}>
                <h3>Languages favoris</h3>
                <div className={styles.technoList}>
                    <img src='LogicielWeb/HTML.png'></img>
                    <img src='LogicielWeb/CSS.png'></img>
                    <img src='LogicielWeb/JS.png'></img>
                    <img src='LogicielWeb/MONGODB.png'></img>
                    <img src='LogicielWeb/SASS.png'></img>
                    <img src='LogicielWeb/react.png'></img>
                </div>
            </article>

        </section>
    )
}
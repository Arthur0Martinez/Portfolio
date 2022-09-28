import React from "react"
import CreationVideo from "../components/CreationVidéo"
import DevWeb from "../components/DevWeb"
import Layout from "../components/Layout"
import PageAccueil from "../components/PageAccueil"

export default function Home() {
  return(
    <Layout>
    <main>
      <PageAccueil />
      <DevWeb />
      <CreationVideo />
    </main>
    </Layout>
  )
}

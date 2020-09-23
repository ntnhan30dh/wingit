import React from "react"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import FollowUs from "../components/followus"
import Contact from "../components/contact"
import "../styles/index.scss"

export default function Home() {
  return (
    <div className="pageWrapper">
    <Header/>
    <Story/>
    <Menu/>
    <FollowUs/>
    <Contact/>
    </div>
  )
}

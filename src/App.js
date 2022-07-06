import React from "react"
import Header from "./component/Head/Header"
import Skills from "./component/SkillList/SkillList"
import Home from "./component/Home/Home"
import Projects from "./component/Projects/Projects"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import "./App.css"

const App = () => {
  return (
      <>
          <Header />
          <Home />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
          <Footer />
      </>
  )
}

export default App
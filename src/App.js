import React from "react"
import Header from "./component/Head/Header"
import Skills from "./component/SkillList/SkillList"
import Home from "./component/Home/Home"
import Projects from "./component/Projects/Projects"
// import Resume from "./component/Resume/Resume"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
// import Contact from "./component/Contact/Contact"
// import Footer from "./component/Footer"
import "./App.css"

const App = () => {
  return (
      <>
          <Header />
          <Home />
          <Skills />
          <Projects />
      </>
  )
}

export default App
import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
<nav>
  {/* <a id="home" href="#home">Home</a>  */}
  <Link to='/BhagavadGitaWeb/' id='home' >Home</Link>
  <Link id="ch" to="#chapters">Chapters</Link>
  <Link id="about" to="#about">About Us</Link>
</nav>

  )
}

export default Nav
import React from 'react'
import {Link} from 'react-router-dom'
function Header(){
    return(
     
      <header className="main-header">
      <div className="container"><Link to="/"><img src="/img/tadah-logo.svg" alt="Tadah Logo" /></Link>
      </div>
      </header>
    )
}

export default Header
import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Header(){
    return(
        <Router>
            <div className="main-header">
            <div className="container">
                <Link to="/"><img src="/img/tadah-logo.svg" alt="Tadah Logo" /></Link> 
            </div>
        </div>
        </Router>
        
    )
}

export default Header
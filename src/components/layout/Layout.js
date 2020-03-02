import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'

function Layout({children}){

    return(
        <div className="website-wrapper">
            <div className="website-container">
                <Header />

                <div>{children}</div>
            </div>
            <div>
            <Link to="/add_task"><div class="create-task">
                <img src="/img/plus icon.svg" alt="Create Task Icon" />
                </div>
            </Link>
    </div>
            
        </div>
        
    )
}

export default Layout
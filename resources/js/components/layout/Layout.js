import React from 'react'
import Header from './Header'

function Layout({children}){

    return(
        <div className="website-wrapper">
            <div className="website-container">
                <Header />

                <div>{children}</div>
            </div>
            
        </div>
        
    )
}

export default Layout
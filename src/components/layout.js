import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutstyle from './layout.module.scss'

const Layout =(props)=>{
    return(
        <div className={layoutstyle.container}>
            <div className={layoutstyle.content}>
            <Header/>
            {props.children}
            </div>
            <Footer/>
        </div>
    )
}
export default Layout
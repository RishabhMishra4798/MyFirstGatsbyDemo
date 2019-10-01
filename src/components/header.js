import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import headerstyle from './header.module.scss'

const Header = () =>{
    const data=useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return(
        <header className={headerstyle.header}>
            <h1>
                <Link className={headerstyle.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
           
             <nav>
                <ul className={headerstyle.navList}>
                    <li><Link className={headerstyle.navItem} activeClassName={headerstyle.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerstyle.navItem} activeClassName={headerstyle.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerstyle.navItem} activeClassName={headerstyle.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerstyle.navItem} activeClassName={headerstyle.activeNavItem} to="/contact">Contact</Link></li>
                </ul>
             </nav>
        </header>
    )
}
export default Header
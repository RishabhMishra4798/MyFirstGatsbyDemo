import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
const AboutPage =()=>{
    return(
        <div>
            <Layout>
            <h1>About me</h1>
            <p>Hello, I'm Full Stack Developer.</p>
            <Link to="/contact">Contact me.</Link>
            </Layout>
        </div>
    )
}
export default AboutPage
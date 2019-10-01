import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
const Homepage = () => {
    return(
        <div>
            <Layout>
                <h1>Home</h1>
                <p>Hello, I'm Madan, a full stack developer.</p>
                <Link to="/contact">Contact me.</Link>
            </Layout>
        </div>
    )
}

export default Homepage

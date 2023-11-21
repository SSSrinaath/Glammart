import React from 'react'
import './Footer.css'

const Footer = () => {
const year = new Date();
return (
    <nav style={{bottom:'0'}}>
    <footer> <b>&copy;</b> Vogue Villa <b>{year.getFullYear()}</b> </footer>
    </nav>
)
}

export default Footer
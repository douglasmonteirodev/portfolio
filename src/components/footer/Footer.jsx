import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <ul className='permalinks'>
                <li>
                    <a href='# '>Home</a>
                </li>
                <li>
                    <a href='#about'>About me</a>
                </li>
                <li>
                    <a href='#experience'>Skills</a>
                </li>
                <li>
                    <a href='#portifolio'>Portolifolio</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <div className='footer--socials'>
                <a
                    href='https://www.facebook.com/douglas.monteiro.5220/'
                    rel='noreferrer'
                    target='_blank'
                >
                    <FaFacebookF />
                </a>
                <a
                    href='https://www.instagram.com/douglasm.js/'
                    rel='noreferrer'
                    target='_blank'
                >
                    <FiInstagram />
                </a>
                <a
                    href='https://www.linkedin.com/in/douglasmonteiro1/'
                    rel='noreferrer'
                    target='_blank'
                >
                    <BsLinkedin />
                </a>
            </div>
            <div className='footer--copyright'>
                <small>&copy; Douglas Monteiro</small>
            </div>
        </footer>
    );
};

export default Footer;

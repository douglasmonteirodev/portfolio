import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className='header--socials'>
            <a
                href='https://www.linkedin.com/in/douglasmonteiro1/'
                rel='noreferrer'
                target='_blank'
            >
                <BsLinkedin />
            </a>
            <a
                href='https://github.com/douglasmonteirodev'
                rel='noreferrer'
                target='_blank'
            >
                <FaGithub />
            </a>
            <a
                href='https://www.instagram.com/douglasm.js/'
                rel='noreferrer'
                target='_blank'
            >
                <BsInstagram />
            </a>
        </div>
    );
};

export default HeaderSocials;

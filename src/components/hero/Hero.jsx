import React from "react";
import "./hero.css";
import CTA from "./CTA";
import { BsMouse2 } from "react-icons/bs";
import Me from "../../assets/perfil-com-fundo.png";
import HeroSocials from "./HeroSocials";

const Hero = () => {
    return (
        <div className='hero--container'>
            <div className='hero--left'>
                <div className='hero--left-wrapper'>
                    <h2 className='hero--intro'>Hi, My name is</h2>
                    <h1 className='hero--name'>Douglas Monteiro</h1>
                    <div className='hero--title'>
                        <div className='hero--title-wrapper'>
                            <div className='hero--wrapper-item'>
                                Front End Developer
                            </div>
                            <div className='hero--wrapper-item'>
                                Front End Developer
                            </div>
                            <div className='hero--wrapper-item'>
                                Front End Developer
                            </div>
                            <div className='hero--wrapper-item'>
                                Front End Developer
                            </div>
                        </div>
                    </div>
                    <div className='hero--socials'>
                        <HeroSocials />
                    </div>
                    <div className='hero--buttons'>
                        <CTA />
                    </div>
                    <div className='hero--scroll'>
                        <a href='#contact' className='scroll--down'>
                            Scrool Down <BsMouse2 />
                        </a>
                    </div>
                </div>
            </div>
            <div className='hero--right'>
                <div className='hero--me'>
                    <div className='hero--me--image'>
                        <img src={Me} alt='me' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;

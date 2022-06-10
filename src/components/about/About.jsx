import React from "react";
import "./about.css";

const About = () => {
    return (
        <section id='about'>
            <h2>About me</h2>

            <div className='container about--container'>
                <div className='about--content'>
                    <p>
                        My name is Douglas Monteiro, I'm 24 years old and I'm from
                        Altamira-PA (Brazil), since I was a child I have always been
                        a lover of technologies, internet and games, but due to my
                        location and lack of information, I could not dedicate myself
                        to the area earlier, but with the current events of the last
                        few years, I was able to commit and seek knowledge. I
                        immediately identified with the front end development, and
                        that's where I have the greatest focus of learning, I
                        currently work with React, but I didn't limit myself just
                        that, i also have some knowledge in node and mongo db. In
                        terms of professionals I don't have yet experience, I'm
                        looking for my first opportunity, but I continue with the
                        learning process developing personal projects with the aim of
                        showing a little of my potential and gain experience.
                    </p>
                    <div className='about--btn-message'>
                        <a href='#contact' className='btn btn-primary'>
                            Send a message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

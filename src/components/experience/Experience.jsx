import React from "react";
import "./experience.css";
import { RiShieldCheckFill } from "react-icons/ri";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>skills</h5>
            <h2>My experiences</h2>
            <div className='container experience--container'>
                <div className='experience--frontend'>
                    <h3>Frontend</h3>
                    <div className='experience--content'>
                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>

                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>

                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>Javascript</h4>
                            </div>
                        </article>

                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>

                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>

                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>Tailwind</h4>
                            </div>
                        </article>
                    </div>
                </div>

                {/* /------------------------------------------------------- */}
                <div className='experience--backend'>
                    <h3>Backend</h3>
                    <div className='experience--content'>
                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className='experience--details'>
                            <RiShieldCheckFill className='experience--details-icons' />
                            <div>
                                <h4>Node</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

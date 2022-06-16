import React from "react";
import "./portfolio.css";
import data from "./Data";

const Portfolio = () => {
    return (
        <section id='portifolio'>
            <h5>Recent projects</h5>
            <h2>Portfólio</h2>

            <div className='container portfolio--container'>
                {data.map(({ id, image, title, github }) => {
                    return (
                        <article key={id} className='portfolio--item'>
                            <div className='portfolio--item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio--item-cta'>
                                <a
                                    href={github}
                                    className='btn'
                                    rel='noreferrer'
                                    target='_blank'
                                >
                                    Github
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;

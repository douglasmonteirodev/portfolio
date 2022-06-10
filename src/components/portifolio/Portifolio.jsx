import React from "react";
import "./portifolio.css";
import data from "./Data";

const Portifolio = () => {
    return (
        <section id='portifolio'>
            <h5>Recent projects</h5>
            <h2>Portifolio</h2>

            <div className='container portifolio--container'>
                {data.map(({ id, image, title, github }) => {
                    return (
                        <article key={id} className='portifolio--item'>
                            <div className='portifolio--item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portifolio--item-cta'>
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

export default Portifolio;

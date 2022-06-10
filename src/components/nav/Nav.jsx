import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

import "./nav.css";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a
                href='# '
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href='#about'
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href='#experience'
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBookBookmark />
            </a>
            <a
                href='#portifolio'
                onClick={() => setActiveNav("#portifolio")}
                className={activeNav === "#portifolio" ? "active" : ""}
            >
                <AiOutlineFileProtect />
            </a>
            <a
                href='#contact'
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;

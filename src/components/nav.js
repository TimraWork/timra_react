import React from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const LINKS = [
    {
        name: "Гисты",
        path: "/gists/",
    },
    {
        name: "Работы",
        path: "/works/",
    },
    {
        name: "Блог",
        path: "/blog/",
    },
    {
        name: "Обо мне",
        path: "/about/",
    },
];

const Nav = () => {
    return (
        <nav className="nav">
            {LINKS.map((item, index) => (
                <Button key={index} component={NavLink} to={item.path} exact>
                    {item.name}
                </Button>
            ))}
        </nav>
    );
};

export default Nav;

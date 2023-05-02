import React from 'react'
import {useState} from "react";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import "./navbar.css"
import logo from "../../assets/logo.svg";
const Menu = () => (
    <>
    <p><a href={"#home"}></a>Home</p>
    <p><a href={"#sudprim"}></a>What is GPT</p>
    <p><a href={"#possibility"}></a>Open AI</p>
    <p><a href={"#features"}></a>Case Studies</p>
    <p><a href={"#blog"}></a>Library</p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className={"sudprim__navbar"}>
            <div className={"sudpirm__navbar-links"}>
                <div className={"sudprim__navbar-links_logo"}>
                    <img src={logo} alt={"logo"}/>
                </div>
                <div className={"sudprim__navbar-links_container"}>
                    <p><a href={"#home"}></a>Home</p>
                    <p><a href={"#sudprim"}></a>What is GPT</p>
                    <p><a href={"#possibility"}></a>Open AI</p>
                    <p><a href={"#features"}></a>Case Studies</p>
                    <p><a href={"#blog"}></a>Library</p>
                </div>
            </div>
            <div className={"sudprim__navbar-sign"}>
                <p>S'abonner</p>
                <button type={"button"}>S'abonner</button>
            </div>
            <div className={"sudprim__navbar-menu"}>
                {toggleMenu
                    ? <RiCloseLine color={"fff"} size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color={"fff"} size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className={"sudprim__navbar-menu_container scale-up-center"}>
                        <div className={"sudprim__navbar-menu_container-links"}>
                            <Menu />
                            <div className={"sudprim__navbar-menu_container-links-sign"}>
                                <p>S'abonner</p>
                                <button type={"button"}>S'abonner</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar

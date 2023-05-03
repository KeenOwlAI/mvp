import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
    return (
        <div id="home" className={"sudprim__header section__padding"}>
            <div className={"sudprim__header-content"}>
                <h1 className={"gradient__text"}>
                    Sudprim : In Bass we Trust
                </h1>
                <p>Lorem ipsum dolor sit amet</p>
                <div className={"sudprim__header-content__input"}>
                    <input type="email" placeholder={"Adresse mail"}/>
                    <button className={"sudprim__header-content__input-button"} type={"button"}>S'abonner</button>
                    <div className={"sudprim__header-image"}>
                        <img src={ai} alt="ai" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header

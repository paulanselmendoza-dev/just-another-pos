// import { useState } from "react";
import "./Header.scss";
import {
    AccountIcon,
    CartIcon,
    HamburgerIcon,
    SearchIcon,
} from "../../../assets/icons/icons";

function Header() {
    return (
        <header>
            <div className="header__content">
                <div className="header__icons header__icons-left">
                    <HamburgerIcon />
                    <SearchIcon />
                </div>
                <a href="" className="header__logo">
                    JANP
                </a>
                <div className="header__icons">
                    <SearchIcon />
                    <AccountIcon />
                    <CartIcon />
                </div>
            </div>
        </header>
    );
}

export default Header;

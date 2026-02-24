// import { useState } from "react";
import "./Header.scss";
import {
    AccountIcon,
    CartIcon,
    HamburgerIcon,
    SearchIcon,
} from "../../../assets/icons/icons";

import Sidemenu from "../../../ui/common/Sidemenu/Sidemenu";
import { useState } from "react";

function Header() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    return (
        <header>
            <Sidemenu
                list={[]}
                isOpen={isSideMenuOpen}
                setIsSideMenuOpen={setIsSideMenuOpen}
            />
            <div
                className="header__content"
                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            >
                <div className="header__icons header__icons-left">
                    <HamburgerIcon />
                    <SearchIcon />
                </div>
                <a href="" className="header__logo">
                    JANP
                </a>
                <div className="header__icons">
                    {/* <SearchIcon /> */}
                    <AccountIcon />
                    <CartIcon />
                </div>
            </div>
        </header>
    );
}

export default Header;

import "./Sidemenu.scss";
import lv1 from "../../../assets/images/Sample/lv_1.jpg";
import { XmarkIcon } from "../../../assets/icons/icons";

function Sidemenu({ list, isOpen, setIsSideMenuOpen }) {
    return (
        <div className={`sidemenu ${isOpen ? "menu--open" : ""}`}>
            <button
                onClick={() => {
                    setIsSideMenuOpen(!isOpen);
                }}
            >
                Hello
                <XmarkIcon />
            </button>
            <ul className="sidemenus">
                <li className="sidemenu__item">
                    <img src={lv1} alt="" />
                    <a href="#">Product 1</a>
                </li>
                <li className="sidemenu__item">
                    <img src={lv1} alt="" />
                    <a href="#">Product 2</a>
                </li>
                <li className="sidemenu__item">
                    <img src={lv1} alt="" />
                    <a href="#">Product 3</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidemenu;

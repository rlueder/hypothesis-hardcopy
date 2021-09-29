
import logo from "../../assets/img/logo.svg";

import "./styles.scss";

/**
 * @name Header
 * @param {Object} props
 * @returns {JSX.Element}
 */

const Header = (props) => {
    const { children } = props;
    return (
        <header className="Header">
            <section>
                {/*<div className="Header__logo">?.</div>*/}
                <img alt="Hypothesis" src={logo} />
                {children}
            </section>
        </header>
    )
}

export default Header;
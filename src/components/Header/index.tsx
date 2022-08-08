import logo from "../../assets/img/logo.svg";

import "./styles.scss";

type Props = {
  children: JSX.Element;
};

/**
 * @name Header
 * @param {Object} props
 * @returns {JSX.Element}
 */

const Header = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <header className="Header">
      <section>
        <img alt="Hypothesis" src={logo} />
        {children}
      </section>
    </header>
  );
};

export default Header;

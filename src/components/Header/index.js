/**
 * @name Header
 * @returns {JSX.Element}
 */

const Header = (props) => {
    const { children } = props;
    return (
        <header>
            <div>Logo</div>
            <div>
                {children}
            </div>
        </header>
    )
}

export default Header;
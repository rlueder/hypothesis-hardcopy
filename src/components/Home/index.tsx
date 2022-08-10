import { Header, Search } from "../index";

import "./styles.scss";

/**
 * @name Home
 * @returns {JSX.Element}
 */

const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <Header>
        <Search />
      </Header>
      <section className="Home__section">
        <p>
          Search for a book by ISBN or <br /> scan a barcode to get started.
        </p>
      </section>
      <footer className="Home__footer" />
    </div>
  );
};

export default Home;

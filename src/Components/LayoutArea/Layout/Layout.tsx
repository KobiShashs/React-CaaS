import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
          <BrowserRouter>
        <header>
          <Header />
        </header>
        <aside>
          <Menu />
        </aside>
        <main>
        <Routing/>
        </main>
        <footer>
          <Footer />
        </footer>
        </BrowserRouter>
      </div>
    );
}

export default Layout;

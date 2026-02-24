import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}Main Content</main>
            <Footer />
        </>
    );
}

export default MainLayout;

/* 
TODO: sidenav of categories
- must not occupy entire horizontal space
- will pop out from left to right
- will show list of categries, format: [Image] <Category Title>
- list item will only have onfocus effects, no onhover 
*/

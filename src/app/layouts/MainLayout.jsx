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

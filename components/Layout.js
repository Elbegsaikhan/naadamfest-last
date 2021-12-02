import Header from "./include/Header.js";
import Footer from "./include/Footer.js";
import SocialIcons from "./include/SocialIcons";

export default function Layout({ children }) {
    return (
        <>
            <div className="main">
                <Header />
            </div>
            <main>
                <SocialIcons />
                {children}
            </main>
            <Footer />
            <style jsx>{`
                .main {
                    background-color: #ff6600;
                    margin-bottom: 111px;
                }

                @media (max-width: 1040px) {
                    .main {
                        margin-bottom: 78px;
                    }
                }
            `}</style>
        </>
    );
}

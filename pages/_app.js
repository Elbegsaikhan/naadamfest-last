import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import NextNprogress from "nextjs-progressbar";
import Facebook1 from "../components/fb/Facebook";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <NextNprogress
                color="#052098"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={false}
            />
            {/*<Facebook1 />*/}
        </Layout>
    );
}

export default MyApp;

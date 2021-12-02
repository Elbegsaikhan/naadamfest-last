import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {/*<Script*/}
                    {/*    dangerouslySetInnerHTML={{*/}
                    {/*        __html: `<div id="fb-root"></div>*/}
                    {/*    <script>*/}
                    {/*      window.fbAsyncInit = function () {*/}
                    {/*        FB.init({*/}
                    {/*          xfbml: true,*/}
                    {/*          version: "v9.0",*/}
                    {/*        });*/}
                    {/*      };*/}
                    {/*    */}
                    {/*      (function (d, s, id) {*/}
                    {/*        var js,*/}
                    {/*          fjs = d.getElementsByTagName(s)[0];*/}
                    {/*        if (d.getElementById(id)) return;*/}
                    {/*        js = d.createElement(s);*/}
                    {/*		console.log("help")*/}
                    {/*        js.id = id;*/}
                    {/*        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";*/}
                    {/*        fjs.parentNode.insertBefore(js, fjs);*/}
                    {/*      })(document, "script", "facebook-jssdk");*/}
                    {/*    </script>*/}
                    {/*  <div class="fb-customerchat" attribution="setup_tool" page_id="100678152380933"></div>*/}

                    {/* `,*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

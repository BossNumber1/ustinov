import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    // debugger;

    // if (pageProps.statusCode === 404 || pageProps.statusCode === 500) {
    //     window.location.replace("https://www.vk.com/");
    // }

    // React.useEffect(() => {
    //     console.log(window.location.href);
    //     debugger;
    // }, []);

    // console.log(window.location.pathname);
    // debugger;
    return <Component {...pageProps} />;
}

export default MyApp;

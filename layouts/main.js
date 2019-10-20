import Head from "next/head";
import Footer from "../components/Footer";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title == null
            ? "Norfolk Developers Conference 2020"
            : `${title} | Norfolk Developers Conference 2020`}
        </title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta key="encoding" charSet="utf-8" />
        <meta
          key="contentType"
          httpEquiv="content-type"
          content="text/html; charset=UTF-8"
        />
        <meta
          name="description"
          content="The eastern region's biggest tech conference returns in February with a fantastic line-up of speakers and workshops."
        />
        <meta name="theme-color" content="#44337a" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

import Head from "next/head";
import Footer from "../components/Footer";

const description =
  "The eastern region's biggest tech conference returns June 16-17th with a fantastic line-up of speakers and workshops.";
const imageUrl = "/static/images/nordev.jpg";
const defaultTitle = "Norfolk Developers Conference 2022";

function Layout({ children, title }) {
  function getTitle() {
    return title == null ? defaultTitle : `${title} | ${defaultTitle}`;
  }

  return (
    <>
      <Head>
        <title>{getTitle()}</title>
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
        <meta name="description" content={description} />
        <meta name="theme-color" content="#44337a" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://nordevcon.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen">
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;

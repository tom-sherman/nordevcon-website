import Head from "next/head";

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
      </Head>

      <main>{children}</main>
      <footer className="p-6">Links, etc. Norfolk Developers</footer>
    </>
  );
}

export default Layout;

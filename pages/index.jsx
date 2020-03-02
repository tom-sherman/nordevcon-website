import Layout from "../layouts/main";
import Hero from "../components/Hero";

// const s3 =
//   "https://norfolkdevelopers.s3.eu-west-2.amazonaws.com/nordevcon-website/images";

function IndexRoute() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default IndexRoute;

import Layout from "../components/Layout";

export default function Technologies() {
  return <div className="h-screen bg-technology bg-no-repeat bg-cover"></div>;
}

Technologies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

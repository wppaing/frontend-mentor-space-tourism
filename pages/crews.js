import Layout from "../components/Layout";

export default function Crews() {
  return <div className="h-screen bg-crew bg-no-repeat bg-cover"></div>;
}

Crews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

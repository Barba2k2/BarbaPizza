import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Barba Pizzaria</title>
      </Head>
      <div>
        <Header></Header>
        <h1>PAINEL</h1>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

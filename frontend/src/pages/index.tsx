import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

import logoImg from "../../public/logo.svg";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarbaPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Barba Pizzaria" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu e-mail" type="text"/>

            <Input placeholder="Digite sua senha" type="password"/>
          </form>
        </div>
      </div>
    </>
  );
}

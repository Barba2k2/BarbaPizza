import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.scss";

import logoImg from "../../../public/logo.svg";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Barba Pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua Conta</h1>

          <form>
            <Input placeholder="Digite seu Nome" type="text" />

            <Input placeholder="Digite seu e-mail" type="text" />

            <Input placeholder="Digite sua senha" type="password" />

            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <text className={styles.text}>Já possui uma conta? Faça login</text>
          </Link>
        </div>
      </div>
    </>
  );
}

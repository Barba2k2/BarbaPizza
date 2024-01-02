import { FormEvent, useContext } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

import logoImg from "../../public/logo.svg";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "any@email.com",
      password: "123123",
    };

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>BarbaPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Barba Pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite seu e-mail" type="text" />

            <Input placeholder="Digite sua senha" type="password" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <text className={styles.text}>
              Não possui uma conta? Cadastre-se
            </text>
          </Link>
        </div>
      </div>
    </>
  );
}

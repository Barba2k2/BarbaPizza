import { FormEvent, useContext, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

import logoImg from "../../public/logo.svg";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "react-toastify";

import { AuthContext } from "../contexts/AuthContext";

import Link from "next/link";

import { canSSRGuset } from "../utils/canSSRGuest";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email == "" || password == "") {
      toast.warning("Preencha os campos corretamente");
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
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
            <Input
              placeholder="Digite seu e-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
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

export const getServerSideProps = canSSRGuset(async (ctx) => {
  return {
    props: {},
  };
});

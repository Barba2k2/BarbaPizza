import { FormEvent, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.scss";

import logoImg from "../../../public/logo.svg";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import { AuthContext } from "../../contexts/AuthContext";

import Link from "next/link";
import { toast } from "react-toastify";

export default function Home() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSingUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };

    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Barba Pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua Conta</h1>

          <form onSubmit={handleSingUp}>
            {/* Name */}
            <Input
              placeholder="Digite seu Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* Email */}
            <Input
              placeholder="Digite seu e-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Password */}
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
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

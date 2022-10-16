import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { SignInSocialMedia } from "../components/SignInSocialMedia"
import { Logo } from "../Logo";
import { Eye } from "../Eye";
import { CloseEye } from "../CloseEye";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    axios.post('/sessions', {
      email: 'junior@email.com.br',
      password: '12345678',
    })

    setIsUserSignedIn(true);
  }

  function handlePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça o login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
        { isUserSignedIn && <Text>Login realizado!</Text> }

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type={passwordVisibility ? "text" : "password"} id="password" placeholder="***"/>
            <div onClick={handlePasswordVisibility}>
              { passwordVisibility === true ? <Eye /> : <CloseEye /> }
            </div>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200" >
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
        <Text size="sm" className="flex justify-center items-center before:content-[''] before:block before:h-[2px] before:min-w-[80px] before:mr-4 before:bg-cyan-300 before:rounded after:content-[''] after:block after:h-[2px] after:min-w-[80px] after:ml-4 after:bg-cyan-300 after:rounded">ou entre com</Text>
        <SignInSocialMedia href="#">GitHub</SignInSocialMedia>
      </footer>
    </div>
  );
}

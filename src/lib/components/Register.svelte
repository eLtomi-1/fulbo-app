<script>
  import Modal from "./Modal.svelte";
  import Input from "./Input.svelte";
  import { goto } from "$app/navigation";
  import { saveDataLocalStorage } from "../classes/functions";
  import { CLIENT_ID, CLIENT_SECRET } from "../constants/ClientCredentials";
  import { MAIN_URL } from "../constants/Urls";

  export let showSecondModal = false;

  let ApodoUsuario;
  let EmailUsuario;
  let ContrasenaUsuario;

  async function registerUser() {
    const urlRegister = MAIN_URL + "api/v1/user";

    const UserObjectRegister = {
      apodo: ApodoUsuario,
      email: EmailUsuario,
      password: ContrasenaUsuario,
    };

    try {
      const responseRegister = await fetch(urlRegister, {
        method: "POST",
        body: JSON.stringify(UserObjectRegister),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responseRegister.ok) {
        throw new Error("HTTP error " + responseRegister.status);
      }
      const jsonResponse = await requestAccessToken();
      console.log(jsonResponse);

      if (saveDataLocalStorage(jsonResponse)) {
        goto("/home");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function requestAccessToken() {
    const urlLogIn = MAIN_URL + "oauth/token";

    const UserObjectLogIn = {
      username: EmailUsuario,
      password: ContrasenaUsuario,
      grant_type: "password",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };

    try {
      const responseLogIn = await fetch(urlLogIn, {
        method: "POST",
        body: JSON.stringify(UserObjectLogIn),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responseLogIn.ok) {
        throw new Error("HTTP error " + responseLogIn.status);
      }

      return await responseLogIn.json();
    } catch (error) {
      console.error("Internal Server Error");
    }
  }
</script>

<Modal bind:showSecondModal>
  <form class="px-8 pb-8 flex flex-col max-mbs:px-6">
    <div class="flex flex-col gap-2">
      <h2 class="font-inter font-extrabold text-4xl w-full text-center">
        <span class="text-green-600">Registrate</span>, Ya.
      </h2>
      <p
        class="font-inter font-normal pb-2 text-lg w-full text-center text-[#7d7c83]"
      >
        Ingresa rapido creandote una cuenta.
      </p>
    </div>
    <div class="flex flex-col gap-3 mt-5">
      <Input
        type="text"
        placeholder="Apodo"
        minlength="3"
        maxlength="20"
        bind:value={ApodoUsuario}
      ></Input>
      <Input type="email" placeholder="Email" bind:value={EmailUsuario}></Input>
      <Input
        type="password"
        placeholder="Contraseña"
        minlength="8"
        bind:value={ContrasenaUsuario}
      ></Input>
    </div>
    <section class="w-full flex flex-col gap-1 mt-4">
      <button
        class="px-4 py-3 rounded-xl font-semibold font-inter text-white bg-green-600 text-lg mt-4"
        on:click={registerUser}>Crea tu cuenta gratis</button
      >
      <div class="flex items-center justify-center">
        <div class="w-full h-[2px] bg-[#f1f1f1]"></div>
        <p class="font-inter font-medium text-[#666666] px-4 opacity-50">&</p>
        <div class="w-full h-[2px] bg-[#f1f1f1]"></div>
      </div>
      <button
        class="px-4 py-3 rounded-xl font-semibold border-2 border-green-600 font-inter text-green-600 bg-white text-lg"
        >Crea tu cuenta con Google</button
      >
    </section>
  </form>
</Modal>

<style>
  h2,
  p {
    letter-spacing: -0.045em;
  }
</style>

<script>
  import Modal from "./Modal.svelte";
  import Input from "./Input.svelte";
  import { goto } from "$app/navigation";
  import { saveDataLocalStorage } from "../classes/functions";
  import { CLIENT_ID, CLIENT_SECRET } from "../constants/ClientCredentials";
  import { MAIN_URL } from "../constants/Urls";

  export let showModal = false;
  let showError = false;

  let EmailUsuario;
  let ContrasenaUsuario;

  async function logInUser() {
    try {
      const jsonResponse = await requestAccessToken();

      if (saveDataLocalStorage(jsonResponse)) {
        goto("/home");
      }
    } catch (error) {
      console.error(error);
    }
  }

  export async function requestAccessToken() {
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
        showError = true;
        throw new Error("HTTP error " + responseLogIn.status);
      }

      return await responseLogIn.json();
    } catch (error) {
      console.error("Internal Server Error");
    }
  }
</script>

<Modal bind:showModal>
  <form class="px-8 pb-8 flex flex-col max-mbs:px-6">
    <div class="flex flex-col gap-2">
      <h2 class="font-inter font-extrabold text-4xl w-full text-center">
        <span class="text-green-600">Fulbito</span>, Ya.
      </h2>
      <p
        class="font-inter font-normal pb-2 text-lg w-full text-center text-[#7d7c83]"
      >
        ¿Con ganas de jugar un partido?
      </p>
    </div>
    <div class="flex flex-col gap-3 mt-5">
      <Input type="email" placeholder="Email" bind:value={EmailUsuario}></Input>
      <Input
        type="password"
        placeholder="Contraseña"
        bind:value={ContrasenaUsuario}
      ></Input>
      {#if showError}
        <div
          class="rounded-lg border-red-400 border-2 h-10 font-inter text-md font-semibold flex items-center justify-center text-red-400 mt-2"
        >
          Fijate si pusiste algo mal ;)
        </div>
      {/if}
    </div>
    <section class="w-full flex flex-col gap-1 mt-4">
      <button
        class="px-4 py-3 rounded-xl font-semibold font-inter text-white bg-green-600 text-lg mt-4"
        on:click={logInUser}>Iniciar Sesion</button
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

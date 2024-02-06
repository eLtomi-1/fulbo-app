<script>
  import shoeGreen from "$lib/images/shoe-icon-green.svg";
  import pelotaIconoGreen from "$lib/images/football-icon-green.svg";
  import pelota from "$lib/images/football-icon.svg";
  import SearchBar from "../../lib/components/SearchBar.svelte";
  import MatchBox from "../../lib/components/MatchBox.svelte";
  import CreateMatch from "../../lib/components/CreateMatch.svelte";
  import Profile from "../../lib/components/Profile.svelte";
  import { MAIN_URL } from "$lib/constants/Urls";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  const UserToken = browser ? localStorage.getItem("UserToken") : null;
  const IdUsuario = browser ? sessionStorage.getItem("UserId") : null;

  let partidosJson = [];

  onMount(async () => {
    checkSession();
  });

  async function checkSession() {
    if (UserToken === null) {
      goto("/");
    }

    const url = MAIN_URL + "api/v1/oauth/user/data";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + UserToken,
        },
      });

      if (!response.ok) {
        goto("/");
      } else if (
        sessionStorage.getItem("UserId") === null ||
        sessionStorage.getItem("UserApodo") === null
      ) {
        const jsonResponse = await response.json();
        sessionStorage.setItem("UserId", jsonResponse.id);
        sessionStorage.setItem("UserApodo", jsonResponse.apodo);
      }

      partidosJson = await getAllUserMatches();
    } catch (error) {
      console.error("Internal Server Error");
    }
  }

  export async function getAllUserMatches() {
    const urlGetMatches = MAIN_URL + "api/v1/match";

    try {
      const responseAllMatches = await fetch(urlGetMatches, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + UserToken,
          id_usuario: IdUsuario,
        },
      });

      if (!responseAllMatches.ok) {
        throw new Error("HTTP error " + responseAllMatches.status);
      }

      return await responseAllMatches.json();
    } catch (error) {
      console.error("Internal Server Error");
    }
  }

  let showModal;
  let showSecondModal;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="About this app" />
</svelte:head>

<article
  class="w-full bg-ligthviolet flex flex-col items-center justify-start pt-10 max-lg:pt-8 max-sm:pt-6"
>
  <section
    class="max-w-[90rem] bg-ligthviolet w-full flex gap-4 max-2xl:px-10 max-lg:px-5 max-sm:flex-col"
  >
    <SearchBar />
    <button
      class="rounded-2xl bg-white w-72 gap-3 py-3 px-2 font-inter font-semibold text-green-600 text-xl flex items-center justify-center max-lg:w-96 max-md:w-[27.7rem] max-sm:hidden"
      on:click={() => (showModal = true)}
    >
      <img
        src={pelotaIconoGreen}
        alt=""
        class="ImageRotate w-7 h-7 object-cover"
      />
      Crear Partido
    </button>
    <button
      class="rounded-2xl bg-white w-52 gap-3 py-3 px-2 font-inter font-semibold text-green-600 text-xl flex items-center justify-center max-lg:w-64 max-md:w-72 max-sm:hidden"
      on:click={() => (showSecondModal = true)}
    >
      <img src={shoeGreen} alt="" class=" w-9 h-9 object-cover" />
      Cuenta
    </button>
  </section>
  <section
    class="grid grid-cols-3 gap-6 w-full max-w-[90rem] mt-12 max-2xl:px-10 max-lg:px-6 max-lg:mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4 max-sm:px-5 max-sm:mt-6 pb-20"
  >
    {#each partidosJson.reverse() as { nombre, precio, cantidad, lugar, nota, fecha, asistentes }}
      <MatchBox
        {nombre}
        {precio}
        {cantidad}
        {lugar}
        {nota}
        {fecha}
        {asistentes}
      />
    {/each}
  </section>
</article>

<div class="fixed bottom-0 w-full h-16 bg-green-600 hidden max-sm:block">
  <button
    class="w-full h-full gap-3 py-3 px-2 font-inter font-bold text-white text-2xl flex flex-row-reverse items-center justify-center"
    on:click={() => (showModal = true)}
  >
    <img src={pelota} alt="" class="ImageRotate w-7 h-7 object-cover" />
    Crear
  </button>
</div>

<div
  class="fixed top-0 w-full h-[6.5rem] justify-center items-center px-5 bg-ligthviolet hidden max-sm:flex"
>
  <SearchBar />
</div>

<CreateMatch bind:showModal on:refresh={checkSession} />
<Profile bind:showSecondModal />

<style>
  .ImageRotate {
    animation: rotation 4s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>

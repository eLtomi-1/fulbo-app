<script>
  import pelota from "$lib/images/pelota.webp";
  import Login from "../lib/components/Login.svelte";
  import Register from "../lib/components/Register.svelte";
  import Waves from "../lib/components/Waves.svelte";
  import { MAIN_URL } from "$lib/constants/Urls";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const UserToken = browser ? localStorage.getItem("UserToken") : null;

  let showModal;
  let showSecondModal;

  onMount(async () => {
    const url = MAIN_URL + "api/v1/oauth/user/data";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + UserToken,
        },
      });

      if (response.ok) {
        goto("/home");
      }
    } catch (error) {
      console.error("Internal Server Error");
    }
  });
</script>

<title>Fulbo, Futbol 5.</title>
<svelte:head>
  <meta
    name="description"
    content="Organiza, crea y juga al fútbol cinco con tus amigos"
  />
  <meta
    name="keywords"
    itemprop="keywords"
    content="partidos de fútbol, partidos de fútbol, organizador de partidos, organizar partidos, crear partidos, jugar con amigos, juegos de fútbol, juegos de fútbol, eventos de fútbol, eventos de fútbol, programación de partidos, planificación de partidos, creador de partidos de fútbol, creador de partidos de fútbol, coordinación de partidos, gestión de partidos, partidos deportivos, partidos recreativos, partidos amistosos, partidos competitivos, torneos de fútbol, torneos de fútbol, herramienta de programación de partidos, herramienta de planificación de partidos, organizador de eventos deportivos, planificación de eventos deportivos, programador de partidos de fútbol, programador de partidos de fútbol, organización de partidos, juegos de equipos de fútbol, juegos de equipos de fútbol, organizador de ligas de fútbol, organizador de ligas de fútbol"
  />
  <meta
    property="og:title"
    content="Fulbo, Juga y Organiza Partidos de Fútbol"
  />
</svelte:head>

<Waves />

<article>
  <section
    class="w-1/2 h-screen flex flex-col gap-16 items-start justify-center max-lg:w-full"
  >
    <section
      class="flex flex-col gap-7 items-start justify-center max-2xl:pl-20 max-lg:px-20 max-md:px-10 max-mb:px-5"
    >
      <h1
        class="text-black text-6xl font-inter font-bold max-sm:text-center max-mbs:text-5xl"
      >
        <span class="text-green-600">Fulbo</span>, F5 En Minutos
      </h1>
      <a
        class="text-black font-inter font-medium text-2xl leading-relaxed max-sm:text-center max-mbs:text-xl"
        href="/home"
      >
        Dejate de perder tiempo y haciendo la listita por Whatsapp, registrate,
        manda el link al grupo con todos los datos y que se anoten los que no
        estan gobernados (aun).
      </a>
    </section>
    <section
      class="flex gap-3 w-full h-16 max-2xl:pl-20 max-md:px-10 max-sm:justify-center max-mb:flex-col max-mb:px-5"
    >
      <button
        on:click={() => (showModal = true)}
        class="px-7 py-3 bg-black flex gap-2 items-center justify-center rounded-2xl z-20 font-semibold font-inter text-white text-xl max-mbs:text-lg"
        >Comenzar
        <img
          src={pelota}
          alt=""
          class="ImageRotate w-9 hidden h-6/6 object-cover max-mbx:block"
        />
      </button>
      <button
        on:click={() => (showSecondModal = true)}
        class="px-7 py-2 border-black border-4 z-20 rounded-2xl font-semibold font-inter text-black text-xl max-mbs:text-lg"
        >Registrarse</button
      >
      <img
        src={pelota}
        alt=""
        class="ImageRotate w-[4.5rem] hidden h-full object-contain max-lg:block max-mbx:hidden"
      />
    </section>
  </section>
  <section
    class="w-1/2 flex items-center px-[10.7rem] justify-center h-screen max-2xl:px-[10rem] max-xl:px-[7rem] max-lg:hidden"
  >
    <img src={pelota} alt="" class="ImageRotate w-6/6 h-6/6 object-cover" />
  </section>

  <Login bind:showModal />
  <Register bind:showSecondModal />
</article>

<style>
  h1 {
    word-wrap: break-word; /* This property allows long words to be broken and wrap onto the next line */
    overflow-wrap: break-word;
  }

  article {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    max-width: 90rem;
    box-sizing: border-box;
  }
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

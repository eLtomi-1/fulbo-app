<script>
  import calendar from "$lib/images/calendar-icon-space.svg";
  import users from "$lib/images/users-icon.svg";
  import location from "$lib/images/location-icon-space.svg";
  import notes from "$lib/images/notes-icon.svg";
  import link from "$lib/images/link-icon.svg";
  import pelota from "$lib/images/pelota.webp";
  import user from "$lib/images/user-icon.svg";
  import twousers from "$lib/images/twousers-icon.svg";
  import dolar from "$lib/images/dollar-icon.svg";
  import { page } from "$app/stores";
  import { MAIN_URL } from "$lib/constants/Urls";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  const UserToken = browser ? localStorage.getItem("UserToken") : null;
  const IdUsuario = browser ? sessionStorage.getItem("UserId") : null;

  const partidoId = $page.params.partidoId;
  let partidoJson;

  onMount(async () => {
    partidoJson = await getMatch();
  });

  export async function getMatch() {
    const urlGetMatch = MAIN_URL + "api/v1/match/" + partidoId;

    try {
      const responseMatch = await fetch(urlGetMatch, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + UserToken,
          id_usuario: IdUsuario,
        },
      });

      if (!responseMatch.ok) {
        throw new Error("HTTP error " + responseMatch.status);
      }

      return await responseMatch.json();
    } catch (error) {
      console.error("Internal Server Error");
    }
  }
</script>

<svelte:head>
  <title>Not Home</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div
  class="absolute inset-0 z-0 h-full w-full bg-ligthviolet bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
></div>

<article class="w-full flex flex-col items-center h-screen max-md:h-auto">
  <section
    class="w-full max-w-[90rem] flex h-full py-10 max-2xl:px-5 max-xl:px-0 max-xl:py-0"
  >
    <div
      class="w-full rounded-2xl h-full flex flex-row-reverse gap-5 px-10 py-10 bg-green-600 max-2xl:px-8 max-xl:rounded-none max-md:flex-col max-md:py-3 max-md:gap-3 max-mbx:gap-2 max-sm:px-3 max-mbx:px-3 max-md:pt-[4.8rem]"
    >
      <nav
        class="backdrop-blur supports-backdrop-blur:bg-green-600/95 transition-colors hidden gap-2 w-full justify-between items-center bg-green-600 bg-opacity-95 py-0 px-3 fixed z-10 top-0 left-0 mt-0 max-md:flex max-md:px-8 max-md:py-3 max-sm:px-4"
      >
        <div class="flex items-center justify-center gap-1">
          <img
            src={pelota}
            alt=""
            class="w-[2.10rem] h-[2.10rem] object-contain"
          />
          <h3
            class=" mt-0.5 cursor-pointer font-inter font-bold text-[2.05rem] text-white"
          >
            Fulbo
          </h3>
        </div>
        <button>
          <img
            src={link}
            alt=""
            class="w-11 px-2 py-2 h-11 bg-white rounded-full object-contain max-mbx:w-[2.65rem] h-[2.65rem]"
          />
        </button>
      </nav>
      <div
        class="px-5 py-5 bg-ligthviolet rounded-2xl w-full flex flex-col gap-2 overflow-auto max-sm:px-3 max-sm:py-3"
      >
        <section
          class="w-full bg-white rounded-xl px-5 py-5 mb-3 flex flex-col max-mbx:gap-1"
        >
          <h1
            class="text-[#111827] w-full text-pretty font-inter font-bold tracking-tight text-[1.90rem] text-left rounded-xl max-md:text-center max-mbx:text-[1.65rem]"
          >
            Partido Rora Portada
          </h1>
          <h2
            class="text-[#1a1a1a] text-pretty font-inter font-normal text-xl max-md:text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            voluptatibus placeat itaque sunt tenetur neque pariatur
            exercitationem reprehenderit. Ea nulla sed tenetur quibusdam totam
            at qui veniam dolorum ipsam nisiaaaaa.
          </h2>
        </section>
        <section class="grid grid-flow-col gap-3 max-xl:grid-flow-row">
          <div
            class="flex flex-col w-full bg-white rounded-xl gap-0.5 px-3 py-2"
          >
            <label
              for="html"
              class="font-inter text-[#454545] w-full font-semibold text-xl gap-7 justify-between flex items-center"
              >Precio
              <img src={dolar} alt="" class="w-7 h-7 mt-0.5 object-contain" />
            </label>
            <p class="font-inter font-semibold text-green-600 text-[1.30rem]">
              2000
            </p>
          </div>
          <div
            class="flex flex-col w-full bg-white rounded-xl gap-0.5 px-3 py-2"
          >
            <label
              for="html"
              class="font-inter text-[#454545] w-full font-semibold text-xl gap-7 justify-between flex items-center"
              >Individual
              <img src={user} alt="" class="w-6 h-6 object-contain" />
            </label>
            <p class="font-inter font-semibold text-green-600 text-[1.30rem]">
              169 c/u
            </p>
          </div>
          <div
            class="flex flex-col w-full bg-white rounded-xl gap-0.5 px-3 py-2"
          >
            <label
              for="html"
              class="font-inter text-[#454545] w-full font-semibold text-xl gap-7 justify-between flex items-center"
              >Con Suplentes
              <img src={user} alt="" class="w-6 h-6 object-contain" />
            </label>
            <p class="font-inter font-semibold text-green-600 text-[1.30rem]">
              150 c/u
            </p>
          </div>
        </section>
        <section
          class="grid grid-flow-col gap-3 mt-2 max-xl:grid-flow-row max-xl:mt-1"
        >
          <div
            class="flex flex-col w-full bg-white rounded-xl gap-0.5 px-3 py-2"
          >
            <label
              for="html"
              class="font-inter text-[#454545] w-full font-semibold text-xl gap-5 justify-between flex items-center"
              >Asistentes
              <img src={twousers} alt="" class="w-6 h-7 object-contain" />
            </label>
            <p class="font-inter font-semibold text-green-600 text-[1.30rem]">
              9
            </p>
          </div>
          <div
            class="flex flex-col w-full bg-white rounded-xl gap-0.5 px-3 py-2"
          >
            <label
              for="html"
              class="font-inter text-[#454545] w-full font-semibold text-xl gap-7 flex justify-between items-center"
              >Fecha
              <img src={calendar} alt="" class="w-5 h-6 object-contain" />
            </label>
            <p class="font-inter font-semibold text-green-600 text-[1.30rem]">
              12:00 26/7
            </p>
          </div>
          <div
            class="flex flex-col w-full bg-white rounded-xl gap-0.5 px-3 py-3"
          >
            <label
              for="html"
              class="font-inter text-[#454545] w-full font-semibold gap-5 text-xl justify-between flex items-center"
              >Ubicacion
              <img
                src={location}
                alt=""
                class=" w-7 h-6 object-contain mb-0.5"
              />
            </label>
            <p
              class="font-inter font-semibold text-green-600 text-xl leading-tight"
            >
              Santa Paula Nueva Ubi
            </p>
          </div>
        </section>
      </div>
      <div class="w-full">
        <h3
          class="flex mb-4 items-center gap-3 font-inter font-bold text-white text-4xl"
        >
          Lista
          <img src={notes} alt="" class="w-9 h-9 mt-1 object-contain" />
        </h3>
        <section
          class="w-full grid grid-row-1 gap-y-3 overflow-auto pr-8 h-full max-h-[45rem]"
        >
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
          <div class="w-full bg-white h-16 rounded-xl mb-2"></div>
        </section>
      </div>
    </div>
  </section>
</article>

<style>
  /* Track */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #16a34a;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #ffffff;
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

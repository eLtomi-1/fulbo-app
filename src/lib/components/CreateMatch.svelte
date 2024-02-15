<script>
  import Input from "./Input.svelte";
  import Modal from "./Modal.svelte";
  import { MAIN_URL } from "../constants/Urls";
  import { formatDate } from "../classes/functions";
  import { browser } from "$app/environment";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let showModal = false;

  let showError;
  let NombrePartido = null;
  let PrecioPartido = null;
  let TotalJugadoresPartido = 10;
  let FechaPartido = null;
  let LugarPartido = null;
  let NotaPartido = null;

  const UserToken = browser ? localStorage.getItem("UserToken") : null;
  const IdUsuario = browser ? sessionStorage.getItem("UserId") : null;

  const GreenButton =
    "py-3 w-full rounded-xl bg-green-600 font-inter text-lg font-bold text-white";
  const GrayButton =
    "py-3 w-full rounded-xl bg-[#f1f1f1] font-inter text-lg font-bold text-[#666666]";

  async function createMatch() {
    const urlCreateMatch = MAIN_URL + "api/v1/match";

    if (
      !NombrePartido ||
      !PrecioPartido ||
      !FechaPartido ||
      !LugarPartido ||
      !NotaPartido
    ) {
      showError = true;
      return null;
    }

    const CreateMatchObject = {
      nombre: NombrePartido,
      precio: PrecioPartido,
      cantidad: TotalJugadoresPartido,
      fecha: formatDate(FechaPartido),
      lugar: LugarPartido,
      nota: NotaPartido,
    };

    try {
      const responseCreateMatch = await fetch(urlCreateMatch, {
        method: "POST",
        body: JSON.stringify(CreateMatchObject),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + UserToken,
          id_usuario: IdUsuario,
        },
      });

      if (!responseCreateMatch.ok) {
        showError = true;
        throw new Error("HTTP error " + responseCreateMatch.status);
      }

      dispatch("refresh");
      showModal = false;

      return await responseCreateMatch.json();
    } catch (error) {
      console.error("Internal Server Error");
    }
  }
</script>

<Modal bind:showModal>
  <form class="px-8 pb-8 flex flex-col max-mbs:px-6">
    <div class="flex flex-col gap-2">
      <h2 class="font-inter font-extrabold text-4xl w-full text-center">
        Un <span class="text-green-600">Partidito</span>
      </h2>
      <p
        class="font-inter font-normal pb-2 text-lg w-full text-center text-[#7d7c83]"
      >
        Espero que no pierdas...
      </p>
    </div>
    <div class="flex flex-col gap-3 mt-5">
      <Input
        type="text"
        placeholder="Nombre del partido"
        minlength="3"
        maxlength="20"
        bind:value={NombrePartido}
      ></Input>
      <Input
        type="number"
        placeholder="Precio total"
        min="1"
        max="100000"
        bind:value={PrecioPartido}
      ></Input>
      <Input
        type="text"
        placeholder="Lugar del Partido"
        minlength="3"
        maxlength="25"
        bind:value={LugarPartido}
      ></Input>
      <Input type="datetime-local" placeholder="Fecha" bind:value={FechaPartido}
      ></Input>
      <Input
        type="text"
        placeholder="Nota corta (Vale putear)"
        bind:value={NotaPartido}
      ></Input>
      {#if showError}
        <div
          class="rounded-lg border-red-400 border-2 h-10 font-inter text-md font-semibold flex items-center justify-center text-red-400 mt-2"
        >
          Fijate si pusiste algo mal ;)
        </div>
      {/if}
    </div>
    <section class="mt-5 flex gap-3 items-center">
      <button
        class={TotalJugadoresPartido == 10 ? GreenButton : GrayButton}
        on:click={() => (TotalJugadoresPartido = 10)}
      >
        F5
      </button>
      <button
        class={TotalJugadoresPartido == 14 ? GreenButton : GrayButton}
        on:click={() => (TotalJugadoresPartido = 14)}
      >
        F7
      </button>
      <button
        class={TotalJugadoresPartido == 22 ? GreenButton : GrayButton}
        on:click={() => (TotalJugadoresPartido = 22)}
      >
        F11
      </button>
    </section>
    <section class="w-full flex flex-col gap-1 mt-4">
      <button
        class="px-4 py-3 rounded-xl font-semibold font-inter text-white bg-green-600 text-lg mt-4"
        on:click={createMatch}
      >
        Crear Partido
      </button>
    </section>
  </form>
</Modal>

<style>
  /* your styles go here */
</style>

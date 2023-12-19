<script>
  import checksearch from "$lib/images/check-search.svg";
  import Input from "./Input.svelte";

  let inputs = [
    {
      type: "text",
      placeholder: "Locacion",
    },
    {
      type: "text",
      placeholder: "Locacion",
    },
    {
      type: "text",
      placeholder: "Locacion",
    },
    {
      type: "text",
      placeholder: "Locacion",
    },
  ];
</script>

<section
  class=" w-2/4 flex flex-col gap-14 items-center justify-center max-lg:w-full max-sm:gap-10"
>
  <h1
    class="text-[4.5rem] font-bold text-center text-orange max-xl:text-[4rem] max-sm:text-[3.4rem] max-mb:text-[3.1rem] max-mbs:text-[2.7rem]"
  >
    Busca y <br />Elegi tu Casa
  </h1>
  <div
    class="px-14 grid grid-rows-2 grid-flow-col gap-x-4 gap-y-6 max-lg:px-28 max-md:px-20 max-sm:grid-cols-1 max-sm:grid-flow-row max-sm:px-6 max-sm:w-full"
  >
    {#each inputs as input}
      <Input type={input.type} placeholder={input.placeholder} />
    {/each}
  </div>
  <button
    class="flex flex-row items-center justify-center gap-3 px-4 py-[0.85rem] text-2xl font-semibold text-white bg-orange rounded-full"
  >
    Buscar
    <img src={checksearch} alt="" class="w-10 h-10" />
  </button>
</section>

<style>
  h1 {
    font-family: Poppins;
    line-height: 5.5rem;
  }
  input {
    font-family: Poppins;
  }

  @media (width <= 640px) {
    h1 {
      line-height: 4rem;
    }
  }

  @media (width <= 470px) {
    h1 {
      line-height: 4.5rem;
    }
  }

  @media (width <= 470px) {
    h1 {
      line-height: 3.5rem;
    }
  }

  @media (width <= 470px) {
    h1 {
      line-height: 3.3rem;
    }
  }
</style>

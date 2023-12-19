<script>
  import arrow from "$lib/images/arrow-catalog.svg";
  import cardgroup from "$lib/images/card-group.svg";
  import curvature from "$lib/images/curvature.svg";
  import curvatureUpsideDown from "$lib/images/curvature-upside-down.svg";

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<img src={curvature} alt="" class="w-full" />
<article
  class="w-full min-h-[30vh] py-0 bg-orange flex justify-center items-center"
>
  <section
    class="w-full max-w-[90rem] flex flex-row relative justify-around items-center max-2xl:px-10 max-2xl:gap-4 max-xl:gap-5 max-lg:flex-col-reverse max-sm:my-5"
  >
    {#if screenWidth < 1024}
      <a
        href="/catalog"
        class="border-white border-4 flex items-center gap-3 px-6 py-4 font-semibold text-white text-3xl rounded-[2.2rem] bg-orange"
        >Ver
        <img src={arrow} alt="" class="w-[1.8rem]" />
      </a>
      <img src={cardgroup} alt="" class="w-[23rem] mt-1 max-sm:w-[23rem]" />
      <div class="flex flex-col gap-3 items-center">
        <h2
          class="text-white font-bold text-[3.5rem] text-center max-md:text-[3.4rem] max-sm:text-[2.5rem]"
        >
          Nuestro Catalogo
        </h2>
        <div class="flex items-center gap-0">
          <p
            class="w-full px-[10%] text-white text-center font-medium text-[1.5rem] max-sm:px-0 max-sm:text-[1.4rem]"
          >
            Observa toda nuestra variedad de propiedades a la venta con la
            posibilidad de filtrar estas mismas.
          </p>
        </div>
      </div>
    {:else if screenWidth >= 1024}
      <img src={cardgroup} alt="" class="w-[41%]" />
      <div class="flex flex-col gap-3">
        <h2 class="text-white font-bold text-[4.5rem] max-xl:text-[3.5rem]">
          Nuestro Catalogo
        </h2>
        <div class="flex items-start gap-7 max-xl:gap-0">
          <p
            class="w-[29rem] text-white font-medium text-[1.8rem] max-xl:text-[1.5rem]"
          >
            Observa toda nuestra variedad de propiedades a la venta con la
            posibilidad de filtrar estas mismas.
          </p>
          <a
            href="/catalog"
            class="border-white border-4 flex mt-2 items-center gap-3 px-6 py-4 font-semibold text-white text-4xl rounded-[2.2rem] bg-orange max-xl:px-6 max-xl:py-4 max-xl:rounded-[2.2rem] max-xl:text-3xl"
            >Ver
            <img src={arrow} alt="" class="w-[2rem] max-xl:w-[1.8rem]" />
          </a>
        </div>
      </div>
    {/if}
  </section>
</article>
<img src={curvatureUpsideDown} alt="" class="w-full" />

<style>
  h2 {
    font-family: Poppins;
    letter-spacing: 0.0125rem;
  }
  p {
    line-height: 2.7rem; /* 150% */
    font-family: Poppins;
    letter-spacing: -0.01rem;
  }
  button {
    letter-spacing: -0.03125rem;
    font-family: Poppins;
  }
  @media (width <= 1280px) {
    p {
      line-height: 2.5rem; /* 150% */
    }
  }

  @media (width <= 640px) {
    p {
      line-height: 2.2rem; /* 150% */
    }
  }
</style>

<script>
  import whatsappLogo from "$lib/images/wpp-logo.svg";
  import houseicon from "$lib/images/house-icon.svg";
  import headerbg from "$lib/images/header-bg.svg";

  let screenWidth;
  let nombre = "AVALLE ";
  let subnombre = "PROPIEDADES";
  let numero = "095 268 793";
</script>

<svelte:window bind:innerWidth={screenWidth} />

<header class=" max-w-[90rem] relative w-full z-10 h-[4.8rem]">
  <nav
    class="relative pt-6 px-10 bg-orange h-full flex flex-row justify-between items-center max-xl:px-12 max-sm:px-7 max-xl:pt-2"
  >
    {#if screenWidth >= 500}
      <h2 class=" text-white text-3xl font-bold tracking-tighter">
        {nombre}<span class="text-[1.6rem]">{subnombre}</span>
      </h2>
    {:else if screenWidth <= 500}
      <h2 class=" text-white text-[1.9rem] font-bold tracking-tighter">
        {nombre}
      </h2>
    {/if}

    {#if screenWidth >= 885}
      <section class="flex flex-row gap-8">
        <a
          href="/catalogo"
          class="text-white text-3xl font-semibold tracking-tighter"
        >
          Catalogo
        </a>

        <div class="flex-row flex gap-2 items-center">
          <img src={whatsappLogo} alt="" class="w-[2rem]" />
          <a
            href="/whatsapp"
            class="text-white text-3xl font-semibold tracking-tighter"
          >
            {numero}
          </a>
        </div>
      </section>
    {:else if screenWidth <= 885 && screenWidth >= 700}
      <section class="flex flex-row gap-8">
        <a
          href="/catalogo"
          class="text-white text-3xl font-semibold tracking-tighter"
        >
          Catalogo
        </a>
        <img src={whatsappLogo} alt="" class="w-[2.4rem]" />
      </section>
    {:else if screenWidth <= 700}
      <section class="flex flex-row gap-6">
        <img
          src={houseicon}
          alt=""
          class="w-[2.3rem] cursor-pointer"
          href="/catalogo"
        />
        <img src={whatsappLogo} alt="" class="w-[2.3rem]" />
      </section>
    {/if}
  </nav>
</header>
<img src={headerbg} alt="" class="w-full" />

<style>
  h2,
  a {
    font-family: Poppins;
    line-height: 4.5625rem; /* 663.636% */
  }

  h2 {
    letter-spacing: 0.0275rem;
  }

  a {
    letter-spacing: -0.00625rem;
  }
  header {
    background-color: #f2f4f7;
  }
</style>

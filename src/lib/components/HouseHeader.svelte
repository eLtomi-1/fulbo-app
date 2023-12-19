<script>
  import arrow from "$lib/images/arrow-catalog-orange.svg";

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="flex w-full justify-between items-center pr-4 max-xl:pr-0">
  <h2 class="text-orange font-bold text-[3.5rem] max-sm:text-[2.6rem]">
    Casas
  </h2>
  {#if screenWidth < 640}
    <a href="/catalog" class="">
      <img src={arrow} alt="" class="w-[2.1rem]" />
    </a>
  {:else if screenWidth >= 640}
    <div class="flex gap-1 items-center cursor-pointer">
      <a
        href="/catalog"
        class=" w-[10.5rem] font-semibold text-orange text-[2.1rem]"
      >
        Ver mas
      </a>
      <img src={arrow} alt="" class="w-[17%]" />
    </div>
  {/if}
</section>

<style>
  h2 {
    font-family: Poppins;
    letter-spacing: -0.0125rem;
  }

  a {
    font-family: Poppins;
    letter-spacing: -0.0125rem;
  }
</style>

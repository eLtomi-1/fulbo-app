<script>
  import Header from "$lib/components/Header.svelte";
  import Searcher from "$lib/components/Searcher.svelte";
  import Catalog from "../lib/components/Catalog.svelte";
  import Changer from "../lib/components/Changer.svelte";
  import HouseCard from "../lib/components/HouseCard.svelte";
  import HouseHeader from "../lib/components/HouseHeader.svelte";
</script>

<svelte:head>
  <title>Avalle Propiedades</title>
  <meta name="description" content="Real Estate Web App" />
</svelte:head>

<Header />
<article
  class="w-full max-w-[90rem] flex flex-row bg-gray h-[81.5vh] relative z-0 max-lg:flex-col max-lg:items-center max-lg:justify-center max-sm:"
>
  <Searcher />
  <Changer />
</article>
<Catalog />
<article
  class="lessMarginTop flex flex-col items-start gap-4 w-full max-w-[90rem] px-10 my-24 max-xl:px-12 max-lg:px-5 max-md:px-12 max-sm:px-7 max-mb:px-4"
>
  <HouseHeader />
  <section
    class="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-xl:gap-8 max-lg:gap-5 max-md:grid-cols-1"
  >
    <HouseCard />
    <HouseCard />
    <HouseCard />
    <HouseCard />
    <HouseCard />
    <HouseCard />
    <HouseCard />
    <HouseCard />
    <HouseCard />
  </section>
</article>

<style>
  @media (height <= 775px) {
    article {
      height: 105vh;
    }
    .lessMarginTop {
      margin-top: 2rem;
    }
  }

  @media (height >= 1300px) {
    article {
      height: 60vh;
    }
  }
</style>

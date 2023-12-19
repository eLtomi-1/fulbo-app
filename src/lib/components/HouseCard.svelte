<script>
  import houseImage from "$lib/images/houseimage.png";
  import plant from "$lib/images/card-plant.svg";
  import brick from "$lib/images/card-bricks.svg";
  import film from "$lib/images/card-film.svg";

  let price = "USD 340.000";
  let bathrooms = 2;
  let bedrooms = 2;
  let totalLand = 275;
  let totalContructed = 155;
  let totalImages = 19;
</script>

<div class="w-[26.5rem] bg-white rounded-2xl cursor-pointer max-2xl:w-full">
  <img src={houseImage} alt="" class="rounded-t-2xl h-[21rem] w-full" />
  <div class="px-4 py-4 flex flex-col items-start gap-[0.25rem]">
    <h4 class="font-semibold text-[2rem] text-orange">{price}</h4>
    <p class="font-semibold text-[1.2rem] text-semiblack">
      {bathrooms} Dormitorios · {bedrooms} Baños
    </p>
    <p class="font-light text-[1.2rem] text-semiblack line-clamp-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p class="font-semibold text-[1.2rem] text-orange line-clamp-3">
      El Pinar Sur, Peres y Fuentes
    </p>
    <section
      class="flex items-center gap-6 justify-center w-full pr-2 pt-3 pb-1"
    >
      <div class="flex items-center gap-1">
        <img src={plant} alt="" class="w-[2.50rem]" />
        <p class="font-semibold text-[1.3rem] text-orange">{totalLand}m²</p>
      </div>
      <div class="flex items-center gap-3">
        <img src={brick} alt="" class="w-[1.80rem]" />
        <p class="font-semibold text-[1.3rem] text-orange">
          {totalContructed}m²
        </p>
      </div>
      <div class="flex items-center gap-2">
        <img src={film} alt="" class="w-[1.90rem]" />
        <p class="font-semibold text-[1.3rem] text-orange">{totalImages}</p>
      </div>
    </section>
  </div>
</div>

<style>
  h4 {
    font-family: Poppins;
  }
  p {
    font-family: Poppins;
  }
  img {
    object-fit: cover;
  }
</style>

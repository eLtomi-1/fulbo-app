<script>
  import calendar from "$lib/images/calendar-icon.svg";
  import users from "$lib/images/users-icon.svg";
  import link from "$lib/images/link-icon.svg";

  export let nombre;
  export let precio;
  export let cantidad;
  export let lugar;
  export let nota;
  export let fecha;
  export let asistentes;

  function parseQuantity() {
    if (cantidad == 10) {
      return "F5";
    } else if (cantidad == 14) {
      return "F7";
    } else if (cantidad == 22) {
      return "F11";
    }
  }

  function parseDate(fecha) {
    const fechaModificada = new Date(fecha);

    const mes = String(fechaModificada.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaModificada.getDate()).padStart(2, "0");
    const hora = String(fechaModificada.getHours()).padStart(2, "0");
    const minuto = String(fechaModificada.getMinutes()).padStart(2, "0");

    return `${hora}:${minuto} ${mes}/${dia}`;
  }
</script>

<div
  href="/"
  class="w-full bg-white text-green-600 rounded-xl px-5 py-5 flex flex-col"
>
  <div class="flex items-start justify-between">
    <h3 class="text-[#1a1a1a] font-inter font-semibold text-2xl tracking-tight">
      {nombre}
    </h3>
    <h3 class="font-inter font-bold text-2xl tracking-tight">
      {parseQuantity()}
    </h3>
  </div>
  <h4 class="font-inter font-semibold text-xl">
    ${precio / cantidad} c/u · {lugar}
  </h4>
  <p class="text-black font-inter font-light text-lg line-clamp-1">
    {nota}
  </p>
  <div class="flex items-center gap-4 mt-2">
    <div class="flex items-center gap-2">
      <img src={calendar} alt="" class="mb-1 w-6 h-6 object-contain" />
      <p class="font-inter font-semibold text-lg">{parseDate(fecha)}</p>
    </div>
    <div class="flex items-center gap-2">
      <img src={users} alt="" class="w-7 h-6 object-cover" />
      <p class="font-inter font-semibold text-lg">{asistentes}</p>
    </div>
  </div>
  <div class="flex gap-2 mt-1">
    <a
      href="/"
      class="flex items-center justify-center w-full rounded-[0.65rem] font-inter font-semibold text-lg border-2 border-green-600 mt-3"
      >Ver -></a
    >
    <button
      class="flex items-center justify-center gap-2 w-full rounded-[0.65rem] font-inter font-semibold text-lg border-2 py-[0.15rem] border-green-600 mt-3"
      >Link
      <img src={link} alt="" class="w-5 h-5 object-cover" />
    </button>
  </div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
</style>

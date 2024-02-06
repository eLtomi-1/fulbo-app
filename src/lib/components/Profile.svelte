<script>
  import shoeGreen from "$lib/images/shoe-icon-green.svg";
  import Modal from "./Modal.svelte";
  import { browser } from "$app/environment";

  export let showSecondModal = false;

  let ApodoUsuario = browser ? sessionStorage.getItem("UserApodo") : "Invitado";
</script>

<Modal bind:showSecondModal>
  <section class="pb-8 flex flex-col max-mbs:px-6 items-center">
    <img src={shoeGreen} alt="" class=" w-20 h-20 object-cover" />
    <h2
      class="font-inter font-extrabold text-3xl w-full text-center text-green-600"
    >
      {ApodoUsuario}
    </h2>
  </section>
</Modal>

<style>
</style>

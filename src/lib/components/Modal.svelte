<script>
  export let showModal = false;
  export let showSecondModal = false;

  import cerrar from "$lib/images/close-icon.svg";
  let dialog; // HTMLDialogElement

  $: if ((dialog && showModal) || (dialog && showSecondModal)) {
    dialog.showModal();
  } else if (dialog && !showModal) {
    dialog.close();
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-autofocus -->
<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
  bind:this={dialog}
  on:close={() => {
    showModal = false;
    showSecondModal = false;
  }}
  on:click|self={() => dialog.close()}
  class="max-w-md w-full rounded-2xl border-none bottom-0"
>
  <div on:click|stopPropagation>
    <button
      class="hover:bg-[#f1f1f1] outline-none rounded-md flex top-3 left-3 justify-center items-center h-9 w-9 max-mb:top-2 max-mb:left-2"
      on:click={() => dialog.close()}
    >
      <img src={cerrar} alt="" class="w-4 h-4 object-cover" />
    </button>
    <slot />
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (width < 440px) {
    dialog[open] {
      margin-block-end: 0;
      border-radius: 1rem 1rem 0rem 0rem;
    }
  }
</style>

<script>
  import "./styles.css";
</script>

<div class="app">
  <div class="absolute top-0 h-[4.9rem] w-full bg-orange"></div>
  <main class="bg-grey">
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
</style>

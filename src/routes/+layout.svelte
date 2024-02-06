<script>
  import "./styles.css";
</script>

<div class="app bg-ligthviolet">
  <main class="bg-ligthviolet">
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
    flex-direction: row;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }
</style>

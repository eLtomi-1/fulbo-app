<script>
  import { onMount } from "svelte";

  let users = [];

  onMount(async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let responseJSON = await response.json();
    users = responseJSON;
  });
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="grid grid-cols-3 gap-7">
  {#each users as user}
    <div class="bg-white rounded-md px-5 py-5">
      <div>Id: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  {/each}
</div>

<style>
</style>

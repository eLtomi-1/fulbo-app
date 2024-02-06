<script>
  export let type = "text";
  export let placeholder = "";
  export let min = "";
  export let max = "";
  export let minlength = "";
  export let maxlength = "";
  export let value;

  const handleInput = ({ target }) => {
    value = target.value;
  };
</script>

<input
  {type}
  {min}
  {max}
  {minlength}
  {maxlength}
  required
  class="px-4 py-3 w-full text-black text-lg rounded-xl font-inter font-normal bg-[#f1f1f1] outline-none placeholder-[#666666]"
  {placeholder}
  on:input={handleInput}
/>

<!-- markup (zero or more items) goes here -->

<style>
</style>

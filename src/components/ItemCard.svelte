<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TODOItem } from '../util/types';

  export let item: TODOItem;

  const dispatcher = createEventDispatcher();

  function handleCheckBtn(itemId: number) {
    dispatcher('mark-as-done', itemId);
  }
</script>

<div
  class="w-[300px] border-black border-4 p-2 rounded-lg flex flex-col items-start mb-3"
>
  <div
    class="flex flex-row items-baseline justify-between w-full border-2 bg-red-400 rounded p-2 text-white"
  >
    <div class="flex flex-row items-baseline">
      <span class="text-2xl text-white">{item.id}</span>
      <span class="text-xl ml-4 font-semibold">{item.title}</span>
    </div>

    <div class="flex flex-row justify-around w-[70px] text-xl">
      <button on:click={() => handleCheckBtn(item.id)}>&#10003;</button>
      <button>X</button>
    </div>
  </div>

  <div class="mt-4">
    <span class="text-xl">{item.body}</span>
  </div>
</div>

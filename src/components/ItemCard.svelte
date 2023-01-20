<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TODOItem } from '../util/types';

  export let item: TODOItem;
  export let itemBG: string;

  const dispatcher = createEventDispatcher();

  function handleCheckBtn(itemID: string) {
    dispatcher('mark-as-done', itemID);
  }

  function handleXBtn(itemID: string) {
    dispatcher('delete-item', itemID);
  }
</script>

<div
  class="w-[300px] border-black border-4 p-2 rounded-lg flex flex-col items-start mb-3"
>
  <div
    class={'flex flex-row items-baseline justify-between w-full border-2 rounded p-2 text-white' +
      itemBG}
  >
    <span class="text-xl ml-4 font-semibold">{item.title}</span>

    <div class="flex flex-row justify-around w-[70px] text-xl">
      {#if !item.isDone}
        <button on:click={() => handleCheckBtn(item.id)}>&#10003;</button>
      {/if}
      <button on:click={() => handleXBtn(item.id)}>X</button>
    </div>
  </div>

  <div class="mt-4">
    <span class="text-xl">{item.body}</span>
  </div>
</div>

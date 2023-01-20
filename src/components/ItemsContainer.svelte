<script lang="ts">
  import type { TODOItem } from '../util/types';
  import ItemCard from './ItemCard.svelte';

  export let Items: TODOItem[];
</script>

<div class="mt-5">
  {#each Items as todoItem (todoItem.id)}
    <ItemCard
      item={todoItem}
      itemBG={todoItem.isDone ? ' bg-green-500' : ' bg-red-500'}
      on:mark-as-done
      on:delete-item
    />
  {/each}
</div>

<script lang="ts">
  import { taskStore } from '../util/store';
  import ItemCard from './ItemCard.svelte';
</script>

<div class="mt-5">
  {#each $taskStore as todoItem (todoItem.id)}
    <ItemCard
      item={todoItem}
      itemBG={todoItem.isDone ? ' bg-green-500' : ' bg-red-500'}
      on:mark-as-done
      on:delete-item
    />
  {/each}
</div>

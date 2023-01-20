<script lang="ts">
  import type { TODOItem } from '../util/types';
  import ItemCard from './ItemCard.svelte';

  export let Items: TODOItem[];
</script>

<div class="mt-5">
  {#each Items as todoItem (todoItem.id)}
    <ItemCard item={todoItem} on:mark-as-done />
  {/each}
</div>

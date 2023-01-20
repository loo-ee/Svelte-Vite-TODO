<script lang="ts">
  import type { TODOItem } from "../util/types";
  import ItemCard from "./ItemCard.svelte";


  export let Items: TODOItem[]
</script>

<div>
  {#each Items as todoItem (todoItem.id)}
    <ItemCard item={todoItem}/>
  {/each}
</div>
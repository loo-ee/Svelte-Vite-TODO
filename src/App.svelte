<script lang="ts">
  import ItemsContainer from "./components/ItemsContainer.svelte";
import type { TODOItem } from "./util/types";


  let todoContainter: TODOItem[] = [
    {
      id: 1,
      title: 'TODO 1',
      body: 'This is a test'
    }
  ]

</script>

<main class="flex flex-col items-center">
  <div>
    <span class="text-4xl">Svelte TODO App</span>
  </div>

  <ItemsContainer Items={todoContainter}/>
</main>
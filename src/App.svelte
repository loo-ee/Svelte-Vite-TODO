<script lang="ts">
  import ItemsContainer from './components/ItemsContainer.svelte';
  import type { TODOItem } from './util/types';

  let todoContainter: TODOItem[] = [
    {
      id: 1,
      title: 'TODO 1',
      body: 'This is a test',
      isDone: false,
    },
    {
      id: 2,
      title: 'TODO 2',
      body: 'This is a test',
      isDone: true,
    },
  ];

  function markAsDone(event: CustomEvent<any>) {
    console.log(event.detail);
  }
</script>

<main class="flex flex-col items-center">
  <div
    class="flex flex-col items-center border-4 border-black w-[800px] p-5 rounded-lg mt-10"
  >
    <div>
      <span class="text-4xl">Svelte TODO App</span>
    </div>

    <ItemsContainer Items={todoContainter} on:mark-as-done={markAsDone} />
  </div>
</main>

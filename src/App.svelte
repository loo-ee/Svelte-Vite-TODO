<script lang="ts">
  import ItemsContainer from './components/ItemsContainer.svelte';
  import ToDoForm from './components/ToDoForm.svelte';
  import { taskStore } from './util/store';
  import type { TODOItem } from './util/types';

  function markAsDone(event: CustomEvent<any>) {
    let todoContainer: TODOItem[] = [];
    const selectedItemID = event.detail;

    todoContainer = todoContainer.map((item) =>
      item.id == selectedItemID ? { ...item, isDone: !item.isDone } : item
    );

    taskStore.set(todoContainer);
  }

  function deleteItem(event: CustomEvent<any>) {
    let todoContainer: TODOItem[] = [];
    const selectedItemID = event.detail;

    todoContainer = todoContainer.filter((item) => item.id != selectedItemID);
    taskStore.set(todoContainer);
  }

  function addTODO(event: CustomEvent<any>) {
    let todoContainer: TODOItem[] = [];
    const todoItem = event.detail;
    todoContainer = [...todoContainer, todoItem];
    taskStore.set(todoContainer);
  }
</script>

<main class="flex flex-col items-center">
  <div
    class="flex flex-col items-center border-4 border-black w-[800px] p-5 rounded-lg mt-10"
  >
    <div>
      <span class="text-4xl">Svelte TODO App</span>
    </div>

    <ItemsContainer on:mark-as-done={markAsDone} on:delete-item={deleteItem} />
  </div>

  <ToDoForm on:add-todo={addTODO} />
</main>

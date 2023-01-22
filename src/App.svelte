<script lang="ts">
  import ItemsContainer from './components/ItemsContainer.svelte';
  import ToDoForm from './components/ToDoForm.svelte';
  import { taskStore } from './util/store';

  function markAsDone(event: CustomEvent<any>) {
    const selectedItemID = event.detail;
    taskStore.update(
      (tasks) =>
        (tasks = tasks.map((item) =>
          item.id == selectedItemID ? { ...item, isDone: !item.isDone } : item
        ))
    );
  }

  function deleteItem(event: CustomEvent<any>) {
    const selectedItemID = event.detail;
    taskStore.update(
      (tasks) => (tasks = tasks.filter((item) => item.id != selectedItemID))
    );
  }

  function addTODO(event: CustomEvent<any>) {
    const todoItem = event.detail;
    taskStore.update((tasks) => (tasks = [...tasks, todoItem]));
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

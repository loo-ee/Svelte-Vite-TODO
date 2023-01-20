<script lang="ts">
  import ItemsContainer from './components/ItemsContainer.svelte';
  import ToDoForm from './components/ToDoForm.svelte';
  import type { TODOItem } from './util/types';

  let todoContainer: TODOItem[] = [
    {
      id: '1',
      title: 'TODO 1',
      body: 'This is a test',
      isDone: false,
    },
    {
      id: '2',
      title: 'TODO 2',
      body: 'This is a test',
      isDone: true,
    },
  ];

  function markAsDone(event: CustomEvent<any>) {
    const selectedItemID = event.detail;

    todoContainer = todoContainer.map((item) =>
      item.id == selectedItemID ? { ...item, isDone: !item.isDone } : item
    );
  }

  function deleteItem(event: CustomEvent<any>) {
    const selectedItemID = event.detail;

    todoContainer = todoContainer.filter((item) => item.id != selectedItemID);
  }

  function addTODO(event: CustomEvent<any>) {
    const todoItem = event.detail;
    todoContainer = [...todoContainer, todoItem];
  }
</script>

<main class="flex flex-col items-center">
  <div
    class="flex flex-col items-center border-4 border-black w-[800px] p-5 rounded-lg mt-10"
  >
    <div>
      <span class="text-4xl">Svelte TODO App</span>
    </div>

    <ItemsContainer
      Items={todoContainer}
      on:mark-as-done={markAsDone}
      on:delete-item={deleteItem}
    />
  </div>

  <ToDoForm on:add-todo={addTODO} />
</main>

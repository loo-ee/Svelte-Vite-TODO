<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TODOItem } from '../util/types';
  import { v4 as uuidv4 } from 'uuid';

  let titleText: string;
  let bodyText: string;
  let message: string;

  const dispatcher = createEventDispatcher();

  function handleSubmit() {
    if (!titleText || !bodyText) {
      message = 'Please fill all fields';
      return;
    }

    const todoItem: TODOItem = {
      id: uuidv4(),
      title: titleText,
      body: bodyText,
      isDone: false,
    };

    dispatcher('add-todo', todoItem);
    titleText = '';
    bodyText = '';
  }

  function validateInputs(inputNumber: number) {
    const tempInputHolder = inputNumber == 1 ? titleText : bodyText;

    if (!tempInputHolder) {
      message = 'Please fill this field';
      return;
    }

    message = '';
  }
</script>

<div
  class="flex flex-col items-center w-[800px] border-4 border-black rounded-lg p-5 mt-5"
>
  <span class="text-3xl font-semibold mb-4">Add new TODO</span>

  <form
    on:submit|preventDefault={handleSubmit}
    class="text-xl flex flex-col items-center"
  >
    <div class="mb-3 flex flex-row justify-between w-[400px]">
      <label for="title">Input title: </label>
      <input
        type="text"
        id="title"
        bind:value={titleText}
        on:input={() => validateInputs(1)}
        class="border-2 border-black rounded w-[280px]"
      />
    </div>

    <div class="flex flex-row items-center justify-between w-[400px]">
      <label for="body">Input details: </label>
      <textarea
        id="body"
        bind:value={bodyText}
        on:input={() => validateInputs(2)}
        class="border-2 border-black rounded w-[280px]"
      />
    </div>

    <button class="w-[150px] mt-3 bg-green-500 p-2 rounded text-white"
      >Submit</button
    >

    {#if message}
      <span>{message}</span>
    {/if}
  </form>
</div>

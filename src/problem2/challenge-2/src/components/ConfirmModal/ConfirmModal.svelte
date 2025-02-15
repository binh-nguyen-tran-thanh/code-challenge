<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';

  let {
    open = $bindable(),
    modalTitle = 'Confirm action',
    onSuccess = () => {},
    acceptText = 'Accept',
    cancelText = 'Decline',
    children = null
  } = $props();
</script>

<Modal title={modalTitle} bind:open autoclose>
  <div class="text-center">
    <ExclamationCircleOutline
      class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
    />
    {#if children}
      {@render children?.()}
    {/if}
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
      Are you sure you want to proceed?
    </h3>
  </div>
  <Button color="red" class="me-2" on:click={() => onSuccess()}
    >{acceptText}</Button
  >
  <Button color="alternative">{cancelText}</Button>
</Modal>

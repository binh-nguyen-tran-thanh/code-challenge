<script lang="ts">
  import { Spinner, P } from 'flowbite-svelte';
  import { loadingState } from '@src/store/globalState';
  let { isLoading = false } = $props();
</script>

{#if $loadingState || isLoading}
  <div
    class="loading-screen fixed inset-0 flex h-screen w-screen flex-col items-center justify-center space-x-3 sm:flex-row"
  >
    <Spinner color="yellow" />
  </div>
{/if}

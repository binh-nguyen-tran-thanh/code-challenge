<script lang="ts">
  import { loadingState } from '@src/store/globalState';
  let { isLoading = false } = $props();
</script>

{#if $loadingState || isLoading}
  <div
    class="loading-screen fixed inset-0 flex h-screen w-screen flex-col items-center justify-center space-x-3 sm:flex-row"
  >
    <svg
      class="h-10 w-10 flex-shrink-0 animate-spin text-primary-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <h2 class="text-2xl text-primary-700">
      Please wait as we process your request.
    </h2>
  </div>
{/if}

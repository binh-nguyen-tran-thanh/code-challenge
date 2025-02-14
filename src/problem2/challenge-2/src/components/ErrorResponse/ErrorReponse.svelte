<script lang="ts">
  import type { TErrorLevel } from '@src/models/error';
  import { clearError, errorLevel, errorState } from '@src/store/globalState';
  import { Toast, Alert, type ColorVariant } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';

  const colorConfig: Record<TErrorLevel, ColorVariant> = {
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    success: 'green'
  };

  let color: ColorVariant = $state('red');

  $effect(() => {
    color = colorConfig[$errorLevel];
  });

  $inspect($errorState);
</script>

{#if $errorState}
  <Toast {color} position="top-right" on:close={clearError}>
    <Alert {color}>
      <InfoCircleSolid slot="icon" class="w-5 h-5" />
      {$errorState}
    </Alert>
  </Toast>
{/if}

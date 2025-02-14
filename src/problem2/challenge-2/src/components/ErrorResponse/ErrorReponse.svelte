<script lang="ts">
  import type { TErrorLevel } from '@src/models/error';
  import { errorLevel, errorState } from '@src/store/globalState';
  import { Alert, type ColorVariant } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';

  const colorConfig: Record<TErrorLevel, ColorVariant> = {
    info: 'blue',
    warning: 'yellow',
    error: 'red'
  };

  let color: ColorVariant = $state('red');

  $effect(() => {
    color = colorConfig[$errorLevel];
  });
</script>

{#if $errorState}
  <Alert {color}>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    {$errorState}
  </Alert>
{/if}

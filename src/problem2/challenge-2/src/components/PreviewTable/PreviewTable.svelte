<script lang="ts">
  import { Heading, P } from 'flowbite-svelte';
  import { ArrowsRepeatOutline } from 'flowbite-svelte-icons';

  let {
    sourceTokenInfo,
    targetTokenInfo,
    exchangeRate,
    sourceAmount = 0,
    targetAmount = 0
  } = $props();
</script>

{#snippet token(src = '', currency = '', isRevert = false)}
  <div class="flex items-center gap-1 {isRevert ? 'flex-row-reverse' : ''}">
    <img class="h-5 w-5 rounded-full" {src} alt={currency} />
    {currency}
  </div>
{/snippet}

<Heading tag="h4" color="text-gray-300">Preview</Heading>
<article class="flex flex-col gap-4 justify-center">
  <div class="flex gap-4 items-center justify-center">
    {@render token(sourceTokenInfo?.src, sourceTokenInfo?.currency)}
    <ArrowsRepeatOutline class="w-5 h-5" />
    {@render token(targetTokenInfo?.src, targetTokenInfo?.currency, true)}
  </div>
  <P class="text-center" color="text-gray-400"
    >Exact Exchange Rate: {exchangeRate}</P
  >
  <P class="text-center" color="text-gray-400"
    >Exchange Amount: {sourceAmount}</P
  >
  <P class="text-center" color="text-gray-400">Receive Amount: {targetAmount}</P
  >
</article>

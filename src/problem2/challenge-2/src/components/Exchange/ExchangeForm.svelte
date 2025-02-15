<script lang="ts">
  import type { TToken } from '@src/models/token';
  import { tokenRateStore } from '@src/Pages/Exchange/store';
  import { Button, Tooltip } from 'flowbite-svelte';
  import { AtomOutline, ArrowsRepeatOutline } from 'flowbite-svelte-icons';
  import { form, field } from 'svelte-forms';
  import { min, required } from 'svelte-forms/validators';
  import TokenInputGroup from '../TokenInputGroup/TokenInputGroup.svelte';
  import ConfirmModal from '../ConfirmModal/ConfirmModal.svelte';
  import PreviewTable from '../PreviewTable/PreviewTable.svelte';

  let { onExchange } = $props();

  const sourceToken = field('sourceToken', 'USDC', [required(), min(1)]);
  const targetToken = field('targetToken', 'USDC', [required(), min(1)]);

  const targetTokenAmount = field('targetTokenAmount', 1, [required()]);
  const sourceTokenAmount = field('sourceTokenAmount', 1, [required(), min(1)]);

  const exchangeForm = form(
    sourceToken,
    targetToken,
    targetTokenAmount,
    sourceTokenAmount
  );

  let sourceTokenInfo: TToken | null = $state(null);
  let targetTokenInfo: TToken | null = $state(null);
  let exchangeRate: number = $state(0);
  let openConfirmModal = $state(false);

  const handleConfirm = async () => {
    await onExchange({
      sourceToken: $sourceToken.value,
      targetToken: $targetToken.value,
      sourceTokenAmount: $sourceTokenAmount.value,
      targetTokenAmount: $targetTokenAmount.value
    });

    openConfirmModal = false;
    exchangeForm.reset();
  };

  const handleSwap = () => {
    const sourceTokenValue = $sourceToken.value;
    const targetTokenValue = $targetToken.value;

    sourceToken.set(targetTokenValue);
    targetToken.set(sourceTokenValue);
  };

  $effect(() => {
    console.info('Change ?');
    const foundSourceTokenInfo =
      $tokenRateStore.find((token) => token.currency === $sourceToken.value) ??
      null;

    const foundTargetTokenInfo =
      $tokenRateStore.find((token) => token.currency === $targetToken.value) ??
      null;

    sourceTokenInfo = foundSourceTokenInfo;
    targetTokenInfo = foundTargetTokenInfo;
    exchangeRate =
      (foundSourceTokenInfo?.price ?? 0) / (foundTargetTokenInfo?.price ?? 1);
  });

  $effect(() => {
    $targetTokenAmount.value = $sourceTokenAmount.value * exchangeRate;
  });
</script>

<section class="flex flex-col md:flex-row justify-between space-y-4">
  <TokenInputGroup
    onUpdate={(currency) => sourceToken.set(currency)}
    bind:amount={$sourceTokenAmount.value}
    token={sourceTokenInfo}
    formId="sourceToken"
  />
  <div class="flex flex-col w-32 items-center justify-center gap-2">
    <Button id="swap" on:click={handleSwap}>
      <ArrowsRepeatOutline class="w-5 h-5" />
    </Button>
    <Tooltip triggeredBy="#swap">Swap</Tooltip>
    <div>
      1 : {exchangeRate.toFixed(4)}
    </div>
  </div>
  <TokenInputGroup
    onUpdate={(currency) => targetToken.set(currency)}
    bind:amount={$targetTokenAmount.value}
    token={targetTokenInfo}
    formId="targetToken"
    disabledAmountInput
  />
</section>

<Button
  class="mt-4 !p-2.5 rounded-s-none"
  disabled={!$exchangeForm.valid || openConfirmModal}
  on:click={() => (openConfirmModal = true)}
  color="purple"
>
  <AtomOutline class="w-6 h-6" />
  Exchange
</Button>

<ConfirmModal bind:open={openConfirmModal} onSuccess={handleConfirm}>
  <PreviewTable
    {sourceTokenInfo}
    {targetTokenInfo}
    {exchangeRate}
    sourceAmount={$sourceTokenAmount.value}
    targetAmount={$targetTokenAmount.value}
  />
  <br />
</ConfirmModal>

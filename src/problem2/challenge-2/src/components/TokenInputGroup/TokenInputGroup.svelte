<script lang="ts">
  import type { TToken } from '@src/models/token';
  import { tokenRateStore } from '@src/Pages/Exchange/store';
  import { Button, Dropdown, DropdownItem, Input } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';

  let {
    amount = $bindable(),
    disabledAmountInput = false,
    onUpdate,
    token
  }: {
    amount: number;
    onUpdate: (token: string) => void;
    token: TToken | null;
    disabledAmountInput?: boolean;
  } = $props();
</script>

<figure class="relative w-52 space-y-2 h-full">
  <div>
    <Button
      class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700"
      id="sourceToken"
    >
      <img
        class="h-5 w-5 rounded-full me-2"
        src={token?.src}
        alt={token?.currency}
      />
      {token?.currency}
      <ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
    </Button>
    <Dropdown triggeredBy="#sourceToken" classContainer="w-40" placement="top">
      <div class="flex flex-col max-h-96 overflow-y-auto">
        {#each $tokenRateStore as tokenItem}
          <DropdownItem
            on:click={() => onUpdate(tokenItem.currency)}
            class="inline-flex items-center {token?.currency ===
            tokenItem.currency
              ? 'underline'
              : ''}"
          >
            <img
              class="h-5 w-5 rounded-full me-2"
              src={tokenItem.src}
              alt={tokenItem.currency}
            />
            {tokenItem.currency}
          </DropdownItem>
        {/each}
      </div>
    </Dropdown>
  </div>
  <Input
    type="number"
    placeholder="Token Amount"
    bind:value={amount}
    disabled={disabledAmountInput}
  />
</figure>

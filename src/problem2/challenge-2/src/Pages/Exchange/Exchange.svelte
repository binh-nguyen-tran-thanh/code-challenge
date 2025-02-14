<script lang="ts">
  import ErrorReponse from '@src/components/ErrorResponse/ErrorReponse.svelte';
  import { getTokenRates, postExchangeToken } from '@src/lib/tokenService';
  import { onMount } from 'svelte';
  import { setTokenRate } from './store';
  import ExchangeForm from '@src/components/Exchange/ExchangeForm.svelte';
  import { setSuccessMessage } from '@src/store/globalState';

  const fetchTokenRates = async () => {
    const res = await getTokenRates();

    if (res.data.length) {
      setTokenRate(res.data);
    }
  };

  const handleExchange = async ({
    sourceToken,
    targetToken,
    sourceTokenAmount,
    targetTokenAmount
  }: {
    sourceToken: string;
    targetToken: string;
    sourceTokenAmount: number;
    targetTokenAmount: number;
  }) => {
    const res = await postExchangeToken({
      sourceToken,
      targetToken,
      sourceTokenAmount,
      targetTokenAmount
    });

    if (res.status === 200) {
      setSuccessMessage('Exchange successful');
    }
  };

  onMount(() => {
    fetchTokenRates();
  });
</script>

<ExchangeForm onExchange={handleExchange} />

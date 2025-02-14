<script lang="ts">
  import ErrorReponse from '@src/components/ErrorResponse/ErrorReponse.svelte';
  import { getTokenRates } from '@src/lib/tokenService';
  import { onMount } from 'svelte';
  import { tokenRateStore } from './store';

  const fetchTokenRates = async () => {
    const res = await getTokenRates();

    if (res.data.length) {
      tokenRateStore.set(res.data);
    }
  };

  onMount(() => {
    fetchTokenRates();
  });
</script>

<ErrorReponse />

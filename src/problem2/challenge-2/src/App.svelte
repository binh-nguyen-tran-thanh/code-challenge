<script lang="ts">
  import Loading from '@src/components/Loading/Loading.svelte';
  import Exchange from './Pages/Exchange/Exchange.svelte';
  import ErrorReponse from './components/ErrorResponse/ErrorReponse.svelte';
  import PageFooter from './components/PageFooter/PageFooter.svelte';
</script>

<main>
  <h1>Fancy Form</h1>

  <div class="card">
    <Exchange />
    <Loading />
  </div>
</main>

<PageFooter />

<ErrorReponse />

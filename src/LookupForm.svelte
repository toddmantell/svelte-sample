<script>
  import Button from "./Button.svelte";
  export let handleClick, handleInput, tickerSymbol, stockData;
</script>

<style>
  .stock-price__increase {
    color: green;
  }

  .stock-price__decrease {
    color: red;
  }
</style>

<form>
  <input type="text" on:input={handleInput} />
  <div>Symbol: {tickerSymbol || ''} </div>
  {#if stockData && stockData.companyName}
    <div>
      <b>Company:</b>
       {stockData.companyName}
    </div>
    <div>
      <b>Latest Price</b>
      <span
        class={stockData.change > 0 ? 'stock-price__increase' : 'stock-price__decrease'}>
        {stockData.latestPrice}
      </span>
    </div>
    <div>
      <b>Price Change:</b>
      <span
        span
        class={stockData.change > 0 ? 'stock-price__increase' : 'stock-price__decrease'}>
        {stockData.change}
      </span>
    </div>
  {:else}
    <p>Company Data Not Found</p>
  {/if}

  <Button click={handleClick} />
</form>

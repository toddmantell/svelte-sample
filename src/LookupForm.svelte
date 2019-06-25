<script>
  import Button from "./Button.svelte";
  import { currentUser } from "./stores.js";
  export let handleClick, handleInput, tickerSymbol, stockData;

  function addToWatchList() {
    if (
      stockData &&
      !$currentUser.stocks.find(
        stock => stock.companyName === stockData.companyName
      )
    ) {
      currentUser.update(cUser => {
        return { ...cUser, stocks: [...cUser.stocks, stockData] };
      });
      console.log("current user updated?", $currentUser);
    } else alert("Unable to add stock to Watch List because it already exists");
  }
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
    <div>
      <a href="" on:click|preventDefault={addToWatchList}>Add to WatchList</a>
    </div>
  {:else}
    <p>Company Data Not Found</p>
  {/if}

  <Button click={handleClick} />
</form>

<script>
  import * as vars from "../ENV.json";
</script>

<style>
  section {
  }

  figure {
    width: 30%;
  }

  .stock-price__increase {
    color: green;
  }

  .stock-price__decrease {
    color: red;
  }
</style>

<section>
  <h2>Watch List</h2>
  {#each vars.watchList as stockData, i}
    <figure>
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
      {#if i < vars.watchList.length - 1}
        <hr />
      {:else}
        <span />
      {/if}
    </figure>
  {/each}
</section>

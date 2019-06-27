<script>
  import { currentUser } from "./stores";
</script>

<style>
  h2 {
    justify-content: center;
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
  {#each $currentUser.stocks as currentStock, i}
    <div>
      <div>
        <b>Company:</b>
         {currentStock.companyName}
      </div>
      <div>
        <b>Latest Price</b>
        <span
          class={currentStock.change > 0 ? 'stock-price__increase' : 'stock-price__decrease'}>
           {currentStock.latestPrice}
        </span>
      </div>
      <div>
        <b>Price Change:</b>
        <span
          span
          class={currentStock.change > 0 ? 'stock-price__increase' : 'stock-price__decrease'}>
           {currentStock.change}
        </span>
      </div>
      {#if i < $currentUser.stocks.length - 1}
        <hr />
      {:else}
        <span />
      {/if}
    </div>
  {/each}
</section>

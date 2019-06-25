<script>
  import { writable } from "svelte/store";
  import * as vars from "../ENV.json";
  import LookupForm from "./LookupForm.svelte";
  import WatchList from "./WatchList.svelte";
  import axios from "axios";
  export let user;

  const props = {
    tickerSymbol: "",
    stockData: {},
    handleClick,
    handleInput
  };

  let currentUser = getUser();

  function handleInput(event) {
    const { value } = event.target;
    props.tickerSymbol = value && value.toUpperCase();
  }

  async function handleClick(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://cloud.iexapis.com/v1/stock/${props.tickerSymbol}/quote?token=${
          vars.API_KEY
        }`
      );
      console.log("response", response.data);
      props.stockData = response.data;
    } catch (error) {
      props.stockData = error;
    }
  }

  function getUser() {
    const user = { name: "Todd", stocks: vars.watchList };
    const currentUser = writable(user);
    return user;
  }
</script>

<style>
  main {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
  }
</style>

<main>
  <h1>Stock Quotes For {user.name}</h1>
  <LookupForm {...props} />
  <WatchList />
</main>

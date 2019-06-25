import { writable } from "svelte/store";

const user = { name: "Todd", stocks: vars.watchList };
export const currentUser = writable(user);

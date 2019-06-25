import { writable } from "svelte/store";
import * as vars from "../ENV.json";

const user = { name: "Todd", stocks: vars.watchList };
export const currentUser = writable(user);

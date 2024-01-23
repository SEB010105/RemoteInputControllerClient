import {writable, type Writable} from "svelte/store";

export const address:Writable<string> = writable("http://" + location.hostname + ":5000");

import {writable, type Writable} from "svelte/store";

export const ip:Writable<string> = writable("localhost");
export const port:Writable<number> = writable(5000);

import {writable, type Writable} from "svelte/store";

export const ip:Writable<string> = writable();
export const port:Writable<number> = writable();
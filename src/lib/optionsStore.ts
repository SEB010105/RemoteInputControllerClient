import {writable, type Writable} from "svelte/store";

export let keyboardSyncingEnabled:Writable<boolean> = writable(false);


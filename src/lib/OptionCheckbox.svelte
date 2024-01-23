<script lang="ts">
    import type {Writable} from "svelte/store";

    export let text: string;
    export let store: Writable<boolean>;

    let enabled: boolean = false;

    function handleChange() {
        enabled = !enabled;
        store.set(enabled);
    }
</script>

<label class="flex items-center">
    <input
            class="size-4 mr-1"
            type="checkbox"
            on:change={handleChange}
    >
    {text}
</label>
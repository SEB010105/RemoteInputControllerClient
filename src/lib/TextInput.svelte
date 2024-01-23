<script lang="ts">
    import {post} from "./publicFunctions.js";
    import {address} from "./adressStore.js";

    let input: string;

    function handleClick() {
        post($address + "/write", {keys: input});
        input = "";
    }
</script>

<div>
    <input type="text" bind:value={input}>
    <button on:click={handleClick}>Write to host</button>
</div>
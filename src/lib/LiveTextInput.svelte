<script lang="ts">
    import {post} from "./publicFunctions.js";
    import {address} from "./adressStore.js";

    let input: string;

    function handleInput() {
        post($address + "/write", {keys: input});
        input = input.slice(input.length-3);
    }
</script>

<label>
    Write Live to host
    <input
        type="text"
        bind:value={input}
        on:input={handleInput}
    >
</label>
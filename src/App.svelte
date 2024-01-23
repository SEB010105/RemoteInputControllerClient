<script lang="ts">
    import "./app.css"
    import AddressInput from "./lib/AddressInput.svelte";
    import {post} from "./lib/publicFunctions";
    import {address} from "./lib/adressStore";
    import Keyboard from "./lib/Keyboard.svelte";

    function onKeyDown(event: KeyboardEvent) {
        post($address + "/press", {key: event.key});
    }
</script>

<main>
    <AddressInput/>

    <Keyboard />
</main>

<!--
<svelte:window on:keydown={onKeyDown}/>
-->
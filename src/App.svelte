<script lang="ts">
    import "./app.css"
    import {post} from "./lib/publicFunctions";
    import {address} from "./lib/adressStore";
    import Keyboard from "./lib/Keyboard.svelte";
    import Options from "./lib/Options.svelte";
    import KeyboardButton from "./lib/KeyboardButton.svelte";

    function onKeyDown(event: KeyboardEvent) {
        post($address + "/press", {key: event.key});
    }
</script>

<main>
    <Options />

    <div class="absolute w-screen bottom-0">
        <Keyboard />
    </div>
</main>

<!--
<svelte:window on:keydown={onKeyDown}/>
-->
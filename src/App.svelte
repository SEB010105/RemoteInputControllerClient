<script lang="ts">
    import "./app.css"
    import {post} from "./lib/publicFunctions";
    import {address} from "./lib/adressStore";
    import Keyboard from "./lib/Keyboard.svelte";
    import Options from "./lib/Options.svelte";
    import {keyboardSyncingEnabled} from "./lib/optionsStore";

    function onKeyDown(event: KeyboardEvent) {
        post($address + "/down", {key: event.key});
    }

    function onKeyUp(event: KeyboardEvent) {
        post($address + "/up", {key: event.key});
    }
</script>

<main>
    <Options />

    <div class="absolute w-screen bottom-0">
        <Keyboard />
    </div>
</main>

<svelte:window 
        on:keydown={$keyboardSyncingEnabled ? onKeyDown : null}
        on:keyup={$keyboardSyncingEnabled ? onKeyUp : null}
/>
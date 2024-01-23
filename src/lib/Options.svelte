<script lang="ts">
    import AddressInput from "./AddressInput.svelte";
    import OptionCheckbox from "./OptionCheckbox.svelte";
    import {keyboardSyncingEnabled} from "./optionsStore";
</script>

<div class="flex flex-col items-center">
    <AddressInput />

    <OptionCheckbox text="Enable keyboard syncing" store={keyboardSyncingEnabled}/>
</div>
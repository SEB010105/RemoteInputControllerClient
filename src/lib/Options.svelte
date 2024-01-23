<script lang="ts">
    import AddressInput from "./AddressInput.svelte";
    import OptionCheckbox from "./OptionCheckbox.svelte";

    let keyboardSyncingEnabled: boolean;
</script>

<div class="flex flex-col items-center">
    <AddressInput />

    <OptionCheckbox text="Enable keyboard syncing" bindTo={keyboardSyncingEnabled}/>
</div>
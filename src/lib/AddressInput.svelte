<script lang="ts">
    import {address} from "./adressStore";
</script>

<label>
    Host:
    <input
            type="text"
            bind:value={$address}
    >
</label>
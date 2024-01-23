<script lang="ts">

    import {address} from "./adressStore";

    let addressInput: string = "http://localhost:5000";
</script>

<div class="text-center w-screen">
    <label>
        Host:
        <input
                type="text"
                bind:value={$address}
                on:input={() => address.set(addressInput)}>
    </label>
</div>
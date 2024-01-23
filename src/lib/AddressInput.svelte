<script lang="ts">

    import {address} from "./adressStore";


    let addressInput: string = "http://" + location.hostname + ":5000";
</script>

<label>
    Host:
    <input
            type="text"
            bind:value={addressInput}
            on:input={() => address.set(addressInput)}>
</label>
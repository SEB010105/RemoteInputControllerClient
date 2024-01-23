<script lang="ts">

    import {ip, port} from "./adressStore";

    let ipInput: string = "localhost";
    let portInput: number = 5000;
</script>

<div>
    <label>
        IP:
        <input
                type="text"
                bind:value={ipInput}
                on:input={() => ip.set(ipInput)}>
    </label>
    <label>
        PORT:
        <input
                type="number"
                bind:value={portInput}
                on:input={() => port.set(portInput)}>
    </label>
</div>
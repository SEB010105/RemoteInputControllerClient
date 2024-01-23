<script lang="ts">

    import {post} from "./publicFunctions";
    import {ip, port} from "./adressStore";

    export let key:string;

    $: address = "http://" + $ip + ":" + $port + "/press";

    function handleClick() {
        post(address, {key})
    }
</script>

<div>
    <button
            on:click={handleClick}
    >{key}</button>
</div>
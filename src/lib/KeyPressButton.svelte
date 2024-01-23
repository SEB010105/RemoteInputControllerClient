<script lang="ts">

    import {post} from "./publicFunctions";
    import {address} from "./adressStore";

    export let key:string;

    function handleClick() {
        post($address + "/press", {key})
    }
</script>

<button
        id={key}
        class="outline-none bg-gray-600 text-white rounded-sm m-0.5 text-xl p-0.5 border-b-4 border-gray-700 active:bg-gray-700 active:border-gray-700 hover:bg-gray-500 hover:border-gray-600"
        on:click={handleClick}
>{key}</button>

<style>
    #enter {
        grid-row: 3 / 5;
        grid-column: 14;
    }

    #space {
        grid-column: 4 / 11;
    }
</style>
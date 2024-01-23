<script lang="ts">

    import {post} from "./publicFunctions";
    import {address} from "./adressStore";

    export let key:string;
    export let toggleable:boolean;

    let toggled:boolean;

    function handlePress() {
        post($address + "/press", {key})
    }

    function handleToggle() {
        if (toggled)
            post($address + "/up", {key});
        else
            post($address + "/down", {key});

        toggled = !toggled;
    }
</script>

<button
        id={key}
        class={(toggled) ? "bg-gray-700" : "bg-gray-600"}
        on:click={toggleable ? handleToggle : handlePress}
>{key}</button>

<style>
    button {
        outline: none;
        color: white;
        border-radius: 0.2rem;
        padding: 0.5rem;
        margin: 0.2rem;
        border-bottom: 0.3rem solid;
        border-bottom-color: theme("colors.gray.700");
    }

    button:hover {
        background-color: theme("colors.gray.500");
        border-bottom-color: theme("colors.gray.600");
    }

    button:active {
        background-color: theme("colors.gray.700");
        border-bottom-color: theme("colors.gray.700");
    }

    #enter {
        grid-row: 3 / 5;
        grid-column: 14;
    }

    #space {
        grid-column: 4 / 11;
    }
</style>
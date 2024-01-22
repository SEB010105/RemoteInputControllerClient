<script lang="ts">

    export let content:string;

    function handleClick() {
        console.log(content)
    }
</script>

<div>
    <button
            on:click={handleClick}
    >{content}</button>
</div>
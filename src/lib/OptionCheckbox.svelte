<script lang="ts">
    export let text: string;
    export let bindTo: any;
</script>

<label class="flex items-center">
    <input
            class="size-4 mr-1"
            type="checkbox"
            bind:value={bindTo}
    >
    {text}
</label>
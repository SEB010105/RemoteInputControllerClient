<script lang="ts">
    import KeyboardButton from "./KeyboardButton.svelte";

    const keys: string[] = "apps pageup pagedown browserback browserforward browserhome browserrefresh browsersearch prevtrack playpause nexttrack volumemute volumedown volumeup esc f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 del ^ 1 2 3 4 5 6 7 8 9 0 ß ´ backspace tab q w e r t z u i o p ü + enter capslock a s d f g h j k l ö ä # shiftleft < y x c v b n m , . - up shiftright ctrlleft win altleft space altright left down right".split(" ");
    const toggleableKeys: string[] = "shiftleft shiftright ctrlleft altleft altright".split(" ");
</script>

<div class="keyboard bg-gray-800 p-2">
    {#each keys as key}
        <KeyboardButton key={key} toggleable={toggleableKeys.includes(key)}/>
    {/each}
</div>

<style>
    .keyboard {
        display: grid;
        grid-template-columns: repeat(14, 1fr);
    }
</style>
<script lang="ts">
  import "./app.css"
  import KeyPressButton from "./lib/KeyPressButton.svelte";
  import AddressInput from "./lib/AddressInput.svelte";
</script>

<main>
  <AddressInput />

  <KeyPressButton key="W"/>
  <KeyPressButton key="A"/>
  <KeyPressButton key="S"/>
  <KeyPressButton key="D"/>
</main>

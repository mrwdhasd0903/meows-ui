<template>
  <button class="me-button">按钮</button>
</template>

<script>
export default {
  name: "MeButton"
};
</script>

<style scoped lang="scss">
.me-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  cursor: pointer;
  &:hover {
    border-color: var(--boder-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
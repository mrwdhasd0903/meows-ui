<template>
  <div class="x-button">x-button</div>
</template>

<script>
export default {
  name: "XButton",
  props: {
    type: String
  }
};
</script>

<style scoped>
.x-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
<template>
  <button class="me-button" :class="{[`me-icon-${iconPosition}`]:true}" @click="$emit('click')">
    <me-icon v-if="icon && !loading" :name="icon" />
    <me-icon v-if="loading" class="me-loading" :name="loadingIcon"></me-icon>
    <div class="me-content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: "MeButton",
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      default: "i-loading"
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        return val == "left" || val == "right";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.me-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
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
  &.me-icon-left {
    > .me-icon {
      order: 1;
      margin-right: 0.1em;
    }
    > .me-content {
      order: 2;
    }
  }
  &.me-icon-right {
    > .me-icon {
      order: 2;
      margin-left: 0.1em;
    }
    > .me-content {
      order: 1;
    }
  }
  .me-loading {
    animation: rotate 1s infinite linear;
  }
}
</style>
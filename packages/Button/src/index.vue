<template>
  <button
    class="me-button"
    :class="[
    'me-size--'+size,
    'me-icon--'+iconPosition,
    'me-type--'+type,
    {
      'me-nofocus':nofocus,
      'me-disabled':disabled,
      'me-border-outer':outer
    }
    ]"
    @click="disabled?'':$emit('click')"
  >
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
    nofocus: Boolean,
    disabled: Boolean,
    outer: Boolean,
    size: {
      type: String,
      default: "standard",
      validator(val) {
        return val == "standard" || val == "mini" || val == "big";
      }
    },
    type: {
      type: String,
      default: "ordinary"
    },
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
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../theme/color.scss";

@mixin me-type($default, $hover, $focus) {
  border: 1px solid $default;
  background-color: $default;
  &.me-border-outer {
    border: 1px solid $hover;
    color: $hover;
    background-color: #fff;
    &:hover {
      color: #fff;
    }
    &:focus {
      color: #fff;
    }
    &:focus {
      background-color: #fff;
    }
    &:hover {
      background-color: #fff;
    }
  }
  &:hover {
    border-color: $hover;
    background-color: $hover;
  }
  &:focus {
    background-color: $focus;
    border-color: $focus;
  }

  &.me-nofocus {
    &:focus {
      background-color: $default;
      border-color: $default;
    }
    &:active {
      background-color: $focus;
      border-color: $focus;
    }
  }
  &.me-disabled {
    cursor: not-allowed;
    &:focus {
      background-color: $default;
      border-color: $default;
    }
    &:hover {
      border-color: $default;
      background-color: $default;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.me-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0 1em;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  color: #fff;
  fill: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  &.me-size--standard {
    height: 36px;
  }
  &.me-size--mini {
    height: 30px;
  }
  &.me-size--big {
    height: 40px;
  }

  &.me-type--ordinary {
    @include me-type($柚青, $柚青_, $柚青__);
  }
  &.me-type--success {
    @include me-type($靛青, $靛青_, $靛青__);
  }
  &.me-type--warning {
    @include me-type($藤黄, $藤黄_, $藤黄__);
  }
  &.me-type--important {
    @include me-type($石榴红, $石榴红_, $石榴红__);
  }
  &.me-type--youth {
    @include me-type($翡翠色, $翡翠色_, $翡翠色__);
  }
  &.me-type--dynamic {
    @include me-type($橘红, $橘红_, $橘红__);
  }
  &.me-type--plain {
    @include me-type($奶灰, $奶灰_, $奶灰__);
  }
  &.me-type--elegant {
    @include me-type($漆黑, $漆黑_, $漆黑__);
  }

  &.me-icon--left {
    > .me-icon {
      order: 1;
      margin-right: 0.1em;
    }
    > .me-content {
      order: 2;
    }
  }
  &.me-icon--right {
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
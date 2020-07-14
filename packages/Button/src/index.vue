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
      'me-border-outer':outer,
      'me-border-outer-in':outerin,
      'me-border-outer-to-in':outertoin,
      'me-border-round':round,
      'me-border-circle':circle
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
    round: Boolean,
    circle: Boolean,
    nofocus: Boolean,
    disabled: Boolean,
    outertoin: Boolean,
    outerin: Boolean,
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
@mixin colorAndfill($color) {
  color: $color;
  fill: $color;
}
@mixin me-type($default, $hover, $focus, $weak) {
  border: 1px solid $default;
  background-color: $default;
  &.me-border-outer,
  &.me-border-outer-in,
  &.me-border-outer-to-in {
    //外层时的主题
    border: 1px solid $hover;
    color: $hover;
    fill: $hover;
    background-color: #fff;
    &.me-border-outer-in {
      //外层淡色
      background-color: $weak;
    }
    &:hover,
    &:focus {
      @include colorAndfill(#fff);
    }
  }
  &:hover {
    &,
    &.me-border-outer-in {
      border-color: $hover;
      background-color: $hover;
    }
  }
  &:focus {
    &,
    &.me-border-outer-in {
      background-color: $focus;
      border-color: $focus;
    }
  }
  &.me-border-outer-to-in {
    &:hover {
      background-color: $weak;
      @include colorAndfill($default);
    }
    &:focus {
      background-color: $focus;
      @include colorAndfill(#fff);
    }
  }
  &.me-nofocus {
    //点击时无焦点的主题
    &:focus {
      background-color: $default;
      border-color: $default;
    }
    &:active {
      background-color: $focus;
      border-color: $focus;
    }
    &.me-border-outer,
    &.me-border-outer-in {
      //覆盖
      &:focus {
        background-color: #fff;
        @include colorAndfill($default);
      }
      &:active,
      &:hover {
        background-color: $default;
        @include colorAndfill(#fff);
      }
    }
    &.me-border-outer-in {
      //覆盖
      &:active,
      &:hover {
        background-color: $default;
      }
    }
    &.me-border-outer-to-in {
      &:focus {
        background-color: #fff;
        @include colorAndfill($default);
      }
      &:hover {
        background-color: $weak;
      }
      &:active {
        background-color: $default;
        @include colorAndfill(#fff);
      }
    }
  }
  &.me-disabled {
    //不可点击的主题
    cursor: not-allowed;
    &:focus,
    &:hover {
      @include colorAndfill(#fff);
      background-color: $default;
    }
    &.me-border-outer-to-in,
    &.me-border-outer {
      //覆盖
      &:hover,
      &:focus {
        background-color: #fff;
        @include colorAndfill($default);
      }
    }
    &.me-border-outer-in {
      //覆盖
      &:hover,
      &:focus {
        background-color: $weak;
        @include colorAndfill($default);
      }
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
    @include me-type($柚青, $柚青_, $柚青__, $_柚青);
  }
  &.me-type--success {
    @include me-type($靛青, $靛青_, $靛青__, $_靛青);
  }
  &.me-type--warning {
    @include me-type($藤黄, $藤黄_, $藤黄__, $_藤黄);
  }
  &.me-type--important {
    @include me-type($石榴红, $石榴红_, $石榴红__, $_石榴红);
  }
  &.me-type--youth {
    @include me-type($翡翠色, $翡翠色_, $翡翠色__, $_翡翠色);
  }
  &.me-type--dynamic {
    @include me-type($橘红, $橘红_, $橘红__, $_橘红);
  }
  &.me-type--plain {
    @include me-type($奶灰, $奶灰_, $奶灰__, $_奶灰);
  }
  &.me-type--elegant {
    @include me-type($漆黑, $漆黑_, $漆黑__, $_漆黑);
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
  &.me-border-circle {
    padding: 0;
    &.me-icon--right,
    &.me-icon--left {
      > .me-icon {
        margin: 0;
      }
    }
    &.me-size--standard {
      width: 36px;
    }
    &.me-size--mini {
      width: 30px;
    }
    &.me-size--big {
      width: 40px;
    }
  }
  &.me-border-round,
  &.me-border-circle {
    &.me-size--standard {
      border-radius: 18px;
    }
    &.me-size--mini {
      border-radius: 15px;
    }
    &.me-size--big {
      border-radius: 20px;
    }
  }
  .me-loading {
    animation: rotate 1s infinite linear;
  }
}
</style>
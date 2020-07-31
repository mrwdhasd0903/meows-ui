<template>
  <div
    class="me-input"
    :class="[
    'me-size--'+size,
    {
    'me-input--suffix':showSuffix
  }]"
    :style="{
    'width':width
  }"
  >
    <input
      :class="[
      'me-type--'+activeLight,{
      'me-disabled':disabled,
    }]"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="showPwd?(passwordVisible?'text':'password'):type"
      :name="name"
      :value="value"
      @input="(e)=>{$emit('input',e.target.value)}"
      @focus="()=>{$emit('focus')}"
      @blur="()=>{$emit('blur')}"
      class="me-input__inner"
    />
    <span class="me-input__suffix" v-if="showSuffix">
      <me-icon name="i-chuangkou-guanbi-1" v-if="clearable&&value!=''" @click="clear"></me-icon>
      <me-icon
        :name="'i-yanjing-'+(passwordVisible?'off':'on')"
        v-if="showPwd&&type=='password'"
        @click="handlePwd"
      ></me-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "MeInput",
  data() {
    return {
      //用于控制是否显示密码
      passwordVisible: false
    };
  },
  props: {
    width: {
      type: String,
      default: null
    },
    activeLight: {
      type: String,
      default: "ordinary"
    },
    size: {
      type: String,
      default: "standard",
      validator(val) {
        return val == "standard" || val == "mini" || val == "big";
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPwd: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPwd;
    }
  },
  methods: {
    handlePwd() {
      this.passwordVisible = !this.passwordVisible;
    },
    clear() {
      this.$emit("clear");
      this.$emit("input", "");
    }
  }
};
</script>

<style lang='scss'>
@import "../../theme/color.scss";
@mixin me-size($size) {
  height: $size;
  .me-input__suffix {
    line-height: $size;
  }
  .me-input__inner {
    height: $size;
    line-height: $size;
  }
}
.me-input {
  &.me-size--standard {
    @include me-size(36px);
  }
  &.me-size--mini {
    @include me-size(30px);
  }
  &.me-size--big {
    @include me-size(40px);
  }
}
.me-input {
  .me-type--ordinary:focus {
    border-color: $柚青;
  }
  .me-type--success:focus {
    border-color: $靛青;
  }
  .me-type--warning:focus {
    border-color: $藤黄;
  }
  .me-type--youth:focus {
    border-color: $石榴红;
  }
  .me-type--important:focus {
    border-color: $翡翠色;
  }
  .me-type--dynamic:focus {
    border-color: $橘红;
  }
  .me-type--plain:focus {
    border-color: $奶灰;
  }
  .me-type--elegant:focus {
    border-color: $漆黑;
  }
}
.me-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .me-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 13px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      // border-color: #41b17e;
    }
    &.me-disabled {
      cursor: not-allowed;
      background-color: #f5f7fa;
      border-color: #e4e7ed;
    }
  }
}
.me-input--suffix {
  .me-input__inner {
    padding-right: 50px;
  }
  .me-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.2s;
    z-index: 900;
    .me-icon {
      margin-left: 4px;
      fill: #c0c4cc;
      font-size: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: fill 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        fill: #a4a7ac;
      }
    }
  }
}
</style>
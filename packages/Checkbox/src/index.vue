<template>
  <label class="me-checkbox" :class="{'me-checked':model}">
    <span class="me-checkbox__input">
      <span class="me-checkbox__inner"></span>
      <input type="checkbox" class="me-checkbox__original" :name="name" v-model="model" />
    </span>
    <span class="me-checkbox__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "MeCheckbox",
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.me-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .me-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .me-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.2s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.2s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 0px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .me-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .me-checkbox__label {
    padding-left: 10px;
    font-size: 14px;
  }
}
.me-checkbox.me-checked {
  .me-checkbox__input {
    .me-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .me-checkbox__label {
    color: #409eff;
  }
}
</style>
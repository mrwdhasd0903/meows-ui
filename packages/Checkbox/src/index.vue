<template>
  <label class="me-checkbox" :class="{'me-checked':isChecked}">
    <span class="me-checkbox__input">
      <span class="me-checkbox__inner" :style="activeStyle[0]"></span>
      <input
        type="checkbox"
        class="me-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="me-checkbox__label" :style="activeStyle[1]">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
import themeMap from "../../Theme/color";
export default {
  name: "MeCheckbox",
  computed: {
    _activeColor() {
      if (this.activeColor == "") {
        return themeMap.ordinary;
      }
      let res = themeMap[this.activeColor];
      return res ? res : this.activeColor;
    },
    activeStyle() {
      return this.isChecked
        ? [
            {
              borderColor: this._activeColor,
              backgroundColor: this._activeColor
            },
            { color: this._activeColor }
          ]
        : [null, null];
    },
    isChecked() {
      return this.hasMeRadioGroup
        ? this.model.includes(this.label)
        : this.model;
    },
    model: {
      get() {
        return this.hasMeRadioGroup ? this.MeCheckboxGroup.value : this.value;
      },
      set(value) {
        this.hasMeRadioGroup
          ? this.MeCheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    hasMeRadioGroup() {
      return !!this.MeCheckboxGroup;
    }
  },
  inject: {
    MeCheckboxGroup: {
      default: null
    }
  },
  props: {
    activeColor: {
      type: String,
      default: ""
    },
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
      // background-color: #409eff;
      // border-color: #409eff;
      &:after {
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .me-checkbox__label {
    // color: #409eff;
  }
}
</style>
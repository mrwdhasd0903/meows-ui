<template>
  <!-- 对话框遮罩 -->
  <transition name="me-fade">
    <div class="me-dialog__wrapaper" v-show="visible" @click.self="handleClose">
      <!-- 动画 -->
      <transition :name="transition">
        <!-- 对话框 -->
        <div
          class="me-dialog"
          v-show="visible"
          :style="{
        width:width,
        marginTop:top
      }"
        >
          <div class="me-dialog__header">
            <slot name="title">
              <span class="me-dialog__title">{{title}}</span>
            </slot>
            <button class="me-dialog__headerbtn" @click="send('close')">
              <me-icon name="i-fanhui-a" class="me-icon-close"></me-icon>
            </button>
          </div>
          <div class="me-dialog__body">
            <slot />
          </div>
          <div class="me-dialog__footer">
            <slot name="footer">
              <me-button @click="send('sure')">确定</me-button>
              <me-button @click="send('cancel')" outer>取消</me-button>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MeDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    transition: {
      type: String,
      default: "me-fadeToUp"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "10vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
    send(flag) {
      this.$emit(flag);
      this.handleClose();
    }
  }
};
</script>

<style lang="scss">
.me-dialog__wrapaper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  width: 100%;
  z-index: 990903;
  background-color: rgba(0, 0, 0, 0.5);

  .me-dialog {
    position: relative;
    margin: auto;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

    &__header {
      padding: 20px 20px 10px;
      .me-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .me-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .me-icon-close {
          fill: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      .me-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
// .dialog-fade-enter-active {
//   animation: fade 0.2s ease;
// }
// .dialog-fade-leave-active {
//   animation: fade 0.2s reverse ease;
// }

// .dialog-fade-g-enter-active {
//   animation: fade-g 0.2s ease;
// }
// .dialog-fade-g-leave-active {
//   animation: fade-g 0.2s reverse ease;
// }
// @keyframes fade-g {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
// @keyframes fade {
//   0% {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0px);
//   }
// }
</style>
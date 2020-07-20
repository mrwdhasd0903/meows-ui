<template>
  <div
    class="me-three"
    :style="{
  transform: 'perspective('+perspective+'px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg) rotateZ('+rotateZ+'deg)',
  transformOrigin: width/2+'px '+height/2+'px '+(-deep)/2+'px',
  perspectiveOrigin: width/2+'px '+height/2+'px'
  }"
  >
    <div
      class="me-three-front"
      :style="{
      width: width+'px',
      height: height+'px',
    }"
    >
      <slot name="front"></slot>
    </div>
    <div
      class="me-three-back"
      :style="{
      width:width+'px',
      height:height+'px',
      transform: 'rotateY(-180deg) translateZ('+deep+'px)'
    }"
    >
      <slot name="back"></slot>
    </div>
    <div
      class="me-three-top"
      :style="{
      width: width+'px',
      height: deep+'px',
      transform: 'rotateX(90deg) translateZ('+deep/2+'px) translateY('+(-deep/2)+'px)'
    }"
    >
      <slot name="top"></slot>
    </div>
    <div
      class="me-three-bottom"
      :style="{
      width: width+'px',
      height: deep+'px',
      transform: 'rotateX(-90deg) translateZ('+(height - deep/2)+'px) translateY('+(deep/2)+'px)'
    }"
    >
      <slot name="bottom"></slot>
    </div>
    <div
      class="me-three-left"
      :style="{
      width: deep+'px',
      height: height+'px',
      transform: 'rotateY(-90deg) translateZ('+(deep/2)+'px) translateX('+(-deep/2)+'px)'
    }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="me-three-right"
      :style="{
      width:deep+'px',
      height: height+'px',
      transform: 'rotateY(90deg) translateZ('+(width - deep/2)+'px) translateX('+(deep/2)+'px)'
    }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeThree",
  components: {},
  data() {
    return {
      perspective: 1000,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    };
  },
  props: {
    width: {
      default: 100
    },
    height: {
      default: 100
    },
    deep: {
      default: 100
    }
  },
  computed: {},
  methods: {
    evalString(code) {
    console.log(this.rotateX, this.rotateY, this.rotateZ);
      eval(code);
    },
    rollBack(flag) {
      var _rotateX = this.rotateX;
      while (_rotateX < 0) {
        _rotateX = _rotateX + 360;
      }
      switch (flag) {
        case "left":
          if (_rotateX % 360 == 0) {
            this.rotateY = this.rotateY + 90;
          } else if (_rotateX % 270 == 0) {
            this.rotateZ = this.rotateZ + 90;
          } else if (_rotateX % 180 == 0) {
            this.rotateY = this.rotateY - 90;
          } else if (_rotateX % 90 == 0) {
            this.rotateZ = this.rotateZ - 90;
          }
          break;
        case "right":
          if (_rotateX % 360 == 0) {
            this.rotateY = this.rotateY - 90;
          } else if (_rotateX % 270 == 0) {
            this.rotateZ = this.rotateZ - 90;
          } else if (_rotateX % 180 == 0) {
            this.rotateY = this.rotateY + 90;
          } else if (_rotateX % 90 == 0) {
            this.rotateZ = this.rotateZ + 90;
          }
          break;
        case "top":
          this.rotateX = this.rotateX - 90;
          break;
        case "bottom":
          this.rotateX = this.rotateX + 90;
          break;
        default:
          console.error("错误参数,请选择:left/right/top/bottom");
      }
      console.log(this.rotateX, this.rotateY, this.rotateZ);
    }
  },
  mounted() {
    console.log(this.rotateX, this.rotateY, this.rotateZ);
  }
};
</script>

<style lang="scss">
.me-three {
  $width: 120px;
  $height: 160px;
  $deep: 200px;
  display: inline-block;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 60px;
    color: #fff;
  }
  & > .me-three-top {
    background: rgba(210, 210, 0, 0.7);
  }
  & > .me-three-bottom {
    background: rgba(210, 0, 210, 0.7);
  }
  & > .me-three-left {
    background: rgba(0, 0, 210, 0.7);
  }
  & > .me-three-right {
    background: rgba(210, 0, 0, 0.7);
  }
  & > .me-three-front {
    background: rgba(90, 90, 90, 0.7);
  }
  & > .me-three-back {
    background: rgba(0, 210, 0, 0.7);
  }
}
</style>
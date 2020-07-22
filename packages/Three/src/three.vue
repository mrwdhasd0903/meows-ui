<template>
  <div class="me-three" ref="thisthree" :style="{
    width:width+'px',
    height:height+'px'
  }">
    <div class="me-three-sides">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeThree",
  components: {},
  data() {
    return {
      rollBackLock: false,
      currAction: null
    };
  },
  props: {
    width: {
      required: true
    },
    height: {
      required: true
    },
    actions: {
      type: Array
    },
    delay: {
      type: [Number, String],
      default: 3000
    }
  },
  computed: {},
  methods: {
    rollBack(flag) {
      if (this.rollBackLock) return;
      this.rollBackLock = true;
      var shape = this.$refs.thisthree;
      if(!shape){return}
      var sides = shape.firstChild;
      var sideArr = new Array(...sides.children);

      var activeObj = {
        activeNode: null,
        activeIndex: null
      };
      sideArr.forEach((node, i) => {
        if (node.className.indexOf("me-side-active") != -1) {
          activeObj.activeNode = node;
          activeObj.activeIndex = i;
        }
      });
      var nextNode = this.getNextNode(sideArr, activeObj.activeIndex);

      var separateChildWidth = this.width / 2;
      var separateChildHeight = this.height / 2;

      var styleMap = {
        sides: {
          right:
            "translateX(0px) translateZ(-" +
            separateChildWidth +
            "px) rotateY(-90deg)",
          left:
            "translateX(0px) translateZ(-" +
            separateChildWidth +
            "px) rotateY(90deg)",
          top:
            "translateY(0px) translateZ(-" +
            separateChildHeight +
            "px) rotateX(-90deg)",
          bottom:
            "translateY(0px) translateZ(-" +
            separateChildHeight +
            "px) rotateX(90deg)"
        },
        nextNode: {
          right: "rotateY(90deg) translateZ(" + separateChildWidth + "px)",
          left: "rotateY(-90deg) translateZ(" + separateChildWidth + "px)",
          top: "rotateX(90deg) translateZ(" + separateChildHeight + "px)",
          bottom: "rotateX(-90deg) translateZ(" + separateChildHeight + "px)"
        }
      };

      //star
      shape.classList.add("me-animating");

      //--from map
      sides.style.transform = styleMap.sides[flag];

      activeObj.activeNode.classList.add("hidden");
      activeObj.activeNode.style.transform =
        "rotateY(0deg) translateZ(" +
        (flag == "top" || flag == "bottom"
          ? separateChildHeight
          : separateChildWidth) +
        "px)";

      //--from map
      nextNode.classList.add("me-animating");
      nextNode.style[flag == "top" || flag == "bottom" ? "top" : "left"] = 0;
      nextNode.style.transform = styleMap.nextNode[flag];
      //stop
      setTimeout(() => {
        shape.classList.remove("me-animating");

        sides.style.transform = null;

        activeObj.activeNode.classList.remove("hidden");
        activeObj.activeNode.style.transform = null;

        nextNode.classList.remove("me-animating");
        nextNode.style[
          flag == "top" || flag == "bottom" ? "top" : "left"
        ] = null;
        nextNode.style.transform = null;

        this.nextActive(sideArr, activeObj.activeIndex);
        this.rollBackLock = false;
      }, 500);
    },
    //获取Active的下个结点
    getNextNode(nodeList, index) {
      return nodeList[index + 1] ? nodeList[index + 1] : nodeList[0];
    },
    //Active的转换
    nextActive(nodeList, index) {
      nodeList[index].classList.remove("me-side-active");
      if (!nodeList[index + 1]) {
        nodeList[0].classList.add("me-side-active");
        return {
          activeNode: nodeList[0],
          activeIndex: 0
        };
      } else {
        nodeList[index + 1].classList.add("me-side-active");
        return {
          activeNode: nodeList[index + 1],
          activeIndex: index + 1
        };
      }
    }
  },
  mounted() {
    //检查有无active
    var sideArr = new Array(...this.$refs.thisthree.firstChild.children);
    var count = 0;
    for (let item of sideArr) {
      if (item.className.indexOf("me-side-active") != -1) {
        break;
      } else {
        count++;
      }
    }
    if (count == sideArr.length) {
      sideArr[0].classList.add("me-side-active");
    }
    //检查有无actions
    if (this.actions) {
      this.currAction = 0;
    }
    if (this.actions) {
      setInterval(() => {
        this.rollBack(this.actions[this.currAction]);
        this.currAction = this.actions[this.currAction + 1]
          ? this.currAction + 1
          : 0;
      }, this.delay);
    }
  }
};
</script>

<style lang="scss">
.me-three {
  position: relative;
  vertical-align: top;
  display: inline-block;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  -webkit-transition: left 0.6s ease-in-out, width 0.6s ease-in-out,
    height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: left 0.6s ease-in-out, width 0.6s ease-in-out,
    height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out,
    width 0.6s ease-in-out, height 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out,
    width 0.6s ease-in-out, height 0.6s ease-in-out,
    -webkit-transform 0.6s ease-in-out;
}

.me-three .me-three-sides {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.me-three .me-side-active.me-side {
  display: block;
}

.me-three .me-side {
  display: none;
  opacity: 1;
  width: 100%;
  margin: 0 !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.me-three .me-side * {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

.me-three .me-animating.me-side {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 100;
}

.me-three.me-animating .me-three-sides {
  -webkit-transition: left 0.6s ease-in-out, width 0.6s ease-in-out,
    height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: left 0.6s ease-in-out, width 0.6s ease-in-out,
    height 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out,
    width 0.6s ease-in-out, height 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out,
    width 0.6s ease-in-out, height 0.6s ease-in-out,
    -webkit-transform 0.6s ease-in-out;
}

.me-three.me-animating .me-side {
  -webkit-transition: opacity 0.6s ease-in-out;
  transition: opacity 0.6s ease-in-out;
}

.me-three .me-side-active.me-side {
  display: block;
}

.me-three .hidden.me-side {
  opacity: 0.6;
}
</style>
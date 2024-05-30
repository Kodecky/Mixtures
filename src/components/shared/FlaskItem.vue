<template>
  <div 
    class="flask animate__animated animate__faster"
    :class="{ 'animate__shakeY': isAnimated }"
    :style="flaskStyle"
    @animationend="isAnimated = false" >

    <!-- decrement btn -->
    <button-item
      v-if="buttonsVisible"
      class="flask__btn flask__btn--left"
      icon="pi-angle-down"
      @click="handleClick('decrement')" />

    <div
      :class="fillClasses"
      :style="fillStyle" />

    <!-- remove btn -->
    <button-item
      v-if="btnRemoveVisible"
      class="flask__btn flask__btn--remove"
      icon="pi-trash"
      :movement="-0.5" />

    <!-- increment btn -->
    <button-item
      v-if="buttonsVisible"
      class="flask__btn flask__btn--right"
      icon="pi-angle-up"
      :movement="-0.5"
      @click="handleClick('increment')" />
  </div>

</template>

<script>
import ButtonItem from './ButtonItem'

export default {
  name: 'FlaskItem',
  props: {
    size: {
      type: Number,
      default: 10
    },
    amount: {
      type: Number,
      default: 50
    },
    color: {
      type: String
    },
    variant: {
      type: String
    },
    buttonsVisible: {
      type: Boolean,
      default: true
    },
    btnRemoveVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isAnimated: false
    }
  },
  computed: {
    flaskStyle () {
      return {
        height: `${this.size}rem`,
        width: `${this.size}rem`
      }
    },

    fillClasses () {
      return [
        'flask__fill',
        (this.variant) && `flask__fill--${this.variant}`
      ]
    },

    fillStyle () {
      const style = { height: this.amount + '%' }

      if (!this.variant) {
        style.backgroundColor = this.color || '#fff'
      }

      return style
    }
  },
  components: {
    ButtonItem
  },
  methods: {
    handleClick(action) {
      this.addAnim()
      this.$emit(action)
    },
    addAnim () {
      this.isAnimated = true
    }
  }
}
</script>

<style lang="scss" scoped>
.flask {
  display: block;
  border: 10px solid #ddd;
  border-radius: 50%;
  margin: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);

  &__fill {
    width: 100%;
    height: 100%;
    transition: .2s;

    &--red {
      background-color: $flask-light-red;
      background-image: linear-gradient(189deg, $flask-light-red 0%, $flask-dark-red 74%);
    }

    &--green {
      background-color: $flask-dark-green;
      background-image: linear-gradient(0deg, $flask-dark-green 0%, $flask-light-green 100%);
    }

    &--blue {
      background-color: $flask-dark-blue;
      background-image: linear-gradient(183deg, $flask-dark-blue 0%, $flask-light-blue 100%);
    }

  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9a9a9a;
    background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
    opacity: 0.2;
  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--right {
      right: 1rem;
    }

    &--left {
      left: 1rem;
    }

    &--remove {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

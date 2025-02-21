<script lang="ts">
import { PropType } from "vue";
import type { Option } from "@/interfaces.ts";

export default {
  name: "RatingFieldEdit",
  props: {
    modelValue: Object as PropType<Option>,
    field: Object as PropType<{ options: Array<Option> }>,
  },
  data() {
    return {
      active: null as Option
    }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    'update:modelValue': (value: Option) => true
  },
  computed: {
    value: {
      get(): Option | undefined {
        return this.modelValue;
      },
      set(value: User) {
        this.$emit('update:modelValue', value);
      }
    },
    currentIndex() {
      if (this.field?.options && this.value) {
        return this.field.options.findIndex((o: Option) => o.id == this.value?.id);
      }

      return -1;
    },
    activeIndex() {
      if (this.field?.options && this.active) {
        return this.field.options.findIndex((o: Option) => o.id == this.active?.id);
      }

      return -1;
    },
    displayIndex() {
      if (this.activeIndex > -1) {
        return this.activeIndex;
      }
      if (this.currentIndex > -1) {
        return this.currentIndex;
      }
    }
  },
  methods: {
    hoverOpt(opt) {
      this.active = opt;
    },
    setValue(opt) {
      console.log(opt);
      this.value = opt;
      console.log(this.value);
    },
    unHoverOpt(opt) {
      this.active = null;
    }
  }
}
</script>

<template>
  <div class="rating-customfield rating-customfield-edit">
    <div class="star" @click="setValue(opt)" :class="[(idx <= displayIndex)? 'icon-star-full': 'icon-star-empty']" @mouseenter="hoverOpt(opt)" @mouseleave="unHoverOpt(opt)" v-for="(opt, idx) in field?.options" :key="opt.id"></div>
    <div class="icon-cancel-circle" @click="setValue(null)"></div>
    <div class="label" v-if="displayIndex > -1">{{ field.options[displayIndex].name }}</div>
  </div>
</template>

<style lang="scss">
  @import "@/accets/rating.scss";

  .rating-customfield.rating-customfield-edit {
    .icon-cancel-circle:hover {
      color: red;
      cursor: pointer;
    }
  }
</style>
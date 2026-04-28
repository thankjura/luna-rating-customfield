<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import type { Option } from "luna";

defineOptions({
  name: "RatingFieldEdit",
})

const props = defineProps({
  field: Object as PropType<{options: Array<Option<number>>}>,
})

const value = defineModel<Option<number>>();
const active = ref<Option<number>>(null);


const currentIndex = computed(() => {
  if (props.field?.options && value.value) {
    return props.field.options.findIndex((o: Option<number>) => o.id == value.value?.id);
  }

  return -1;
});

const activeIndex = computed(() => {
  if (props.field?.options && active.value) {
    return props.field.options.findIndex((o: Option<number>) => o.id == active.value?.id);
  }

  return -1;
});

const displayIndex = computed(() => {
  if (activeIndex.value > -1) {
    return activeIndex.value;
  }
  if (currentIndex.value > -1) {
    return currentIndex.value;
  }

  return -1;
});

const hoverOpt = (opt: Option<number>) => {
  active.value = opt;
}

const setValue = (opt: Option<number>) => {
  value.value = opt;
}

const unHoverOpt = () => {
  active.value = null;
}

</script>

<template>
  <div class="rating-customfield rating-customfield-edit">
    <div class="star" @click="setValue(opt)" :class="[(idx <= displayIndex)? 'icon-star-full': 'icon-star-empty']" @mouseenter="hoverOpt(opt)" @mouseleave="unHoverOpt()" v-for="(opt, idx) in field?.options" :key="opt.id"></div>
    <div class="icon-cancel-circle" @click="setValue(null)"></div>
    <div class="label" v-if="displayIndex > -1 && field">{{ field.options[displayIndex].name }}</div>
  </div>
</template>

<style lang="scss">
  @use "@/accets/rating.scss" as *;

  .rating-customfield.rating-customfield-edit {
    min-height: var(--input-height);
    padding-bottom: 5px;

    .icon-cancel-circle:hover {
      color: red;
      cursor: pointer;
    }
  }
</style>
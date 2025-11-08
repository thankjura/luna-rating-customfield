<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { Option } from "../interfaces.ts";

defineOptions({
  name: "RatingFieldView",
})

const props = defineProps({
  value: Object as PropType<Option>,
  field: Object as PropType<{ options: Array<Option> }>
})

const starIndex = computed(() => {
  if (props.field?.options && props.value) {
    return props.field.options.findIndex((o: Option) => o.id == props.value?.id);
  }

  return -1;
});

</script>

<template>
  <div class="rating-customfield" :title="value?.name">
    <div class="star" :class="[(idx <= starIndex)? 'icon-star-full': 'icon-star-empty']"  v-for="(opt, idx) in field?.options" :key="opt.id"></div>
  </div>
</template>

<style lang="scss">
  @use "@/accets/rating.scss" as *;
</style>
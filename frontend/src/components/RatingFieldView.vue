<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { Option } from "luna";

const props = defineProps({
  value: Object as PropType<Option<number>>,
  viewParams: Object as PropType<{ options: Array<Option<number>> }>
});

const starIndex = computed(() => {
  if (props.viewParams?.options && props.value) {
    return props.viewParams.options.findIndex((o: Option<number>) => o.id == props.value?.id);
  }

  return -1;
});

</script>

<template>
  <div class="rating-customfield" :title="value?.name">
    <div class="star" :class="[(idx <= starIndex)? 'icon-star-full': 'icon-star-empty']"  v-for="(opt, idx) in viewParams?.options" :key="opt.id"></div>
  </div>
</template>

<style lang="scss">
  @use "@/accets/rating.scss" as *;
</style>
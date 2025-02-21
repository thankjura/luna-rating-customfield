<script lang="ts">
import type { PropType } from "vue";
import type { Option } from "../interfaces.ts";

export default {
  name: "RatingFieldView",
  props: {
    value: Object as PropType<Option>,
    field: Object as PropType<{ options: Array<Option> }>
  },
  computed: {
    starIndex() {
      if (this.field?.options && this.value) {
        return this.field.options.findIndex((o: Option) => o.id == this.value?.id);
      }

      return -1;
    }
  },
}
</script>

<template>
  <div class="rating-customfield" :title="value?.name">
    <div class="star" :class="[(idx <= starIndex)? 'icon-star-full': 'icon-star-empty']"  v-for="(opt, idx) in field?.options" :key="opt.id"></div>
  </div>
</template>

<style lang="scss">
  @import "@/accets/rating.scss";
</style>
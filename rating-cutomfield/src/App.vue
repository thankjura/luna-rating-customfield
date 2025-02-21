<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      value: {id: "4", name: "Хорошо"},
      options: [
        {id: "1", name: "Ужасно"},
        {id: "2", name: "Плохо"},
        {id: "3", name: "Нормально"},
        {id: "4", name: "Хорошо"},
        {id: "5", name: "Отлично"},
      ],
    }
  }
});

</script>

<template>
  <div>
    <RatingFieldView :value="value" :field="{options: options}"></RatingFieldView>
  </div>
  <div>
    <RatingFieldEdit v-model="value" :field="{options: options}"></RatingFieldEdit>
  </div>
</template>

<style>
  @import "accets/style.css";
</style>

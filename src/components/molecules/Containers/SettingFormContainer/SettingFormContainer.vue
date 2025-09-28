<template>
  <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <Text
          size="lg"
          weight="medium"
          color="gray-900"
          class="leading-6"
          :content="title"
        /><br />
        <Text size="sm" color="gray-500" class="mt-1" :content="description" />
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
     * title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * description
     */
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

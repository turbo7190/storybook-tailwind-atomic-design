
<template>
  <div>
    <Text
      size="sm"
      weight="medium"
      color="gray-900"
      :content="title"
    />
    <div
      class="mt-6"
      aria-hidden="true"
    >
      <div class="bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-2 bg-primary-600 rounded-full"
          style="width: 37.5%"
        />
      </div>
      <div class="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
        <Text
          v-for="(step, i) in steps"
          :key="i"
          :content="step"
          :color="currentStep >= i ? 'primary-600' : 'gray-600'"
          :class="[!(i === 0 || i === (steps.length - 1)) && 'text-center', i === steps.length -1 && 'text-right']"
        />
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
     * steps list
     */
    steps: {
      type: Array,
      default: () => [],
    },
    /**
     * current step index
     */
    currentStep: {
      type: Number,
      default: 0,
    },
    /**
     * title
     */
    title: {
      type: String,
      default: "",
    },
  },
};
</script>


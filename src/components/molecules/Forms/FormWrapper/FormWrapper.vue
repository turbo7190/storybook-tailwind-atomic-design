<template>
  <div class="mb-4">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
    >
      <div class="font-medium text-sm pb-2">
        {{ label }} <span v-if="required" class="text-red-700">*</span>
      </div>
      <div v-if="helpText" class="text-sm text-gray-500 mt-1">
        {{ helpText }}
      </div>
    </label>
    <div class="mt-1 sm:mt-0">
      <slot></slot>
    </div>
    <div v-if="error" class="mt-1 text-sm text-red-600">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

/**
 * - Use it for form wrapper
 */
export default {
  name: "FormWrapper",
  props: {
    label: {
      type: String,
      default: "",
    },
    helpText: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const computedInputId = computed(() => {
      return (
        props.inputId || `input-${Math.random().toString(36).substr(2, 9)}`
      );
    });

    return {
      inputId: computedInputId,
    };
  },
};
</script>

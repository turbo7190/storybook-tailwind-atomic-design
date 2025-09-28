<template>
  <SwitchGroup as="div" class="flex items-center justify-between">
    <span class="flex-grow flex flex-col">
      <SwitchLabel
        as="span"
        class="text-sm font-medium text-gray-900"
        passive
        >{{ label }}</SwitchLabel
      >
      <SwitchDescription as="span" class="text-sm text-gray-500">{{
        description
      }}</SwitchDescription>
    </span>
    <Simple v-model="enabled" />
  </SwitchGroup>
</template>

<script>
import { SwitchDescription, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import Simple from "../Simple/Simple.vue";

/**
 * - Use when show toggle form with label and description
 */
export default {
  components: {
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    Simple,
  },
  props: {
    /**
     * Use to get dynamic value of toggle form
     */
    value: {
      type: Boolean,
      default: false,
    },
    /**
     * Use to show what its for.
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Use to show description
     */
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    enabled: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

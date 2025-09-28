<template>
  <Switch
    :checked="enabled"
    @click="onChange"
    :class="[
      enabled ? 'bg-' + enableBg : 'bg-' + disableBg,
      'focus:ring-' + focusBorderColor,
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
    ]"
  >
    <span class="sr-only">{{ label }}</span>
    <span
      aria-hidden="true"
      :class="[
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    />
  </Switch>
</template>

<script>
import { Switch } from "@headlessui/vue";

/**
 * - Use when show toggle without showing the label
 */
export default {
  components: {
    Switch,
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
     * Use to change enabled background color
     */
    enableBg: {
      type: String,
      default: "primary-600",
    },
    /**
     * Use to change disabled background color
     */
    disableBg: {
      type: String,
      default: "gray-200",
    },
    /**
     * Use to change focus border color
     */
    focusBorderColor: {
      type: String,
      default: "primary-500",
    },
  },
  data() {
    return {
      enabled: this.value,
    };
  },
  methods: {
    onChange() {
      this.enabled = !this.enabled;
      this.$emit("update:value", this.enabled);
    },
  },
};
</script>

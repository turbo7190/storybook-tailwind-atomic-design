<template>
  <Switch
    @click="onChange"
    :checked="enabled"
    class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="'focus:ring-' + focusBorderColor"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      class="pointer-events-none absolute bg-white w-full h-full rounded-md"
    />
    <span
      aria-hidden="true"
      :class="[
        enabled ? 'bg-' + enableBg : 'bg-' + disableBg,
        'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200',
      ]"
    />
    <span
      aria-hidden="true"
      :class="[
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200',
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

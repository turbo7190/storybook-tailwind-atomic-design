<template>
  <Switch
    :checked="enabled"
    @change="onChange"
    :class="[
      enabled ? 'bg-' + enableBg : 'bg-' + disableBg,
      'focus:ring-' + focusBorderColor,
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    >
      <span
        :class="[
          enabled
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <Icon
          :is-outline="false"
          :name="disableIcon"
          size="3"
          color="gray-400"
        />
      </span>
      <span
        :class="[
          enabled
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <Icon
          :is-outline="false"
          :name="enableIcon"
          size="3"
          color="primary-600"
        />
      </span>
    </span>
  </Switch>
</template>

<script>
import { Switch } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";

/**
 * - Use it when show toggle with icons
 * - enableIcon and disableIcon are required.
 */
export default {
  components: {
    Switch,
    Icon,
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
     * Use to show icon in enabled status
     */
    enableIcon: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Use to show icon in disabled status
     */
    disableIcon: {
      type: String,
      default: "",
      required: true,
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

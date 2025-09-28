<template>
  <div class="flex flex-col flex-1">
    <div class="flex justify-between">
      <Text
        v-if="label"
        weight="medium"
        size="sm"
        color="gray-700"
        custom-class="block"
        :content="label"
      />
      <Text
        v-if="hint"
        :id="`${id}-optional`"
        size="sm"
        color="gray-500"
        :content="hint"
      />
    </div>
    <div :class="(label || hint) && 'mt-1'" class="w-full">
      <input
        v-if="!isError"
        :id="id"
        v-model="inputValue"
        v-mask="inputMask"
        :class="customClass"
        :type="type"
        :name="name"
        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        :placeholder="placeholder"
        @input="$emit('update:value', $event.target.value)"
      />
      <input
        v-else
        :id="id"
        v-model="inputValue"
        v-mask="inputMask"
        :class="customClass"
        :type="type"
        :name="name"
        class="block w-full pr-10 border px-3 py-2 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
        :placeholder="placeholder"
        aria-invalid="true"
        :aria-describedby="`${name}-error`"
        @input="$emit('update:value', $event.target.value)"
      />
      <div
        v-if="isError"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <Icons name="ExclamationCircleIcon" size="5" color="red-500" />
      </div>
    </div>
    <Text
      v-if="helpText"
      :id="`${name}-description`"
      size="sm"
      :content="helpText"
      class="mt-2"
      :custom-class="isError ? 'text-red-600' : 'text-gray-500'"
    />
  </div>
</template>

<script>
import Icons from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import { mask } from "vue-the-mask";
/**
 * - Use an input to fill out the form with special label, hint, help text
 * - value param is required. and the other params are optional
 */
export default {
  components: {
    Icons,
    Text,
  },
  directives: {
    mask: (el, binding) => {
      if (!binding.value) return;
      mask(el, binding);
    },
  },
  props: {
    /**
     * Use to identify the input form
     */
    id: {
      type: String,
      default: "",
    },
    /**
     * Use to identify the input form. same with id. but it could be a special word or something like that
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * Use to show what input form is
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Placeholder of input form
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use to hint users for input value
     */
    hint: {
      type: String,
      default: "",
    },
    /**
     * Use to help users to fill form out
     */
    helpText: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic form value
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * Use to apply extra class for input form
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Use to specify input type. ex: text, email, number. default will be text.
     */
    type: {
      type: String,
      default: "text",
    },
    /**
     * Use to speciy the input value's format. ex: (###) ###-#### for phone number
     */
    inputMask: {
      type: String,
      default: "",
    },
    /**
     * Use to show whether or not value is valid.
     */
    isError: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inputValue: {
      // getter
      get() {
        return this.value;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

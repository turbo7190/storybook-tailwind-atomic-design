<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Update your email
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>Change the email address you want associated with your account.</p>
      </div>
      <form class="mt-5 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <TextInput :placeholder="placeholder" v-model="inputValue" />
        </div>
        <Button :content="btnText" variant="primary" class="ml-1" />
      </form>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
/**
 * - Use it when show a panel with input
 */
export default {
  components: {
    Button,
    TextInput,
  },
  props: {
    /**
     * Use to show title
     */
    title: {
      type: String,
    },
    /**
     * Use to show description
     */
    description: {
      type: String,
    },
    /**
     * Use for button action
     */
    onClick: {
      type: Function,
    },
    /**
     * Use for input placeholder
     */
    placeholder: {
      type: String,
    },
    /**
     * Use to catch dynamic value of input
     */
    value: {
      type: String,
    },
		/**
		 * Use for button text
		 */
		btnText: {
			type: String,
			default: 'Edit'
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


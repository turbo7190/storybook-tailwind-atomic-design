<template>
	<div class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
		<Text color="gray-900" weight="medium" size="lg" :content="title"/>
		<div class="mt-3 sm:mt-0 sm:ml-4">
			<input-with-icon-and-button :btnIcon="btnIcon" :btnText="btnText" :leadIcon="leadIcon" v-model="inputValue" :placeholder="placeholder"/>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import InputWithIconAndButton from '../../../molecules/Inputs/InputWithLeadingIconAndTrailingButton/InputWithLeadingIconAndTrailingButton.vue'
/**
 * - Use it to show section header with input group
 */
export default {
  components: {
    Text, Icon, InputWithIconAndButton
  },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
      default: 'Job posting'
    },
    /**
     * Placeholder of input form
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it to apply extra class to input form
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic value of input form
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * Use to show leading icon. required.
     */
    leadIcon: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Use to show button icon. required.
     */
    btnIcon: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Use to show button label. required.
     */
    btnText: {
      type: String,
      default: "",
      required: true,
    },
  },
	computed: {
    inputValue: {
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

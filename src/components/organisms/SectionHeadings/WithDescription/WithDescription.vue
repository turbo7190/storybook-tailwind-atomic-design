<template>
	<div class="pb-5 border-b border-gray-200">
		<Text color="gray-900" weight="medium" size="lg" :content="title"/>
		<Text color="gray-500" size="sm" class="mt-2 max-w-4xl" :content="description"/>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show simple section header with description
 */
export default {
  components: {
    Text,
  },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
      default: ''
    },
		/**
     * Use it to show title
     */
    description: {
      type: String,
      default: ''
    },
  },
};
</script>
<template>
	<div class="pb-5 border-b border-gray-200">
		<Text color="gray-900" weight="medium" size="lg" :content="title"/>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show simple section header
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
      default: 'Job posting'
    },
  },
};
</script>
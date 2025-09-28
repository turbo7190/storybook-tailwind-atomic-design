<template>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <Text color="gray-900" weight="medium" size="lg" :content="title"/>
  </div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show simple card header
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


<template>
  <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
    <div class="mt-2 flex items-center" v-for="(item, i) in meta" :key="i">
      <Icon :name="item.icon" size="5" color="gray-400" class="flex-shrink-0 mr-1.5" />
      <Text size="sm" color="gray-500" :content="item.title"/>
    </div>
  </div>
</template>

<script>
import Icon from '../../atoms/Icons/Icons.vue'
import Text from '../../atoms/Text/Text.vue'
/**
 * - Use it to show a simple meta list with icons
 */
export default {
  components: {
		Icon, Text
	},
  props: {
    /**
     * use it for meta list
     */
    meta: {
      type: Array,
      default: () => []
    }
  },
}
</script>


<template>
  <div class="h-screen overflow-scroll py-12 bg-white">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="item in items" :key="item.name">
          <dt>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
              <Icon :name="item.icon" color="white" isOutline size="6"/>
            </div>
            <Text size='lg' weight="medium" color='gray-900' class="mt-5 leading-6" :content="item.name"/>
          </dt>
          <dd class="mt-2">
            <Text size="base" color="gray-500" class="mt-2" :content="item.description"/>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show simple three column grid feature section
 */
export default {
	components: {
		Text, Icon
	},
	props: {
		/**
		 * use it to show item items
		 */
		items: {
			type: Array,
			default: () => []
		}
	},
}
</script>

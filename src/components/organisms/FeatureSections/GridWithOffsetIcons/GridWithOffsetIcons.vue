
<template>
  <div class="h-screen overflow-scroll relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <Text weight='semibold' color='primary-600' class="tracking-wide uppercase" :content="category"/>
      <Text size='3xl' weight="extrabold" color='gray-900' class="mt-2 leading-8 tracking-tight sm:text-4xl" :content="title"/>
      <Text size='xl' color='gray-500' class="mt-4 max-w-2xl lg:mx-auto" :content="description"/>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in items" :key="item.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg">
                    <Icon :name="item.icon" size="6" color="white" isOutline/>
                  </span>
                </div>
                <Text size='lg' weight="medium" color='gray-900' class="mt-8 tracking-tight" :content="item.name"/>
                <Text size="base" color="gray-500" class="mt-5" :content="item.description"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show grid feature sections with offset icons
 */
export default {
	components: {
		Text, Icon
	},
	props: {
		/**
		 * use it to show title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * use it to show description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * use it to show category
		 */
		category: {
			type: String,
			default: ''
		},
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

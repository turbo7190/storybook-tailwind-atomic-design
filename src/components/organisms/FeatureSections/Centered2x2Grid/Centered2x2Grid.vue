<template>
	<div class="h-screen overflow-scroll py-12 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<Text weight='semibold' color='primary-600' class="tracking-wide uppercase" :content="category"/>
				<Text size='3xl' weight="extrabold" color='gray-900' class="mt-2 leading-8 tracking-tight sm:text-4xl" :content="title"/>
				<Text size='xl' color='gray-500' class="mt-4 max-w-2xl lg:mx-auto" :content="description"/>
			</div>
			<div class="mt-10">
				<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
					<div v-for="item in items" :key="item.name" class="relative">
						<dt>
							<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
								<Icon :name="item.icon" size="6" color="white" isOutline/>
							</div>
							<Text size='lg' weight="medium" color='gray-900' class="ml-16 leading-6" :content="item.name"/>
						</dt>
						<dd class="mt-2 ml-16">
							<Text size="base" color="gray-500" :content="item.description"/>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show centered 2x2 grid feature sections
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

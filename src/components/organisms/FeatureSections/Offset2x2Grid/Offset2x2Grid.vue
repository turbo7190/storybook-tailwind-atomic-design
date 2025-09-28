<template>
	<div class="h-screen overflow-scroll bg-gray-50 overflow-hidden">
		<div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<svg
					class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
					width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
				<defs>
					<pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20"
									 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"/>
			</svg>

			<div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
				<div class="lg:col-span-1">
					<Text size='3xl' weight="extrabold" color='gray-900' class="tracking-tight sm:text-4xl" :content="title"/>
				</div>
				<dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
					<div v-for="item in items" :key="item.name">
						<dt>
							<div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
								<Icon :name="item.icon" size="6" color="white" isOutline/>
							</div>
							<Text size='lg' weight="medium" color='gray-900' class="mt-5 leading-6" :content="item.name"/>
						</dt>
						<dd>
							<Text size="base" color="gray-500" class="mt-2" :content="item.description"/>
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
 * - Use it to show offset 2x2 grid feature section
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
		 * use it to show item items
		 */
		items: {
			type: Array,
			default: () => []
		}
	},
}
</script>

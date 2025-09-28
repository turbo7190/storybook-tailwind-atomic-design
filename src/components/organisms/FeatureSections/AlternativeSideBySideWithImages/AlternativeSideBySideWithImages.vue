<template>
	<div class="h-screen overflow-scroll py-16 bg-gray-50 overflow-hidden lg:py-24">
		<div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
			<svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404"
					 height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
				<defs>
					<pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
									 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
			</svg>

			<div class="relative">
				<Text size="3xl" weight="extrabold" color="gray-900" class="tracking-tight text-center leading-8 sm:text-4xl" :content="title"/>
				<Text size="xl" color="gray-500" class="mt-4 max-w-3xl mx-auto text-center" :content="description"/>
			</div>

			<div v-for="(item, i) in items" :key="i" class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center" :class="i % 2 === 1 && 'lg:grid lg:grid-flow-row-dense'">
				<div class="relative" :class="i % 2 === 1 && 'lg:col-start-2'">
					<Text size="2xl" weight="extrabold" color="gray-900" class="tracking-tight sm:text-3xl" :content="item.title"/>
					<Text size="lg" color="gray-500" class="mt-3" :content="item.description"/>
					<dl class="mt-10 space-y-10">
						<div v-for="subItem in item.subItems" :key="subItem.id" class="relative">
							<dt>
								<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500">
									<Icon :name="subItem.icon" size="6" color="white" isOutline/>
								</div>
								<Text size="lg" weight="medium" color="gray-900" class="ml-16 leading-6" :content="subItem.name"/>
							</dt>
							<dd class="mt-2 ml-16">
								<Text size="base" color="gray-500" :content="subItem.description"/>
							</dd>
						</div>
					</dl>
				</div>

				<div class="mt-10 -mx-4 relative lg:mt-0" :class="i % 2 === 1 && 'lg:col-start-1'" aria-hidden="true">
					<svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404"
							 fill="none" viewBox="0 0 784 404">
						<defs>
							<pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20"
											 patternUnits="userSpaceOnUse">
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
							</pattern>
						</defs>
						<rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"/>
					</svg>
					<img class="relative mx-auto" width="490" :src="item.screenshot"
							 alt=""/>
				</div>
			</div>

			<svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784"
					 fill="none" viewBox="0 0 404 784" aria-hidden="true">
				<defs>
					<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
									 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
			</svg>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show alternative side by side feature sections with images
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
		 * use it to show item items
		 */
		items: {
			type: Array,
			default: () => []
		}
	},
}
</script>

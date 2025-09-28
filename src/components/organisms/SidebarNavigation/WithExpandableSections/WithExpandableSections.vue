<template>
	<div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
		<div class="flex items-center flex-shrink-0 px-4">
			<img class="h-8 w-auto" :src="logo" alt=""/>
		</div>
		<div class="mt-5 flex-grow flex flex-col">
			<nav class="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
				<template v-for="item in navigation" :key="item.name">
					<div v-if="!item.children">
						<Link :url="item.href" size="sm" :weight="'medium'" :content="item.name" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-7 pr-2 py-2 rounded-md']"/>
					</div>
					<Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
						<DisclosureButton
								:class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500']">
							<svg
									:class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']"
									viewBox="0 0 20 20" aria-hidden="true">
								<path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>
							</svg>
							{{ item.name }}
						</DisclosureButton>
						<DisclosurePanel class="space-y-1">
							<DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group w-full flex items-center pl-10 pr-2 py-2 rounded-md hover:bg-gray-50">
								<Text size="sm" weight="medium" color="gray-600" :content="subItem.name" class="hover:text-gray-900"/>
							</DisclosureButton>
						</DisclosurePanel>
					</Disclosure>
				</template>
			</nav>
		</div>
	</div>
</template>

<script>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import Text from '../../../atoms/Text/Text.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show a sidebar navigation with expandable sections
 */
export default {
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Text,
		Link,
	},
	props: {
		/**
		 * Use it to show logo
		 */
		logo: {
			type: String,
			default: ''
		},
		/**
		 * Use it to show navigation list
		 */
		navigation: {
			type: Array,
			default: () => []
		},
	},
}
</script>

<template>
	<Popover class="relative" v-slot="{ open }">
		<PopoverButton class="group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
			<Text weight="medium" :color="open ? 'gray-900' : 'gray-500'" :content="label" class="hover:text-gray-900"/>
			<Icon name="ChevronDownIcon" size="5" :color="open ? 'gray-600' : 'gray-400'" class="ml-2 group-hover:text-gray-500"/>
		</PopoverButton>

		<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
								enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
								leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
			<PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
				<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
						<a v-for="item in list1" :key="item.name" :href="item.href"
							 class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
							<Icon :name="item.icon" isOutline size="6" color="primary-600" class="flex-shrink-0"/>
							<div class="ml-4">
								<Text size="base" weight="medium" color="gray-900" :content="item.name"/>
								<Text size="sm" weight="normal" color="gray-500" class="mt-1" :content="item.description"/>
							</div>
						</a>
					</div>
					<div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
						<div>
							<Text size="sm" weight="medium" color="gray-500" class="tracking-wide uppercase" :content="secondListLabel"/>
							<ul role="list" class="mt-4 space-y-4">
								<li v-for="post in list2" :key="post.id" class="text-base truncate">
									<Link :url="post.href" weight="medium" color="gray-900" class="hover:text-gray-700 transition ease-in-out duration-150" :content="post.name"/>
								</li>
							</ul>
						</div>
						<div class="mt-5">
							<Link size="sm" weight="medium" color="primary-600" hoverColor="primary-400" class="mt-2 lg:mt-4" :content="linkText + ' &rarr;'"/>
						</div>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show a stacked flyout menu with footer list
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
		Icon, Text, Link
	},
	props: {
		/**
		 * Use it for menu label
		 */
		label: {
			type: String,
			default: 'Solutions'
		},
		/**
		 * Use it for menu list 1 items
		 */
		list1: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for menu list 2 items
		 */
		list2: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for menu item link text
		 */
		linkText: {
			type: String,
			default: 'Learn More'
		},
		/**
		 * Use it for second list label
		 */
		secondListLabel: {
			type: String,
			default: 'Recent Posts'
		}
	}
}
</script>

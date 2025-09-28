<template>
	<Popover class="relative" v-slot="{ open }">
		<PopoverButton class="group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
			<Text weight="medium" :color="open ? 'gray-900' : 'gray-500'" :content="label" class="hover:text-gray-900"/>
			<Icon name="ChevronDownIcon" size="5" :color="open ? 'gray-600' : 'gray-400'" class="ml-2 group-hover:text-gray-500"/>
		</PopoverButton>

		<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
								enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
								leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
			<PopoverPanel
					class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
				<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
						<a v-for="item in list" :key="item.name" :href="item.href"
							 class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
							<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
								<Icon :name="item.icon" isOutline size="6" color="white"/>
							</div>
							<div class="ml-4">
								<Text size="base" weight="medium" color="gray-900" :content="item.name"/>
								<Text size="sm" weight="normal" color="gray-500" class="mt-1" :content="item.description"/>
							</div>
						</a>
					</div>
					<div class="p-5 bg-gray-50 sm:p-8">
						<a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
							<span class="flex items-center">
								<Text size="base" weight="medium" color="gray-900" :content="title"/>
								<Badge :label="badgeText" px="3" py="0.5" textSize="xs" textColor="primary-800" bgColor="primary-100" class="ml-3 inline-flex items-center leading-5"/>
							</span>
							<Text size="sm" color="gray-500" :content="description" class="mt-1 block"/>
						</a>
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
import Badge from '../../../molecules/Badge/Basic/Basic.vue'
/**
 * - Use it to show two column flyout menu with solid icons
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
		Icon, Text, Badge
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
		 * Use it for menu list items
		 */
		list: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for footer title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for footer description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for footer badge
		 */
		badgeText: {
			type: String,
			default: ''
		}
	}
}
</script>

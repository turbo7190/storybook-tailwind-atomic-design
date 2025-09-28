<template>
	<Popover class="relative" v-slot="{ open }">
		<PopoverButton class="group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
			<Text weight="medium" :color="open ? 'gray-900' : 'gray-500'" :content="label" class="hover:text-gray-900"/>
			<Icon name="ChevronDownIcon" size="5" :color="open ? 'gray-600' : 'gray-400'" class="ml-2 group-hover:text-gray-500"/>
		</PopoverButton>

		<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
								enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
								leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
			<PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
				<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
						<a v-for="item in list" :key="item.name" :href="item.href"
							 class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
							<Text weight="medium" color="gray-900" :content="item.name"/>
							<Text size="sm" color="gray-500" class="mt-1" :content="item.description"/>
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
/**
 * - Use it to show a simple flyout menu
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
		Icon, Text
	},
	props: {
		/**
		 * Use it to show label
		 */
		label: {
			type: String,
			default: 'Solutions'
		},
		/**
		 * Use it for items
		 */
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

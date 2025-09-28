<template>
	<Popover class="z-0 relative" v-slot="{ open }">
		<div class="relative z-10 bg-white shadow">
			<div class="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
				<PopoverButton class="group bg-white rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
					<Text weight="medium" :color="open ? 'gray-900' : 'gray-500'" :content="label" class="hover:text-gray-900"/>
					<Icon name="ChevronDownIcon" size="5" :color="open ? 'gray-600' : 'gray-400'" class="ml-2 group-hover:text-gray-500"/>
				</PopoverButton>
			</div>
		</div>

		<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1"
								enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
								leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
			<PopoverPanel class="absolute z-10 inset-x-0 transform shadow-lg">
				<div class="bg-white">
					<div
							class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
						<a v-for="item in list1" :key="item.name" :href="item.href"
							 class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
							<div class="flex md:h-full lg:flex-col">
								<div class="flex-shrink-0">
									<div class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 sm:h-12 sm:w-12">
										<Icon :name="item.icon" isOutline color="white" size="6"/>
									</div>
								</div>
								<div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
									<div>
										<Text weight="medium" color="gray-900" :content="item.name"/>
										<Text size="sm" weight="normal" color="gray-500" :content="item.description" class="mt-1"/>
									</div>
									<Link size="sm" weight="medium" color="primary-600" hoverColor="primary-400" class="mt-2 lg:mt-4" :content="linkText + ' &rarr;'"/>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="bg-gray-50">
					<div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
						<div v-for="item in list2" :key="item.name" class="flow-root">
							<a :href="item.href"
								 class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
								<Icon :name="item.icon" size="6" color="gray-400" class="flex-shrink-0" isOutline/>
								<Text weight="medium" color="gray-900" class="ml-3" :content="item.name"/>
							</a>
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
 * - Use it to show a full width flyout menu
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
		Icon, Text, Link,
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
		 * Use it for menu item link text
		 */
		linkText: {
			type: String,
			default: 'Learn More'
		},
		/**
		 * Use it for menu list 1 items
		 */
		list1: {
			type: Array,
		},
		/**
		 * Use it for menu list 2 items
		 */
		list2: {
			type: Array,
		},
	}
}
</script>

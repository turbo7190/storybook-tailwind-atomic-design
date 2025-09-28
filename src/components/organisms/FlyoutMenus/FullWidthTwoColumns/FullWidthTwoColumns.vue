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
				<div class="absolute inset-0 flex" aria-hidden="true">
					<div class="bg-white w-1/2"/>
					<div class="bg-gray-50 w-1/2"/>
				</div>
				<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
					<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
							 aria-labelledby="solutions-heading">
						<div>
							<Text size="sm" weight="medium" color="gray-500" class="tracking-wide uppercase" :content="subHeadingsList[0]"/>
							<ul role="list" class="mt-5 space-y-6">
								<li v-for="(item, i) in list1" :key="i" class="flow-root">
									<a :href="item.href"
										 class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
										<Icon :name="item.icon" size="6" color="gray-400" class="flex-shrink-0" isOutline/>
										<Text weight="medium" color="gray-900" class="ml-3" :content="item.name"/>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<Text size="sm" weight="medium" color="gray-500" class="tracking-wide uppercase" :content="subHeadingsList[1]"/>
							<ul role="list" class="mt-5 space-y-6">
								<li v-for="(item, i) in list1" :key="i" class="flow-root">
									<a :href="item.href"
										 class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
										<Icon :name="item.icon" size="6" color="gray-400" class="flex-shrink-0" isOutline/>
										<Text weight="medium" color="gray-900" class="ml-3" :content="item.name"/>
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
						<div>
							<Text size="sm" weight="medium" color="gray-500" class="tracking-wide uppercase" :content="subHeadingsList[2]"/>
							<ul role="list" class="mt-6 space-y-6">
								<li v-for="post in list3" :key="post.id" class="flow-root">
									<a :href="post.href"
										 class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
										<div class="hidden sm:block flex-shrink-0">
											<img class="w-32 h-20 object-cover rounded-md" :src="post.imageUrl" alt=""/>
										</div>
										<div class="min-w-0 flex-1 sm:ml-8">
											<Text weight="medium" color="gray-900" class="truncate" :content="post.name"/>
											<Text size="sm" weight="medium" color="gray-500" class="mt-1" :content="post.preview"/>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div class="mt-6 text-sm font-medium">
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
 * - Use it to show a full width flyout menu with 2 columns
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
			default: 'View all posts'
		},
		subHeadingsList: {
			type: Array,
			default: () => [
				'Company',
				'Resources',
				'From the blog'
			]
		},
		linkText: {
			type: String,
			default: 'View all posts'
		},
		list1: {
			type: Array,
		},
		list2: {
			type: Array,
		},
		list3: {
			type: Array,
		},
	}
}
</script>

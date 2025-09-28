<template>
	<Disclosure as="header" class="bg-white shadow" v-slot="{ open }">
		<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
			<div class="relative h-16 flex justify-between">
				<div class="relative z-10 px-2 flex lg:px-0">
					<div class="flex-shrink-0 flex items-center">
						<img class="block h-8 w-auto" :src="logo" alt=""/>
					</div>
				</div>
				<div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
					<div class="w-full sm:max-w-xs">
						<TextInput :placeholder="placeholder" :icon="inputIcon"/>
					</div>
				</div>
				<div class="relative z-10 flex items-center lg:hidden">
					<!-- Mobile menu button -->
					<DisclosureButton
							class="rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
						<Icon name="Bars3Icon" size="6" color="gray-400" v-if="!open" class="block"/>
						<Icon name="XMarkIcon" color="gray-400" v-else size="6" class="block"/>
					</DisclosureButton>
				</div>
				<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
					<button type="button"
									class="flex-shrink-0 bg-white rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
						<Icon :name="icon" size="6" color="gray-400" isOutline class="hover:text-gray-500"/>
					</button>

					<!-- Profile dropdown -->
					<Menu as="div" class="flex-shrink-0 relative ml-4">
						<div>
							<MenuButton
									class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
								<Avatar :src="user.avatar" isCircle :username="user.name" size="8"/>
							</MenuButton>
						</div>
						<transition enter-active-class="transition ease-out duration-100"
												enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
												leave-active-class="transition ease-in duration-75"
												leave-from-class="transform opacity-100 scale-100"
												leave-to-class="transform opacity-0 scale-95">
							<MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<MenuItem v-for="(item, i) in menu" :key="i" v-slot="{ active }">
									<Link :content="item.label" :onClick="item.action" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"/>
								</MenuItem>
							</MenuItems>
						</transition>
					</Menu>
				</div>
			</div>
			<nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
				<Link v-for="(item, i) in navigation" :key="i" :content="item.label" :url="item.href" size="sm" weight="medium" :class="['rounded-md py-2 px-3 inline-flex items-center', selected.label === item.label ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900']"/>
			</nav>
		</div>

		<DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
			<div class="pt-2 pb-3 px-2 space-y-1">
				<DisclosureButton as="div" v-for="(item, i) in navigation" :key="i" class="w-full">
					<Link :content="item.label" :url="item.href" weight="medium" :class="['block rounded-md py-2 px-3', selected.label === item.label ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900']"/>
				</DisclosureButton>
			</div>
			<div class="border-t border-gray-200 pt-4 pb-3">
				<div class="px-4 flex items-center">
					<AvatarText size="10" :src="user.avatar" :title="user.name" :subtitle="user.email" :username="user.name" />
					<button type="button"
									class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
						<Icon :name="icon" size="6" isOutline color="gray-400"/>
					</button>
				</div>
				<div class="mt-3 px-2 space-y-1">
					<DisclosureButton as="div" v-for="(item, i) in menu" :key="i" class="w-full">
						<Link :content="item.label" :url="item.href" weight="medium" :class="['px-3 py-2 rounded-md w-full flex flex-1', selected.label === item.label ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900']"/>
					</DisclosureButton>
				</div>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<script>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import TextInput from '../../../molecules/Inputs/InputWithLeadingIcon/InputWithLeadingIcon.vue'
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Link from '../../../atoms/Link/Link.vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'
import Button from '../../../atoms/Button/Button.vue'
import AvatarText from '../../../molecules/Avatar/AvatarText.vue'
/**
 * - Use it to show a navbar with centered search and secondary links
 */
export default {
	components: {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		TextInput,
		Text,
		Icon,
		Link,
		Avatar,
		Button,
		AvatarText
	},
	data() {
		return {
			selected: this.navigation[0]
		}
	},
	props: {
		/**
		 * use it to show logo
		 */
		logo: {
			type: String,
			default: ''
		},
		/**
		 * use it to show navigation list
		 */
		navigation: {
			type: Array,
			default: () => []
		},
		/**
		 * use it to show input placeholder
		 */
		placeholder: {
			type: String,
			default: ''
		},
		/**
		 * use it to show input icon
		 */
		inputIcon: {
			type: String,
			default: ''
		},
		/**
		 * use it to show action icon
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * use it for user object
		 */
		user: {
			type: Object,
			default: () => {}
		},
		/**
		 * use it for menu list
		 */
		menu: {
			type: Array,
			default: () => []
		}
	}
}
</script>

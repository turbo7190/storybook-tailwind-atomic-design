<template>
	<Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
							class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
						<Icon name="Bars3Icon" size="6" color="white" v-if="!open" class="block"/>
						<Icon name="XMarkIcon" color="white" v-else size="6" class="block"/>
					</DisclosureButton>
				</div>
				<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex-shrink-0 flex items-center">
						<img class="block lg:hidden h-8 w-auto" :src="mobileLogo" alt=""/>
						<img class="hidden lg:block h-8 w-auto" :src="desktopLogo" alt=""/>
					</div>
					<div class="hidden sm:block sm:ml-6">
						<div class="flex space-x-4">
							<Link v-for="(item, i) in navigation" :key="i" :content="item.name" :url="item.href" :class="['px-3 py-2 rounded-md text-sm', selected.name === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"/>
						</div>
					</div>
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<button type="button"
									class="bg-gray-800 p-1 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
						<Icon :name="icon" size="6" color="gray-400" isOutline class="hover:text-white"/>
					</button>

					<!-- Profile dropdown -->
					<Menu as="div" class="ml-3 relative">
						<div>
							<MenuButton
									class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<DisclosureButton as="div" v-for="(item, i) in navigation" :key="i" class="w-full">
					<Link :content="item.name" :url="item.href" weight="medium" :class="['px-3 py-2 rounded-md w-full flex flex-1', selected.name === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"/>
				</DisclosureButton>
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
 * - Use it to show a dark navbar with menu button on left
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
		 * use it to show desktop logo
		 */
		desktopLogo: {
			type: String,
			default: ''
		},
		/**
		 * use it to show mobile logo
		 */
		mobileLogo: {
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

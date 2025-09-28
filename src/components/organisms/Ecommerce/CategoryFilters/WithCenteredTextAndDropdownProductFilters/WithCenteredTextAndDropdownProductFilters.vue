<template>
	<div class="bg-gray-50">
		<!-- Mobile filter dialog -->
		<TransitionRoot as="template" :show="open">
			<Dialog as="div" class="fixed inset-0 z-40 flex sm:hidden" @close="open = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
					enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
					leave-from="opacity-100" leave-to="opacity-0">
					<DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
				</TransitionChild>

				<TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
					enter-from="translate-x-full" enter-to="translate-x-0"
					leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
					leave-to="translate-x-full">
					<div
						class="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
						<div class="flex items-center justify-between px-4">
							<Text size="lg" weight="medium" color="gray-900" content="Fulters" />
							<Button type="button" :Leading="true"
								customClass="w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md hover:bg-gray-50"
								@click="open = false">
								<Text customClass="sr-only" content="Close menu" />
								<Icon name="XMarkIcon" customClass="hover:text-gray-400" :size="6" color="gray-400" hoverTextColor="gray-500" :ariaHidden="true" />
							</Button>
						</div>

						<!-- Filters -->
						<form class="mt-4">
							<Disclosure as="div" v-for="section in filters" :key="section.name"
								class="px-4 py-6 border-t border-gray-200" v-slot="{ open }">
								<div class="flow-root -mx-2 -my-3">
									<DisclosureButton
										class="flex items-center justify-between w-full px-2 py-3 text-sm text-gray-400 bg-white">
										<Text weight="medium" color="gray-900" :content="section.name" />
										<span class="flex items-center ml-6">
											<Icon name="ChevronDownIcon" :customClass="`${open ? '-rotate-180' : 'rotate-0'}`" color="gray-400" hoverTextColor="gray-500" :width="5" :height="5" ariaHidden="true" />
										</span>
									</DisclosureButton>
								</div>
								<DisclosurePanel class="pt-6">
									<div class="space-y-6">
										<div v-for="(option, optionIdx) in section.options" :key="option.value"
											class="flex items-center">
											<CheckBox :title="option.label" :id="`${section.id}-${optionIdx}-mobile`" :name="section.id" :value="option.value" />
										</div>
									</div>
								</DisclosurePanel>
							</Disclosure>
						</form>
					</div>
				</TransitionChild>
			</Dialog>
		</TransitionRoot>

		<div class="max-w-3xl px-4 mx-auto text-center sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="py-24">
				<Text size="4xl" customClass="font-extrabold traking-tight" color="gray-900"
					content="New Arrivals" />
				<Text customClass="mt-4 max-w-3xl mx-auto" size="base" color="gray-500" content="Thoughtfully designed objects for the workspace, home,
					and travel." />
			</div>

			<section aria-labelledby="filter-heading" class="py-6 border-t border-gray-200">
				<Text id="filter-heading" customClass="sr-only" content="Product filters" />

				<div class="flex items-center justify-between">
					<Menu as="div" class="relative inline-block text-left">
						<div>
							<MenuButton
								class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
								Sort
								<Icon name="ChevronDownIcon" customClass="flex-shrink-0 ml-1 -mr-1 group-hover:text-gray-500" :size="5" color="gray-400" :ariaHidden="true" />
							</MenuButton>
						</div>

						<transition enter-active-class="transition duration-100 ease-out"
							enter-from-class="transform scale-95 opacity-0"
							enter-to-class="transform scale-100 opacity-100"
							leave-active-class="transition duration-75 ease-in"
							leave-from-class="transform scale-100 opacity-100"
							leave-to-class="transform scale-95 opacity-0">
							<MenuItems
								class="absolute left-0 z-10 w-40 mt-2 origin-top-left bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div class="py-1">
									<MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
										<Link :url="option.href"
											 :customClass="`${option.current ? 'font-medium text-gray-900' : 'text-gray-500'} ${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`"
											 :content="option.name" />
									</MenuItem>
								</div>
							</MenuItems>
						</transition>
					</Menu>

					<Button :leading="true" type="button"
						customClass="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
						@click="open = true">Filters
					</Button>

					<PopoverGroup class="hidden sm:flex sm:items-baseline sm:space-x-8">
						<Popover as="div" v-for="(section, sectionIdx) in filters" :key="section.name" id="desktop-menu"
							class="relative z-10 inline-block text-left">
							<div>
								<PopoverButton
									class="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
									<Text :content="section.name" />
									<Text v-if="sectionIdx === 0"
									customClass="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 tabular-nums" content="1" color="gray-700" size="xs" weight="semibold" />
									<Icon name="ChevronDownIcon" customClass="flex-shrink-0 ml-1 -mr-1 group-hover:text-gray-500" :size="5" color="gray-400" :ariaHidden="true" />
								</PopoverButton>
							</div>

							<transition enter-active-class="transition duration-100 ease-out"
								enter-from-class="transform scale-95 opacity-0"
								enter-to-class="transform scale-100 opacity-100"
								leave-active-class="transition duration-75 ease-in"
								leave-from-class="transform scale-100 opacity-100"
								leave-to-class="transform scale-95 opacity-0">
								<PopoverPanel
									class="absolute right-0 p-4 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
									<form class="space-y-4">
										<div v-for="(option, optionIdx) in section.options" :key="option.value"
											class="flex items-center">
											<CheckBox :title="option.label" :id="`${section.id}-${optionIdx}`" :name="section.id" :value="option.value" />
										</div>
									</form>
								</PopoverPanel>
							</transition>
						</Popover>
					</PopoverGroup>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import {
	Dialog,
	DialogOverlay,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import Text from '../../../../atoms/Text/Text.vue';
import Button from '../../../../atoms/Button/Button.vue';
import Link from '../../../../atoms/Link/Link.vue';
import Icon from '../../../../atoms/Icons/Icons.vue';
import CheckBox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";

const sortOptions = [
	{ name: 'Most Popular', href: '#' },
	{ name: 'Best Rating', href: '#' },
	{ name: 'Newest', href: '#' },
]
const filters = [
	{
		id: 'category',
		name: 'Category',
		options: [
			{ value: 'tees', label: 'Tees' },
			{ value: 'crewnecks', label: 'Crewnecks' },
			{ value: 'hats', label: 'Hats' },
		],
	},
	{
		id: 'brand',
		name: 'Brand',
		options: [
			{ value: 'clothing-company', label: 'Clothing Company' },
			{ value: 'fashion-inc', label: 'Fashion Inc.' },
			{ value: 'shoes-n-more', label: "Shoes 'n More" },
		],
	},
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'white', label: 'White' },
			{ value: 'black', label: 'Black' },
			{ value: 'grey', label: 'Grey' },
		],
	},
	{
		id: 'sizes',
		name: 'Sizes',
		options: [
			{ value: 's', label: 'S' },
			{ value: 'm', label: 'M' },
			{ value: 'l', label: 'L' },
		],
	},
]

export default {
	components: {
		Dialog,
		DialogOverlay,
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		Popover,
		PopoverButton,
		PopoverGroup,
		PopoverPanel,
		TransitionChild,
		TransitionRoot,
		ChevronDownIcon,
		XMarkIcon,
		Text,
		Button,
		Link,
		Icon,
		CheckBox
	},
	setup() {
		const open = ref(false)

		return {
			sortOptions,
			filters,
			open,
		}
	},
}
</script>

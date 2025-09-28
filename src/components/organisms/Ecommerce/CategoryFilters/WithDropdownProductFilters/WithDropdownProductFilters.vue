<template>
	<div class="bg-white">
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
						class="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
						<div class="flex items-center justify-between px-4">
							<Text size="lg" weight="medium" color="gray-900" content="Filters" />
							<Button :leading="true" type="button"
								customClass="w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
								@click="open = false">
								<Text customClass="sr-only" content="Close menu" />
								<Icon name="XMarkIcon" color="gray-400" hoverTextColor="gray-500" :size="6" 
									:ariaHidden="true" />
							</Button>
						</div>

						<!-- Filters -->
						<form class="mt-4">
							<Disclosure as="div" v-for="section in filters" :key="section.name"
								class="px-4 py-6 border-t border-gray-200" v-slot="{ open }">
								<h3 class="flow-root -mx-2 -my-3">
									<DisclosureButton
										class="flex items-center justify-between w-full px-2 py-3 text-sm text-gray-400 bg-white">
										<Text weight="medium" color="gray-900" :content="section.name" />
										<span class="flex items-center ml-6">
											<Icon name="ChevronDownIcon" color="gray-400" hoverTextColor="gray-500" 
												:customClass="`transform ${open ? '-rotate-180' : 'rotate-0'}`"
												:width="5" :height="5" ariaHidden="true" />
										</span>
									</DisclosureButton>
								</h3>
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

		<div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<Text size="3xl" color="gray-900" weight="extrabold" customClass="traking-tight"
				content="Workspace sale" />
			<Text customClass="max-w-xl mt-4" size="sm" color="gray-700"
				content="Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out." />
		</div>

		<!-- Filters -->
		<section aria-labelledby="filter-heading">
			<Text id="filter-heading" customClass="sr-only" content="Filters" />
			<div class="relative z-10 pb-4 bg-white border-b border-gray-200">
				<div class="flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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

					<div class="hidden sm:block">
						<div class="flow-root">
							<PopoverGroup class="flex items-center -mx-4 divide-x divide-gray-200">
								<Popover v-for="(section, sectionIdx) in filters" :key="section.name"
									class="relative inline-block px-4 text-left">
									<PopoverButton
										class="inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
										<Text :content="section.name" />
										<Text v-if="sectionIdx === 0"
										customClass="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 tabular-nums" content="1" color="gray-700" size="xs" weight="semibold" />
										<Icon name="ChevronDownIcon" customClass="flex-shrink-0 ml-1 -mr-1 group-hover:text-gray-500" :size="5" color="gray-400" :ariaHidden="true" />
									</PopoverButton>	

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
					</div>
				</div>
			</div>

			<!-- Active filters -->
			<div class="bg-gray-100">
				<div class="px-4 py-3 mx-auto max-w-7xl sm:flex sm:items-center sm:px-6 lg:px-8">
					<Text size="xs" weight="semibold" color="gray-500" customClass="tracking-wide uppercase" content="Filters" />
					<Text customClass="sr-only" content=", active" />

					<div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

					<div class="mt-2 sm:mt-0 sm:ml-4">
						<div class="flex flex-wrap items-center -m-1">
							<span v-for="activeFilter in activeFilters" :key="activeFilter.value"
								class="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
								<Text :content="activeFilter.label" />
								<Text :content="activeFilter.label" />
								<Button type="button" :leading="true"
									class="inline-flex flex-shrink-0 w-4 h-4 p-1 ml-1 text-gray-400 rounded-full hover:bg-gray-200 hover:text-gray-500">
									<Text customClass="sr-only" :content="`Remove filter for ${activeFilter.label}`" />
									<svg class="w-2 h-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
										<path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
									</svg>
								</Button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { ref } from 'vue'
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
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import Text from '../../../../atoms/Text/Text.vue'
import Button from '../../../../atoms/Button/Button.vue'
import Link from '../../../../atoms/Link/Link.vue';
import Icon from '../../../../atoms/Icons/Icons.vue';
import CheckBox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";

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
	props: {
		sortOptions: {
			type: Array,
			default: () => []
		},
		filters: {
			type: Array,
			default: () => []
		},
		activeFilters: {
			type: Array,
			default: () => []
		},
	},
	setup() {
		const open = ref(false)

		return {
			open,
		}
	},
}
</script>

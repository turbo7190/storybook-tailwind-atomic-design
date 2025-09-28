<template>
	<Popover class="relative bg-white">
		<div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="#">
					<img class="h-8 w-auto sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt=""/>
				</a>
			</div>
			<div class="-mr-2 -my-2 md:hidden">
				<PopoverButton
						class="bg-white rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
					<Icon name="Bars3Icon" size="6" color="gray-400"/>
				</PopoverButton>
			</div>
			<PopoverGroup as="nav" class="hidden md:flex space-x-10">
				<Popover class="relative" v-slot="{ open }">
					<PopoverButton class="group rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
						<Text size="base" weight="medium" :color="open ? 'gray-900' : 'gray-500'" content="Solutions" customClass="hover:text-gray-900"/>
						<Icon name="ChevronDownIcon" :color="open ? 'gray-600' : 'gray-400'" class="ml-2 h-5 w-5 group-hover:text-gray-500"/>
					</PopoverButton>

					<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
											enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
											leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
						<PopoverPanel
								class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
									<a v-for="solution in solutions" :key="solution.name" :href="solution.href"
										 class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<div
												class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 sm:h-12 sm:w-12">
											<Icon :name="solution.icon" size="6" color="white"/>
										</div>
										<div class="ml-4">
											<Text color="gray-900" weight="medium" :content="solution.name"/>
											<Text size="sm" color="gray-500" :content="solution.description" class="mt-1"/>
										</div>
									</a>
								</div>
								<div class="p-5 bg-gray-50 sm:p-8">
									<a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
										<div class="flex items-center">
											<Text color="gray-900" size="base" weight="medium" content="Enterprise"/>
											<Badge label="New" :bgColor="'primary-100'" textColor="primary-800" textSize="xs" px="3" py="0.5" class="ml-3 inline-flex"/>
										</div>
										<Text color="gray-500" size="sm" content="Empower your entire team with even more advanced tools." class="mt-1"/>
									</a>
								</div>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>

				<Link size="base" weight="medium" color="gray-500" hoverColor="gray-900" content="Pricing"/>
				<Link size="base" weight="medium" color="gray-500" hoverColor="gray-900" content="Docs"/>

				<Popover class="relative" v-slot="{ open }">
					<PopoverButton class="group rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
						<Text size="base" weight="medium" :color="open ? 'gray-900' : 'gray-500'" content="More" customClass="hover:text-gray-900"/>
						<Icon name="ChevronDownIcon" :color="open ? 'gray-600' : 'gray-400'" class="ml-2 h-5 w-5 group-hover:text-gray-500"/>
					</PopoverButton>

					<transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
											enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
											leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
						<PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									<a v-for="resource in resources" :key="resource.name" :href="resource.href"
										 class="-m-3 p-3 block rounded-md hover:bg-gray-50">
										<Text color="gray-900" weight="medium" :content="resource.name"/>
										<Text size="sm" color="gray-500" :content="resource.description" class="mt-1"/>
									</a>
								</div>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>
			</PopoverGroup>
			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				<Button content="Sign in" variant="secondary" custom-class="border-none text-base"/>
				<Button content="Sign up" variant="primary" custom-class="text-base ml-2"/>
			</div>
		</div>

		<transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
								enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
								leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
			<PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div class="pt-5 pb-6 px-5">
						<div class="flex items-center justify-between">
							<div>
								<img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
										 alt="Workflow"/>
							</div>
							<div class="-mr-2">
								<PopoverButton
										class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
									<Icon name="XMarkIcon" size="6"/>
								</PopoverButton>
							</div>
						</div>
						<div class="mt-6">
							<nav class="grid grid-cols-1 gap-7">
								<a v-for="solution in solutions" :key="solution.name" :href="solution.href"
									 class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
									<div
											class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
										<Icon :name="solution.icon" color="white" size="6"/>
									</div>
									<Text weight="medium" color="gray-900" class="ml-4" :content="solution.name"/>
								</a>
							</nav>
						</div>
					</div>
					<div class="py-6 px-5">
						<div class="grid grid-cols-2 gap-4">
							<Link size="base" weight="medium" color="gray-900" hoverColor="gray-700" content="Pricing"/>
							<Link size="base" weight="medium" color="gray-900" hoverColor="gray-700" content="Docs"/>
							<Link size="base" weight="medium" color="gray-900" hoverColor="gray-700" content="Enterprise"/>
							<Link v-for="resource in resources" :key="resource.name" :url="resource.href" size="base" weight="medium" color="gray-900" hoverColor="gray-700" :content="resource.name"/>
						</div>
						<div class="mt-6">
							<Button variant="primary" content="Sign up" class="w-full"/>
							<p class="mt-6 flex items-center justify-center">
								<Text content="Existing customer?" weight="medium" color="gray-500"/>
								<Link size="base" weight="medium" color="primary-600" hoverColor="primary-500" content="Sign in" class="ml-1"/>
							</p>
						</div>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script>
import {Popover, PopoverButton, PopoverGroup, PopoverPanel} from '@headlessui/vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
import Text from '../../../atoms/Text/Text.vue'
import Link from '../../../atoms/Link/Link.vue'
import Badge from '../../../molecules/Badge/Basic/Basic.vue'
/**
 * - Use it to show a simple header with centered links
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverGroup,
		PopoverPanel,
		Icon,
		Button,
		Text,
		Link,
		Badge
	},
	props: {
		/**
		 * Use it for solutions
		 */
		solutions: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for resources
		 */
		resources: {
			type: Array,
			default: () => []
		}
	}
}
</script>

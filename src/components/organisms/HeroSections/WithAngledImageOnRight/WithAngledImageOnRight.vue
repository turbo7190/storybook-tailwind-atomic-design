<template>
	<div class="relative bg-white overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
				<svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						 fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
					<polygon points="50,0 100,0 50,100 0,100"/>
				</svg>

				<Popover>
					<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
						<nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
							<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
								<div class="flex items-center justify-between w-full md:w-auto">
									<a href="#">
										<span class="sr-only">Workflow</span>
										<img class="h-8 w-auto sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
									</a>
									<div class="-mr-2 flex items-center md:hidden">
										<PopoverButton
												class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
											<Icon name="Bars3Icon" size="6"/>
										</PopoverButton>
									</div>
								</div>
							</div>
							<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
								<Link v-for="item in navigation" :key="item.name" :url="item.href" weight="medium" :content="item.name" color="gray-500" hoverColor="gray-900"/>
								<Link color="primary-600" hoverColor="primary-500" weight="medium" content="Log in"/>
							</div>
						</nav>
					</div>

					<transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
											enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
											leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
						<PopoverPanel focus
													class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
							<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="px-5 pt-4 flex items-center justify-between">
									<div>
										<img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt=""/>
									</div>
									<div class="-mr-2">
										<PopoverButton
												class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
											<Icon name="XMarkIcon" size="6"/>
										</PopoverButton>
									</div>
								</div>
								<div class="px-2 pt-2 pb-3 space-y-1">
									<Link v-for="item in navigation" :key="item.name" :url="item.href" weight="medium" :content="item.name" color="gray-700" hoverColor="gray-900" hoverBg="gray-50" class="block px-3 py-2 rounded-md"/>
								</div>
								<Link color="primary-600" hoverColor="primary-500" weight="medium" content="Log in" class="bg-gray-50 hover:bg-gray-100 block w-full px-5 py-3 text-center"/>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>

				<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
					<div class="sm:text-center lg:text-left">
						<h1 class="tracking-tight">
						<Text size="5xl" weight="extrabold" color="gray-900" :content="title"/>
						<Text size="5xl" color="primary-600" :content="subtitle"/>
						</h1>
						<Text size="xl" color="gray-500" :content="description" class="mt-6 max-w-lg mx-auto sm:max-w-3xl"/>
						<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-3">
							<Button v-for="button in buttons" :key="button.label" :content="button.label" :variant="button.type" size="xl"/>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					 :src="image"/>
		</div>
	</div>
</template>

<script>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show hero section with angled image on right
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
		Icon,
		Text,
		Button,
		Link
	},
	props: {
		/**
		 * Use it for section title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for section subtitle
		 */
		subtitle: {
			type: String,
			default: ''
		},
		/**
		 * Use it for section description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for section buttons
		 */
		buttons: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for navigation
		 */
		navigation: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for section background image
		 */
		image: {
			type: String,
			default: ''
		}
	}
}
</script>

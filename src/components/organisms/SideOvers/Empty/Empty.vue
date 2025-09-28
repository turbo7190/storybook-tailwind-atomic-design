<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
			<div class="absolute inset-0 overflow-hidden">
				<DialogOverlay class="absolute inset-0"/>

				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
					<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
													 enter-from="translate-x-full" enter-to="translate-x-0"
													 leave="transform transition ease-in-out duration-500 sm:duration-700"
													 leave-from="translate-x-0" leave-to="translate-x-full">
						<div class="pointer-events-auto w-screen max-w-md">
							<div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
								<div class="px-4 sm:px-6">
									<div class="flex items-start justify-between">
										<DialogTitle class="text-lg font-medium text-gray-900">{{title}}</DialogTitle>
										<div class="ml-3 flex h-7 items-center">
											<button type="button"
															class="rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
															@click="open = false">
												<Icon name="XMarkIcon" size="6" color="gray-400" class="hover:text-gray-500"/>
											</button>
										</div>
									</div>
								</div>
								<div class="relative mt-6 flex-1 px-4 sm:px-6">
									<!-- Replace with your content -->
									<div class="absolute inset-0 px-4 sm:px-6">
										<div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
											<slot></slot>
										</div>
									</div>
									<!-- /End replace -->
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import {ref} from 'vue'
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show an empty panel
 */
export default {
	components: {
		Dialog,
		DialogOverlay,
		DialogTitle,
		TransitionChild,
		TransitionRoot,
		Text,
		Icon,
	},
	props: {
		/**
		 * use it to show title
		 */
		title: {
			type: String,
			default: ''
		}
	},
	setup() {
		const open = ref(true)

		return {
			open,
		}
	},
}
</script>

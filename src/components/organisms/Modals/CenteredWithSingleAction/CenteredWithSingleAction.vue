<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
			<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
												 leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
					<DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
				</TransitionChild>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
				<TransitionChild as="template" enter="ease-out duration-300"
												 enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
												 enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
												 leave-from="opacity-100 translate-y-0 sm:scale-100"
												 leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
					<div
							class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
						<div>
							<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
								<Icon :name="icon" size="6" color="green-600"/>
							</div>
							<div class="mt-3 text-center sm:mt-5">
								<Text size="lg" weight="medium" color="gray-900" :content="title"/>
								<Text size="sm" color="gray-500" :content="description" class="mt-2"/>
							</div>
						</div>
						<div class="mt-5 sm:mt-6">
							<Button :content="btnText" :variant="'primary'" :customClass="'w-full'"/>
						</div>
					</div>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import {ref} from 'vue'
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a centered modal with single action.
 */
export default {
	components: {
		Dialog,
		DialogOverlay,
		DialogTitle,
		TransitionChild,
		TransitionRoot,
		Icon, Button, Text
	},
	props: {
		/**
		 * Use it for modal title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for modal description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for button text
		 */
		btnText: {
			type: String,
			default: ''
		},
		/**
		 * Use it for modal icon
		 */
		icon: {
			type: String,
			default: ''
		},
		/**
		 * Use it for button action
		 */
		onClick: {
			type: Function,
			default: () => {}
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

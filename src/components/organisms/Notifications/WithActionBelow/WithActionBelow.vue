<template>
	<!-- Global notification live region, render this permanently at the end of the document -->
	<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
		<div class="w-full flex flex-col items-center space-y-4 sm:items-end">
			<!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
			<transition enter-active-class="transform ease-out duration-300 transition"
									enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
									enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
									leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
									leave-to-class="opacity-0">
				<div v-if="show"
						 class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="p-4">
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<Icon :name="icon" isOutline size="6" color="gray-400"/>
							</div>
							<div class="ml-3 w-0 flex-1 pt-0.5">
								<Text size="sm" weight="medium" color="gray-900" :content="title"/>
								<Text size="sm" color="gray-500" :content="description" class="mt-1"/>
								<div class="mt-3 flex space-x-7">
									<Button :content="yesBtnText" class="bg-white text-primary-600 px-0 hover:text-primary-500" :onClick="onYesClick"/>
									<Button :content="noBtnText" class="bg-white text-gray-700 px-0 hover:text-gray-500" :onClick="onNoClick"/>
								</div>
							</div>
							<div class="ml-4 flex-shrink-0 flex">
								<button @click="show = false"
												class="bg-white rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
									<Icon name="XMarkIcon" size="5" color="gray-400" class="hover:text-gray-500 "/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue'
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to show a notification with action below
 */
export default {
	components: {
		Icon, Text, Button
	},
	props: {
		/**
		 * Use it for notification title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for notification description
		 */
		description: {
			type: String,
			default: 'Undo'
		},
		/**
		 * Use it for yes button text
		 */
		yesBtnText: {
			type: String,
			default: ''
		},
		/**
		 * Use it for no button text
		 */
		noBtnText: {
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
		 * Use it for yes button action
		 */
		onYesClick: {
			type: Function,
			default: () => {}
		},
		/**
		 * Use it for no button action
		 */
		onNoClick: {
			type: Function,
			default: () => {}
		}
	},
	setup() {
		const show = ref(true)
		return {
			show,
		}
	},
}
</script>

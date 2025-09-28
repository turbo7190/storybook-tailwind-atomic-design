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
						 class="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
					<div class="w-0 flex-1 p-4">
						<div class="flex items-start">
							<div class="flex-shrink-0 pt-0.5">
								<Avatar :src="avatar" isCircle size="10" :username="title"/>
							</div>
							<div class="ml-3 w-0 flex-1">
								<Text size="sm" weight="medium" color="gray-900" :content="title"/>
								<Text size="sm" color="gray-500" :content="description" class="mt-1"/>
							</div>
						</div>
					</div>
					<div class="flex border-l border-gray-200">
						<Button :content="btnText" :onClick="onClick" class="bg-white w-full rounded-none rounded-r-lg p-4 text-primary-600 hover:text-primary-500"/>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue'
import Text from '../../../atoms/Text/Text.vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to show a simple notification with avatar
 */
export default {
	components: {
		Text, Avatar, Button
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
			default: ''
		},
		/**
		 * Use it for avatar
		 */
		avatar: {
			type: String,
			default: ''
		},
			/**
		 * Use it for notification button
		 */
		btnText: {
			type: String,
			default: 'Reply'
		},
		/**
		 * Use it for notificiation button action
		 */
		onClick: {
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

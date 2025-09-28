<template>
	<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
		<div class="w-full flex flex-col items-center space-y-4 sm:items-end">
			<transition enter-active-class="transform ease-out duration-300 transition"
									enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
									enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
									leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
									leave-to-class="opacity-0">
				<div v-if="show"
						 class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="p-4">
						<div class="flex items-center">
							<div class="w-0 flex-1 flex justify-between">
								<Text size="sm" weight="medium" color="gray-900" :content="content" class="w-0 flex-1"/>
								<Link :content="btnText" size="sm" weight="medium" color="primary-600" hoverColor="primary-500" :onClick="onClick"/>
							</div>
							<div class="ml-4 flex-shrink-0 flex">
								<button @click="show = false" class="bg-white rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
									<Icon name="XMarkIcon" size="5" color="gray-400" class="hover:text-gray-500"/>
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
import Icon from '../../../atoms/Icons/Icons.vue'
import Link from '../../../atoms/Link/Link.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a condensed notification
 */
export default {
	components: {
		Icon, Link, Text
	},
	props: {
		/**
		 * Use it for notification content
		 */
		content: {
			type: String,
			default: ''
		},
		/**
		 * Use it for notification button
		 */
		btnText: {
			type: String,
			default: 'Undo'
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

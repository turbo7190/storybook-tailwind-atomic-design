<template>
	<div class="relative bg-white">
		<div class="absolute inset-0" aria-hidden="true">
			<div class="absolute inset-y-0 right-0 w-1/2 bg-primary-700"/>
		</div>
		<div class="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
			<div class="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
				<div class="max-w-lg mx-auto lg:mx-0">
					<Text size="base" weight="semibold" color="primary-600" class="tracking-wide uppercase" :content="featureInfo.category"/>
					<Text size="2xl" weight="extrabold" color="gray-900" class="mt-2 sm:text-3xl" :content="featureInfo.title"/>
					<dl class="mt-12 space-y-10">
						<div v-for="(item, id) in featureInfo.items" :key="id" class="relative">
							<dt>
								<div class="absolute h-12 w-12 flex items-center justify-center bg-primary-500 rounded-md">
									<Icon :name="item.icon" isOutline size="6" color="white"/>
								</div>
								<Text class="ml-16 leading-6" size="lg" weight="medium" color="gray-900" :content="item.name"/>
							</dt>
							<dd>
								<Text class="ml-2 ml-16" size="base" weight="normal" color="gray-500" :content="item.description"/>
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div
					class="bg-primary-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
				<div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
					<div>
						<p class="relative grid grid-cols-2">
              <span class="flex flex-col text-center">
								<Text size="5xl" weight="extrabold" color="white" class="tracking-tight" :content="'$' + setupFee"/>
								<Text size="base" weight="medium" color="primary-200" class="mt-2" content="Setup fee"/>
              </span>
							<span class="pointer-events-none absolute h-12 w-full flex items-center justify-center"
										aria-hidden="true">
                <Icon name="PlusIcon" size="6" color="primary-300"/>
              </span>
							<span class="flex flex-col text-center">
								<Text size="5xl" weight="extrabold" color="white" class="tracking-tight" :content="'$' + perMonth"/>
								<Text size="base" weight="medium" color="primary-200" class="mt-2" content="Per Month"/>
							</span>
						</p>
					</div>
					<ul role="list" class="rounded overflow-hidden grid gap-px sm:grid-cols-2">
						<li v-for="(data, i) in checkList" :key="i"
								class="bg-primary-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3">
							<Icon name="CheckIcon" size="6" color="primary-300"/>
							<Text size="base" color="white" :content="data"/>
						</li>
					</ul>
					<Button variant="secondary" content="Get started today" custom-class="w-full text-base sm:py-4 text-primary-500"/>
					<Link weight="medium" color="primary-200" hoverColor="white" class="block text-center" content="Try Workflow Lite for free"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show a price section splitting with brand panel
 */
export default {
	components: {
		Icon, Text, Button, Link
	},
	props: {
		/**
		 * use it to show button text
		 */
		btnText: {
			type: String,
			default: ''
		},
		/**
		 * use it for detail info
		 */
		featureInfo: {
			type: Object,
			default: () => {}
		},
		/**
		 * use it for membership content
		 */
		checkList: {
			type: Array,
			default: () => []
		},
		/**
		 * use it to show setup fee
		 */
		setupFee: {
			type: Number,
			default: 0
		},
		/**
		 * use it to show per month
		 */
		perMonth: {
			type: Number,
			default: 0
		}
	}
}
</script>

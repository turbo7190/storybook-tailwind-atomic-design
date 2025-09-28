<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="xl:flex xl:items-center xl:justify-between">
				<div>
					<h1 class="sm:tracking-tight">
						<Text size="4xl" weight="extrabold" color="gray-900" :content="title" class="sm:text-5xl mr-4"/>
						<Text size="4xl" weight="extrabold" color="primary-600" :content="subtitle" class="sm:text-5xl"/>
					</h1>
					<Text size="xl" color="gray-500" :content="description" class="mt-5"/>
				</div>
				<div class="flex justify-center">
					<Button :content="btnText" custom-class="mt-8 text-base py-2.5 px-4"/>
				</div>
			</div>
			<FeatureList :items="featureInfo.items" :title="featureInfo.title" :description="featureInfo.description"/>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
import Link from '../../../atoms/Link/Link.vue'
import FeatureList from '../../FeatureSections/WithFeatureGridList/WithFeatureGridList.vue'
/**
 * - Use it to show a single price with feature list
 */
export default {
	components: {
		Icon, Text, Button, Link, FeatureList
	},
	props: {
		/**
		 * use it to show section title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * use it to show section subtitle
		 */
		subtitle: {
			type: String,
			default: ''
		},
		/**
		 * use it to show section description
		 */
		description: {
			type: String,
			default: ''
		},
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
		}
	}
}
</script>

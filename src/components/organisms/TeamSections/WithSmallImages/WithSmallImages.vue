<template>
	<div class="bg-white">
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
				<div class="space-y-5 sm:space-y-4">
					<Text size="3xl" weight="extrabold" color="black" class="tracking-tight sm:text-4xl" :content="title"/>
					<Text size="xl" color="gray-500" :content="description"/>
				</div>
				<div class="lg:col-span-2">
					<ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
						<li v-for="person in people" :key="person.name">
							<div class="flex items-center space-x-4 lg:space-x-6">
								<Avatar isCircle size="16" class="lg:w-20 lg:h-20" :src="person.imageUrl" :username="person.name"/>
								<div class="leading-6 space-y-1">
									<Text size="lg" weight="medium" color="black" :content="person.name"/>
									<Text size="lg" weight="medium" color="primary-600" :content="person.role"/>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'
/**
 * - Use it to show a team section with small images
 */
export default {
	components: {
		Text, Avatar
	},
	props: {
		/**
		 * Use it to show title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it to show description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for teammates list
		 */
		people: {
			type: Array,
			default: () => []
		}
	}
}
</script>

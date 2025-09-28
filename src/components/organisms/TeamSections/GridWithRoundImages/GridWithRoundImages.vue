<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-8 sm:space-y-12">
				<div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
					<Text size="3xl" weight="extrabold" color="black" class="tracking-tight sm:text-4xl" :content="title"/>
					<Text size="xl" color="gray-500" :content="description"/>
				</div>
				<ul role="list"
						class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
					<li v-for="person in people" :key="person.name">
						<div class="space-y-4">
							<Avatar isCircle size="20" :src="person.imageUrl" :username="person.name" class="mx-auto lg:w-24 lg:h-24"/>
							<div class="space-y-0">
								<Text size="xs" weight="medium" color="black" :content="person.name" class="lg:text-sm"/>
								<Text size="xs" weight="medium" color="primary-600" :content="person.role" class="lg:text-sm"/>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Avatar from '../../../atoms/Avatar/Avatar.vue'
/**
 * - Use it to show a team section with round images
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

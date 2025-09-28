<template>
	<div class="bg-white">
		<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div class="space-y-12">
				<Text size="3xl" weight="extrabold" color="black" class="tracking-tight sm:text-4xl" :content="title"/>
				<ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
					<li v-for="person in people" :key="person.name">
						<div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
							<div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
								<img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt=""/>
							</div>
							<div class="sm:col-span-2">
								<div class="space-y-4">
									<div class="leading-6 space-y-1">
										<Text size="lg" weight="medium" color="black" :content="person.name"/>
										<Text size="lg" weight="medium" color="primary-600" :content="person.role"/>
									</div>
									<div class="text-lg">
										<Text size="lg" weight="medium" color="gray-500" :content="person.bio"/>
									</div>
								</div>
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
 * - Use it to show a team section with vertical images
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
		 * Use it for teammates list
		 */
		people: {
			type: Array,
			default: () => []
		}
	}
}
</script>

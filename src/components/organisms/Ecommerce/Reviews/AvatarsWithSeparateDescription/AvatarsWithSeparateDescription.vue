<template>
	<div class="bg-white">
		<div>
			<h2 id="reviews-heading" class="sr-only">Reviews</h2>

			<div class="space-y-10">
				<div v-for="item in items" :key="item.id" class="flex flex-col sm:flex-row">
					<div class="mt-6 order-2 sm:mt-0 sm:ml-16">
						<Text
							:content="item.title"
							color="gray-900"
							size="sm"
						/>
						<Text
							:content="item.rating + 'out of 5 stars'"
							customClass="sr-only"
						/>
						<p class="sr-only">{{ item.rating }} out of 5 stars</p>
						<div class="mt-3 space-y-6 text-sm text-gray-600" v-html="item.content"/>
					</div>

					<div class="order-1 flex items-center sm:flex-col sm:items-start">
						<Image :src="item.avatarSrc" :alt="`${item.author}.`" customClass="h-12 w-12 rounded-full"/>

						<div class="ml-4 sm:ml-0 sm:mt-4">
							<Text
								:content="item.author"
								color="gray-900"
								size="sm"
							/>
							<div class="mt-2 flex items-center">
								<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
													:class="[item.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
													aria-hidden="true"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {StarIcon} from '@heroicons/vue/24/solid'
import Image from "../../../../atoms/Image/Image.vue";
import Text from "../../../../atoms/Text/Text.vue";
export default {
	components: {
		Image,
		Text,
		StarIcon
	},
	props: ['items']
}
</script>

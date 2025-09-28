<template>
	<div class="bg-white">
		<div>
			<Text
				:content="heading"
				customClass="sr-only"
			/>
			<div class="-my-10">
				<div v-for="(item, reviewIdx) in items" :key="item.id" class="flex text-sm text-gray-500 space-x-4">
					<div class="flex-none py-10">
						<Image :src="item.avatarSrc" customClass="w-10 h-10 bg-gray-100 rounded-full"/>
					</div>
					<div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
						<Text
							:content="item.author"
							color="gray-900"
						/>
						<p>
							<Time 
							:content="item.date"
							:datetime="item.datetime" />
						</p>

						<div class="flex items-center mt-4">
							<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
												:class="[item.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
												aria-hidden="true"/>
						</div>
						<p class="sr-only">{{ item.rating }} out of 5 stars</p>

						<div class="mt-4 prose prose-sm max-w-none text-gray-500" v-html="item.content"/>
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
import Time from "../../../../atoms/Time/Time.vue";
export default {
	components: {
		Image,
		Text,
		Time,
		StarIcon
	},
	props: ['heading','items']
}
</script>

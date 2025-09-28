<template>
	<div class="bg-gray-50">
		<h2 class="sr-only">{{heading}}</h2>
		<div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
			<div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
				<div v-for="item in items" :key="item.name" class="sm:flex">
					<div class="sm:flex-shrink-0">
						<div class="flow-root">
							<Image :src="item.imageSrc" customClass="w-28 h-24" />
						</div>
					</div>
					<div class="mt-3 sm:mt-0 sm:ml-3">
						<Text
							:content="item.name"
							weight="medium"
							color="gray-900"
							size="sm"
						/>
						<Text
							:content="item.description"
							color="gray-500"
							size="sm"
							customClass="mt-2"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Text from "../../../../atoms/Text/Text.vue";
import Image from "../../../../atoms/Image/Image.vue";

export default {
	components: {
		Text,
		Image,
	},
	props: ['heading','items']
}
</script>

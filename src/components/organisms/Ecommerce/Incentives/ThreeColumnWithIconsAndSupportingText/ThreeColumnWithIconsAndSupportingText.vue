<template>
	<div class="bg-white">
		<h2 class="sr-only">{{heading}}</h2>
		<div class="max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
			<div v-for="item in items" :key="item.name" class="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
				<div class="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
          			<component :is="item.icon" class="mr-2 flex-none w-8 h-8 text-primary-600" aria-hidden="true" />
					<div class="ml-4 flex-auto flex flex-col-reverse">
						<Text
							:content="item.name"
							weight="medium"
							color="gray-900"
						/>
						<Text
							:content="item.description"
							color="gray-500"
							size="sm"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Text from "../../../../atoms/Text/Text.vue";

export default {
	components: {
		Text,
	},
	props: ['heading','items']
}
</script>

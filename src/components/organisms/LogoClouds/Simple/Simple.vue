<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
				<div v-for="(item, itemIdx) in items" :key="itemIdx" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img :class="item.class" :src="item.source" :alt="item.alt"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/**
 * - Use it to show an empty state with starting points
 */
export default {
	components: {

	},
	props: {
	
		/**
		 * Use it for logos
		 */
		items: {
			type: Array,
			default: () => []
		}
	},
}
</script>

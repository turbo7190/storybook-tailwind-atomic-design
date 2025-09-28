
<template>
	<div>
		<ul role="list" class="divide-y divide-gray-200">
			<li v-for="activityItem in activityItems" :key="activityItem.id" class="py-4">
				<div class="flex space-x-3">
					<Image :src="activityItem.person.imageUrl" :height="6" :width="6" customClass="rounded-full" alt="" />
					<div class="flex-1 space-y-1">
						<div class="flex items-center justify-between">
							<Text :content="activityItem.person.name" weight="medium" size="sm"  />
							<Text :content="activityItem.time" size="sm" color="gray-500"  />
						</div>
						<Text size="sm" color="gray-500" :content="`Deployed ${ activityItem.project } (${ activityItem.commit } in master) to ${ activityItem.environment }`" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Image from "../../../atoms/Image/Image.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
	components: {
		Image,
		Text
	},
	props: ['people', 'activityItems'],
}
</script>

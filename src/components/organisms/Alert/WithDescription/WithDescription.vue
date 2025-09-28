<template>
	<div class="rounded-md bg-yellow-50 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<Icon :name="icon" size="5" color="yellow-400"/>
			</div>
			<div class="ml-3">
				<h3 class="text-sm font-medium text-yellow-800">{{title}}</h3>
				<div class="mt-2 text-sm text-yellow-700">
					<p>{{description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it when show alert with description
 */
export default {
	components: {
		Icon,
	},
	props: {
    /**
     * Use to show title
     */
    title: {
      type: String,
    },
    /**
     * Use to show description
     */
    description: {
      type: String,
    },
		/**
     * Use to show icon
     */
    icon: {
      type: String,
    },
	}
}
</script>

<template>
	<div class="rounded-md bg-red-50 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<Icon :name="icon" size="5" color="red-400"/>
			</div>
			<div class="ml-3">
				<h3 class="text-sm font-medium text-red-800">{{title}}</h3>
				<div class="mt-2 text-sm text-red-700">
					<ul role="list" class="list-disc pl-5 space-y-1">
						<li v-for="item in list" :key="item">{{item}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it when show alert with list
 */
export default {
  components: {
    Button,
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
     * Use to show icon
     */
    icon: {
      type: String,
    },
		/**
		 * Use to show list
		 */
		list: {
			type: Array,
			default: () => []
		}
  },
};
</script>


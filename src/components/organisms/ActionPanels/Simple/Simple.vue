<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>{{ description }}</p>
      </div>
      <div class="mt-5">
        <Button variant="danger" :content="btnText" :onClick="onClick" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it when show a panel with title and description
 */
export default {
  components: {
    Button,
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
     * Use for button action
     */
    onClick: {
      type: Function,
    },
		/**
		 * Use for button text
		 */
		btnText: {
			type: String,
		},
  },
};
</script>

<template>
  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <Icon :name="icon" size="5" color="green-400" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-green-800">{{ title }}</h3>
        <div class="mt-2 text-sm text-green-700">
          <p>{{ description }}</p>
        </div>
        <div class="mt-4">
          <div class="-mx-2 -my-1.5 space-x-3">
            <Button
              v-for="(btn, i) in buttons"
              :key="i"
              :content="btn.label"
              :onClick="btn.onClick"
              variant="success"
              customClass="bg-green-50 text-green-800 px-2 hover:bg-green-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
/**
 * - Use it when show alert with actions
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
     * Use to show description
     */
    description: {
      type: String,
    },
    /**
     * Use for button actions
     */
    buttons: {
      type: Array,
    },
		/**
     * Use to show icon
     */
    icon: {
      type: String,
    },
  },
};
</script>

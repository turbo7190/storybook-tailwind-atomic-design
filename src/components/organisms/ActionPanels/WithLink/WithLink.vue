<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>{{ description }}</p>
      </div>
      <div class="mt-3 text-sm">
        <Link
          size="medium"
          color="primary-600"
          :hoverColor="'primary-500'"
          href="#"
          decoration="underline"
          :content="link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it when show a panel with link
 */
export default {
  components: {
    Button,
    Link,
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
     * Use for link content
     */
    link: {
      type: String,
    }
  },
};
</script>

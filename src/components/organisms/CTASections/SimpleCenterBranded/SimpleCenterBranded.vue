<template>
  <div class="bg-primary-700">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">{{ title }}</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-primary-200 mb-10">
        {{ description }}
      </p>
      <Button
        :content="btnText"
        size="lg"
        variant="secondary"
        class="text-primary-500"
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show simple centered panel
 */
export default {
  components: {
    Button,
  },
  props: {
    /**
     * Use it to show panel title
     */
    title: {
      type: String,
    },
    /**
     * Use it to show panel description
     */
    description: {
      type: String,
    },
    /**
     * Use it to show button
     */
    btnText: {
      type: String,
    },
    /**
     * Use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

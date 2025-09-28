<template>
  <div class="bg-primary-50">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
      >
        <span class="block">{{ title }}</span>
        <span class="block text-primary-600">{{ subtitle }}</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <Button
            :content="btnText"
            variant="primary"
            size="lg"
            :onClick="onClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show simple stacked panel
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
     * Use it to show panel subtitle
     */
    subtitle: {
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

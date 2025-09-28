<template>
  <div class="relative bg-gray-800">
    <div
      class="h-56 bg-primary-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <img class="w-full h-full object-cover" :src="image" alt="" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2
          class="text-base font-semibold uppercase tracking-wider text-gray-300"
        >
          {{ label }}
        </h2>
        <p
          class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          {{ title }}
        </p>
        <p class="mt-3 text-lg text-gray-300">{{ description }}</p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <Button
              :content="btnText"
              variant="secondary"
              size="lg"
              :onClick="onClick"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show brand panel with splitting screenshot
 */
export default {
  components: {
    Button,
  },
  props: {
    /**
     * Use it to show panel label
     */
    label: {
      type: String,
    },
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
     * Use it to show overlapping
     */
    image: {
      type: String,
      default: "",
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

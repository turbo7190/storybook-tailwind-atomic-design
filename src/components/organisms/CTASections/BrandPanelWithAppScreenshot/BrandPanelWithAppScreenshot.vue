<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="
          bg-primary-700
          rounded-lg
          shadow-xl
          overflow-hidden
          lg:grid lg:grid-cols-2 lg:gap-4
        "
      >
        <div
          class="
            pt-10
            pb-12
            px-6
            sm:pt-16 sm:px-16
            lg:py-16 lg:pr-0
            xl:py-20 xl:px-20
          "
        >
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">{{ title }}</span>
            </h2>
            <p class="mt-4 text-lg mb-6 leading-6 text-primary-200">
              {{ description }}
            </p>
            <Button
              :content="btnText"
              variant="secondary"
              size="lg"
              class="text-primary-700"
              :onClick="onClick"
            />
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            class="
              transform
              translate-x-6 translate-y-6
              rounded-md
              object-cover object-left-top
              sm:translate-x-16
              lg:translate-y-20
            "
            :src="screenshot"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show brand panel with screenshot
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
     * Use it to show panel screenshot
     */
    screenshot: {
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

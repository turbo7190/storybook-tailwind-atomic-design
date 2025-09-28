<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="relative sm:py-16">
      <div aria-hidden="true" class="hidden sm:block">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        <svg
          class="absolute top-8 left-1/2 -ml-3"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
      <div
        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div
          class="relative rounded-2xl px-6 py-10 bg-primary-600 overflow-hidden shadow-xl sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              class="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                class="text-primary-500 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                class="text-primary-700 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center">
              <Text
                size="3xl"
                weight="extrabold"
                color="white"
                class="tracking-tight sm:text-4xl"
                :content="title"
              />
              <Text
                size="lg"
                color="primary-200"
                class="mt-6 mx-auto max-w-2xl"
                :content="description"
              />
            </div>
            <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div class="min-w-0 flex-1">
                <TextInput
                  :placeholder="placeholder"
                  custom-class="text-base py-3"
                  v-model="inputValue"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <Button
                  :content="btnText"
                  variant="secondary"
                  class="bg-primary-600 py-3 px-4 text-white rounded-md"
                  :onClick="onClick"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show a centered newsletter with graphic
 */
export default {
  components: {
    TextInput,
    Text,
    Button,
  },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it to show description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it to show input form placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it to show input value
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * Use it to show button text
     */
    btnText: {
      type: String,
      default: "Notify me",
    },
    /**
     * Use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    inputValue: {
      // getter
      get() {
        return this.value;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

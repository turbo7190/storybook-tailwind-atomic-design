<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <div
        class="px-6 py-6 bg-primary-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
      >
        <div class="xl:w-0 xl:flex-1">
          <Text
            size="2xl"
            weight="extrabold"
            color="white"
            class="tracking-tight sm:text-3xl"
            :content="title"
          />
          <Text
            size="lg"
            color="primary-200"
            class="mt-3 max-w-3xl leading-6"
            :content="description"
          />
        </div>
        <div class="mt-8 sm:w-full sm:max-w-lg xl:mt-0 xl:ml-8">
          <form class="sm:flex">
            <TextInput :placeholder="placeholder" v-model="inputValue" />
            <div class="mt-4 sm:mt-0 sm:ml-3">
              <Button
                :content="btnText"
                variant="secondary"
                class="bg-opacity-0 text-white rounded-md"
                :onClick="onClick"
              />
            </div>
          </form>
          <p class="mt-3 flex">
            <Text
              size="sm"
              color="primary-200"
              :content="helpText"
              class="mr-1"
            />
            <Link
              size="sm"
              weight="medium"
              color="white"
              decoration="underline"
              :content="linkText"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
/**
 * - Use it to show a simple newsletter with paragraph on brand
 */
export default {
  components: {
    TextInput,
    Link,
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
    /**
     * Use it for help text
     */
    helpText: {
      type: String,
      default: "",
    },
    /**
     * Use it for link text
     */
    linkText: {
      type: String,
      default: "",
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

<template>
  <div class="bg-white">
    <div
      class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center"
    >
      <div class="lg:w-0 lg:flex-1">
        <Text
          size="3xl"
          weight="extrabold"
          color="gray-900"
          class="sm:text-4xl"
          :content="title"
        />
        <Text
          size="lg"
          color="gray-500"
          class="mt-3 max-w-3xl"
          :content="description"
        />
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <TextInput :placeholder="placeholder" v-model="inputValue" />
          <div class="mt-4 sm:mt-0 sm:ml-3">
            <Button :content="btnText" variant="primary" :onClick="onClick" />
          </div>
        </form>
        <p class="mt-3 flex">
          <Text size="sm" color="gray-500" :content="helpText" class="mr-1" />
          <Link
            size="sm"
            weight="medium"
            decoration="underline"
            :content="linkText"
          />
        </p>
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
 * - Use it to show a simple newsletter with description
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

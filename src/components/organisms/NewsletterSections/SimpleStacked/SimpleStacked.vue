<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <Text
        size="3xl"
        weight="extrabold"
        color="gray-900"
        class="tracking-tight sm:text-4xl inline sm:block"
        :content="title"
      />
      <Text
        size="3xl"
        weight="extrabold"
        color="primary-600"
        class="tracking-tight sm:text-4xl inline sm:block"
        :content="subtitle"
      />
      <form class="mt-8 sm:flex">
        <TextInput
          :placeholder="placeholder"
          v-model="inputValue"
          custom-class="text-base"
        />
        <div class="mt-4 sm:mt-0 sm:ml-3">
          <Button :content="btnText" variant="primary" :onClick="onClick" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show a simple stacked newsletter
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
     * Use it to show subtitle
     */
    subtitle: {
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

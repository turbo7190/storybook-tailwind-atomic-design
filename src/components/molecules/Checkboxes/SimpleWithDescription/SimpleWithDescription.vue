<template>
  <fieldset>
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          :id="id"
          v-model="inputValue"
          aria-describedby="comments-description"
          :name="name"
          type="checkbox"
          class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
      </div>
      <div class="ml-3">
        <label :for="id">
          <Text
            size="sm"
            weight="medium"
            color="gray-700"
            :content="title"
            class="pr-6 text-sm font-medium text-gray-500 whitespace-nowrap"
          />
        </label>
        <label :for="id">
          <Text
            id="comments-description"
            size="sm"
            weight="medium"
            color="gray-500"
            :content="description"
          />
        </label>
      </div>
    </div>
    <Text
      v-if="helpText"
      size="sm"
      :content="helpText"
      class="mt-2"
      color="gray-500"
    />
  </fieldset>
</template>

<script>
/**
- Checkbox with text
- options to  title, description, helpText
**/
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
    shown below header.
    */
    title: {
      type: String,
      default: "",
    },
    /**
    shown below title.
    */
    description: {
      type: String,
      default: "",
    },
    /**
    state of checkbox.
    */
    value: {
      type: [Boolean, String],
      default: false,
    },
    /**
    unique identifier.
    */
    name: {
      type: String,
      default: "",
    },
    /**
    unique identifier.
    */
    id: {
      type: String,
      default: "",
    },
    /**
     * help text
     */
    helpText: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

<template>
  <div>
    <Text
      v-if="header"
      size="lg"
      weight="medium"
      color="gray-900"
      :content="header"
    />
    <fieldset class="border-t border-b border-gray-200">
      <div class="divide-y divide-gray-200">
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm">
            <Text
              for="comments"
              size="sm"
              weight="medium"
              color="gray-700"
              :content="title"
            />
            <Text
              id="comments-description"
              size="sm"
              weight="medium"
              color="gray-500"
              :content="description"
            />
          </div>
          <div class="ml-3 flex items-center h-5">
            <input
              :id="id"
              v-model="inputValue"
              aria-describedby="comments-description"
              :name="name"
              type="checkbox"
              class="
                focus:ring-primary-500
                h-4
                w-4
                text-primary-600
                border-gray-300
                rounded
              "
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
/**
- Checkbox with text
- options to header, title,description
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
    shown at top.
    */
    header: {
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
      type: Boolean,
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

<template>
  <div>
    <div class="flex items-center justify-between">
      <Text :content="label" size="sm" weight="medium" color="gray-900" />
      <Link
        v-if="showLink"
        :content="linkLabel"
        :color="linkColor"
        :url="linkUrl"
        size="sm"
        :hover-color="hoverLinkColor"
        weight="medium"
      />
    </div>

    <RadioGroup v-model="selected" class="mt-2">
      <RadioGroupLabel class="sr-only"> Choose a size</RadioGroupLabel>
      <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
        <RadioGroupOption
          as="template"
          v-for="size in items"
          :key="size.name"
          :value="size"
          :disabled="!size.inStock"
          v-slot="{ active, checked }"
        >
          <div
            :class="`${
              size.inStock
                ? 'cursor-pointer focus:outline-none'
                : 'opacity-25 cursor-not-allowed'
            } ${active ? 'ring-2 ring-offset-2 ring-primary-500' : ''} ${
              checked
                ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700'
                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
            } border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1`"
          >
            <RadioGroupLabel as="p">
              {{ size.name }}
            </RadioGroupLabel>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script>
/**
- Radio group as small cards
- options to customize link properties
- showLink to toggle link visibility
- disabledKey to disable a card
**/
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Text,
    Link,
  },
  props: {
    /**
     * list of items to show in radio group
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * for assigning predefined value
     */
    selectedItem: {
      type: Object,
      default: () => {},
    },
    /**
     * to display a heading
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * to toggle visibility of link
     */
    showLink: {
      type: Boolean,
      default: false,
    },
    /**
     * url for navigating to on clicking link
     */
    linkUrl: {
      type: String,
      default: "",
    },
    /**
     * text to show in link
     */
    linkLabel: {
      type: String,
      default: "",
    },
    /**
     * text color of  link
     */
    linkColor: {
      type: String,
      default: "",
    },
    /**
     * text color on hovering link
     */
    hoverLinkColor: {
      type: String,
      default: "",
    },
    /**
     * property to use for disabling selection of radio group from item
     */
    disabledKey: {
      type: String,
      default: "",
    },
  },
  computed: {
    selected: {
      get() {
        return this.selectedItem;
      },
      set(newValue) {
        this.$emit("update:selectedItem", newValue);
      },
    },
  },
};
</script>


<template>
  <div>
    <div class="flex items-center justify-between">
      <Text
        :content="label"
        size="sm"
        weight="medium"
        color="gray-900"
      />
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

    <RadioGroup v-model="selectedSize" class="mt-4">
      <RadioGroupLabel class="sr-only"> Choose a size</RadioGroupLabel>
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        <RadioGroupOption as="template" v-for="size in items" :key="size.name"
          :value="size" :disabled="!size.inStock" v-slot="{ active, checked }">
          <div
            :class="[size.inStock ? 'bg-white shadow-sm text-gray-900 cursor-pointer' : 'bg-gray-50 text-gray-200 cursor-not-allowed', active ? 'ring-2 ring-primary-500' : '', 'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
            <RadioGroupLabel as="p">
              {{ size.name }}
            </RadioGroupLabel>
            <div v-if="size.inStock"
              :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'absolute -inset-px rounded-md pointer-events-none']"
              aria-hidden="true" />
            <div v-else aria-hidden="true"
              class="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px">
              <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                viewBox="0 0 100 100" preserveAspectRatio="none"
                stroke="currentColor">
                <line x1="0" y1="100" x2="100" y2="0"
                  vector-effect="non-scaling-stroke" />
              </svg>
            </div>
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

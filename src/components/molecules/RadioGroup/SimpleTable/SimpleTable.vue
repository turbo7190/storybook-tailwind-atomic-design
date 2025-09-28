
<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">
      {{ label }}
    </RadioGroupLabel>
    <div class="relative bg-white rounded-md -space-y-px">
      <RadioGroupOption
        v-for="(item, index) in items"
        :key="item.name"
        v-slot="{ checked, active }"
        as="template"
        :value="item"
      >
        <div :class="[index === 0 ? 'rounded-tl-md rounded-tr-md' : '', index === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-primary-50 border-primary-200 z-10' : 'border-gray-200', 'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none']">
          <div class="flex items-center text-sm">
            <span
              :class="[checked ? 'bg-primary-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', 'h-4 w-4 rounded-full border flex items-center justify-center']"
              aria-hidden="true"
            >
              <span class="rounded-full bg-white w-1.5 h-1.5" />
            </span>
            <RadioGroupLabel
              as="span"
              :class="[checked ? 'text-primary-900' : 'text-gray-900', 'ml-3 font-medium']"
            >
              {{ item.name }}
            </RadioGroupLabel>
          </div>
          <RadioGroupDescription class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
            <Text
              size="sm"
              weight="medium"
              :color="`${checked ? 'primary-900' : 'gray-900'}`"
              :content="item.description"
            />
            <!-- <span :class="[checked ? 'text-primary-900' : 'text-gray-900', 'font-medium']">${{ item.priceMonthly }} / mo</span>
            {{ ' ' }}
            <span :class="checked ? 'text-primary-700' : 'text-gray-500'">(${{ item.priceYearly }} / yr)</span> -->
          </RadioGroupDescription>
          <RadioGroupDescription class="ml-6 pl-1 md:ml-0 md:pl-0 md:text-right">
            <!-- {{ item.limit }} -->
            <Text
              size="sm"
              weight="medium"
              :color="`${checked ? 'primary-700' : 'gray-500'}`"
              :content="item.description1"
            />
          </RadioGroupDescription>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    Text,
  },
  props: {
    /**
     * items to show as radiogroup options
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

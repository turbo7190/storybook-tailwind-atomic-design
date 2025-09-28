<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">
      {{ label }}
    </RadioGroupLabel>
    <div class="space-y-4">
      <RadioGroupOption
        v-for="item in items"
        :key="item.name"
        v-slot="{ checked, active }"
        as="template"
        :value="item"
      >
        <div
          :class="[
            checked ? 'border-transparent' : 'border-gray-300',
            active ? 'border-primary-500 ring-2 ring-primary-500' : '',
            'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none',
          ]"
        >
          <div class="flex items-center">
            <div class="text-sm">
              <RadioGroupLabel as="p" class="font-medium text-gray-900">
                {{ item.name }}
              </RadioGroupLabel>
              <RadioGroupDescription as="div" class="text-gray-500">
                {{ item.description }}
              </RadioGroupDescription>
            </div>
          </div>
          <RadioGroupDescription
            as="div"
            class="mt-2 flex sm:mt-0 sm:block sm:ml-4"
          >
            <Text
              size="sm"
              weight="medium"
              color="gray-900"
              custom-class="sm:text-right"
              :content="item.line1"
            />
            <Text
              weight="normal"
              color="gray-500"
              custom-class="ml-1 sm:text-right sm:ml-0"
              :content="item.line1"
            />
          </RadioGroupDescription>
          <div
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-primary-500' : 'border-transparent',
              'absolute -inset-px rounded-lg pointer-events-none',
            ]"
            aria-hidden="true"
          />
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

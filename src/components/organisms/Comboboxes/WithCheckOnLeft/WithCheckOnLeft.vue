<template>
  <Combobox
    v-model="selectedValue"
    as="div"
  >
    <ComboboxLabel class="block text-sm font-medium text-gray-700">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput
        class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
        :display-value="(item) => item.name"
        @change="query = $event.target.value"
      />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <Icon
          size="5"
          name="ChevronUpDownIcon"
          color="gray-400"
          hover-text-color="gray-400"
          aria-hidden="true"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredItems && filteredItems.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="item in filteredItems"
          :key="item.id"
          v-slot="{ active, selected }"
          :value="item"
          as="template"
        >
          <li :class="['relative cursor-default select-none py-2 pl-8 pr-4', active ? 'bg-primary-600 text-white' : 'text-gray-900']">
            <span :class="['block truncate', selected && 'font-semibold']">
              {{ item.name }}
            </span>

            <span
              v-if="selected"
              :class="['absolute inset-y-0 left-0 flex items-center pl-1.5', active ? 'text-white' : 'text-primary-600']"
            >
              <Icon
                size="5"
                name="CheckIcon"
                :color="`${active ? 'white' : 'primary-600'}`"
                aria-hidden="true"
              />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>


<script>
/**
- Combobox with text input to filter on basis of name property on default
- give filter key to provide filter on a custom property
- check icon is shown on left
**/
import { computed, ref } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/vue";

export default {
  components: {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
    Icon,
  },
  props: {
    /**
     * items to show as combobox options
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
     * to display a label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * to use as a filter
     */
    filterKey: {
      type: String,
      default: "name",
    },
  },
  setup(props, { emit }) {
    // console.log(props);
    const query = ref("");
    const selectedValue = computed({
      get() {
        return props.selectedItem;
      },
      set(newValue) {
        emit("update:selectedItem", newValue);
      },
    });
    const filteredItems = computed(() =>
      query.value === ""
        ? props.items
        : props.items.filter((item) => {
            return item[props.filterKey]
              .toLowerCase()
              .includes(query.value.toLowerCase());
          })
    );
    return {
      query,
      selectedValue,
      filteredItems,
    };
  },
};
</script>

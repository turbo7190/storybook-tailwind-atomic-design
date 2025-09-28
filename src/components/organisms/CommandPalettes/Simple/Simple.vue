<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''">
    <Dialog
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
      @close="open = false"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay
          class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
        />
      </TransitionChild>

      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="ease-in duration-200"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <Combobox
          as="div"
          class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black focus:outline-none ring-opacity-5 transition-all"
          @update:modelValue="onSelect"
        >
          <div class="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size="5"
              color="gray-500"
              class="pointer-events-none absolute top-3.5 left-4"
            />
            <ComboboxInput
              class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-black placeholder-gray-500 focus:ring-0 focus:outline-none sm:text-sm"
              placeholder="Search..."
              @change="query = $event.target.value"
            />
          </div>

          <ComboboxOptions
            v-if="filteredItems.length > 0"
            static
            class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
          >
            <ComboboxOption
              v-for="item in filteredItems"
              :key="item.id"
              :value="item"
              as="template"
              v-slot="{ active }"
            >
              <li
                :class="[
                  'cursor-default select-none px-4 py-2',
                  active && 'bg-primary-600 text-white',
                ]"
              >
                {{ item.name }}
              </li>
            </ComboboxOption>
          </ComboboxOptions>

          <Text
            v-if="query !== '' && filteredItems.length === 0"
            size="sm"
            color="gray-500"
            content="No people found."
            class="p-4"
          />
        </Combobox>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, ref } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
/**
 * - Use it to show a simple command palettes
 */
export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    Icon,
    Text,
  },
  props: {
    /**
     * use it for items
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const open = ref(true);
    const query = ref("");
    const filteredItems = computed(() =>
      query.value === ""
        ? []
        : this.items.filter((item) => {
            return item.name.toLowerCase().includes(query.value.toLowerCase());
          })
    );

    return {
      open,
      query,
      recent: [this.items[0]],
      filteredItems,
    };
  },
  methods: {
    onSelect(item) {
      window.location = item.url;
    },
  },
};
</script>

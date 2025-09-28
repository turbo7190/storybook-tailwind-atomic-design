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
          class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
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
              class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 focus:outline-none placeholder-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              @change="query = $event.target.value"
            />
          </div>

          <ComboboxOptions
            v-if="filteredItems.length > 0"
            static
            class="max-h-96 scroll-py-3 overflow-y-auto p-3"
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
                  'flex cursor-default select-none rounded-xl p-3',
                  active && 'bg-gray-100',
                ]"
              >
                <div
                  :class="[
                    'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                    item.color,
                  ]"
                >
                  <Icon
                    :name="item.icon"
                    isOutline
                    size="6"
                    :color="'white'"
                    class="mx-auto"
                  />
                </div>
                <div class="ml-4 flex-auto">
                  <Text
                    size="sm"
                    weight="semibold"
                    :color="active ? 'gray-900' : 'gray-700'"
                    :content="item.name"
                  />
                  <Text
                    size="sm"
                    :color="active ? 'gray-900' : 'gray-700'"
                    :content="item.description"
                  />
                </div>
              </li>
            </ComboboxOption>
          </ComboboxOptions>

          <div
            v-if="query !== '' && filteredItems.length === 0"
            class="py-14 px-6 text-center text-sm sm:px-14"
          >
            <Icon
              name="ExclamationCircleIcon"
              isOutline
              size="6"
              color="gray-400"
              class="mx-auto"
            />
            <Text
              size="sm"
              weight="semibold"
              color="gray-900"
              content="No results found"
              class="mt-4"
            />
            <Text
              size="sm"
              color="gray-500"
              content="No components found for this search term. Please try again."
              class="mt-2"
            />
          </div>
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
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
/**
 * - Use it to show a palette with images and descriptions
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
    Text,
    Icon,
  },
  methods: {
    onSelect(item) {
      window.location = item.url;
    },
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
      filteredItems,
    };
  },
};
</script>

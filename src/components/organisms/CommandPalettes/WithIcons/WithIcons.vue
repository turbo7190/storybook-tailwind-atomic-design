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
          class="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
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
            v-if="query === '' || filteredProjects.length > 0"
            static
            class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
          >
            <li class="p-2">
              <Text
                v-if="query === ''"
                size="xs"
                weight="semibold"
                color="gray-500"
                class="mt-4 mb-2 px-3"
                content="Recent searches"
              />
              <ul class="text-sm text-gray-700">
                <ComboboxOption
                  v-for="project in query === '' ? recent : filteredProjects"
                  :key="project.id"
                  :value="project"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'flex cursor-default select-none items-center rounded-md px-3 py-2',
                      active && 'bg-primary-600 text-white',
                    ]"
                  >
                    <Icon
                      name="FolderIcon"
                      isOutline
                      size="6"
                      :color="active ? 'white' : 'gray-400'"
                      class="flex-none"
                    />
                    <Text
                      class="ml-3 flex-auto truncate"
                      color="gray-700"
                      :content="project.name"
                    />
                    <Text
                      v-if="active"
                      color="gray-700"
                      class="ml-3 flex-none"
                      content="Jump to..."
                    />
                  </li>
                </ComboboxOption>
              </ul>
            </li>
            <li v-if="query === ''" class="p-2">
              <h2 class="sr-only">Quick actions</h2>
              <ul class="text-sm text-gray-700">
                <ComboboxOption
                  v-for="action in quickActions"
                  :key="action.shortcut"
                  :value="action"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'flex cursor-default select-none items-center rounded-md px-3 py-2',
                      active && 'bg-primary-600 text-white',
                    ]"
                  >
                    <Icon
                      :name="action.icon"
                      isOutline
                      size="6"
                      :color="active ? 'white' : 'gray-500'"
                    />
                    <Text
                      class="ml-3 flex-auto truncate"
                      color="gray-700"
                      :content="action.name"
                    />
                    <span
                      class="ml-3 flex-none text-xs font-semibold text-gray-400"
                    >
                      <kbd class="font-sans">⌘</kbd>
                      <kbd class="font-sans">{{ action.shortcut }}</kbd>
                    </span>
                  </li>
                </ComboboxOption>
              </ul>
            </li>
          </ComboboxOptions>

          <div
            v-if="query !== '' && filteredProjects.length === 0"
            class="py-14 px-6 text-center sm:px-14"
          >
            <Icon name="FolderIcon" size="6" color="gray-400" class="mx-auto" />
            <Text
              size="sm"
              color="gray-900"
              content="We couldn't find any projects with that term. Please try again."
              class="mt-4"
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
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
/**
 * - Use it to show a palettes with icons
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
    /**
     * use it for quick actions
     */
    quickActions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const open = ref(true);
    const query = ref("");
    const filteredProjects = computed(() =>
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
      filteredProjects,
    };
  },
  methods: {
    onSelect(item) {
      window.location = item.url;
    },
  },
};
</script>

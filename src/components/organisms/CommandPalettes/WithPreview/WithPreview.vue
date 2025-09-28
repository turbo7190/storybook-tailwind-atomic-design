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
          class="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
          v-slot="{ activeOption }"
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
            v-if="query === '' || filteredItems.length > 0"
            class="flex divide-x divide-gray-100"
            as="div"
            static
            hold
          >
            <div
              :class="[
                'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4',
                activeOption && 'sm:h-96',
              ]"
            >
              <Text
                v-if="query === ''"
                size="xs"
                weight="semibold"
                color="gray-500"
                class="mt-2 mb-4"
                content="Recent searches"
              />
              <div hold class="-mx-2 text-sm text-gray-700">
                <ComboboxOption
                  v-for="person in query === '' ? recent : filteredItems"
                  :key="person && person.id"
                  :value="person"
                  as="template"
                  v-slot="{ active }"
                >
                  <div
                    :class="[
                      'group flex cursor-default select-none items-center rounded-md p-2',
                      active && 'bg-gray-100 text-gray-900',
                    ]"
                  >
                    <Avatar
                      :src="person && person.imageUrl"
                      size="6"
                      isCircle
                      class="flex-none"
                      :username="person && person.name"
                    />
                    <Text
                      size="sm"
                      color="gray-700"
                      class="ml-3 flex-auto truncate"
                      :content="person && person.name"
                    />
                    <Icon
                      name="ChevronRightIcon"
                      v-if="active"
                      size="5"
                      color="gray-400"
                      class="ml-3 flex-none"
                    />
                  </div>
                </ComboboxOption>
              </div>
            </div>

            <div
              v-if="activeOption"
              class="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex"
            >
              <div class="flex-none p-6 text-center">
                <Avatar
                  :src="activeOption.imageUrl"
                  size="16"
                  isCircle
                  class="mx-auto"
                  :username="activeOption.imageUrl"
                />
                <Text
                  weight="semibold"
                  color="gray-900"
                  class="mt-3"
                  :content="activeOption.name"
                />
                <Text
                  size="sm"
                  color="gray-500"
                  class="leading-6"
                  :content="activeOption.role"
                />
              </div>
              <div class="flex flex-auto flex-col justify-between p-6">
                <dl
                  class="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700"
                >
                  <dt class="col-end-1">
                    <Text
                      size="sm"
                      weight="semibold"
                      color="gray-900"
                      content="Phone"
                    />
                  </dt>
                  <dd>{{ activeOption.phone }}</dd>
                  <dt class="col-end-1">
                    <Text
                      size="sm"
                      weight="semibold"
                      color="gray-900"
                      content="URL"
                    />
                  </dt>
                  <dd class="truncate">
                    <Link
                      :url="activeOption.url"
                      size=""
                      color="primary-600"
                      class="underline"
                      :content="activeOption.url"
                    />
                  </dd>
                  <dt class="col-end-1">
                    <Text
                      size="sm"
                      weight="semibold"
                      color="gray-900"
                      content="Email"
                    />
                  </dt>
                  <dd class="truncate">
                    <Link
                      :url="`mailto:${activeOption.email}`"
                      size=""
                      color="primary-600"
                      class="underline"
                      :content="activeOption.email"
                    />
                  </dd>
                </dl>
                <Button content="Send message" class="w-full mt-6" />
              </div>
            </div>
          </ComboboxOptions>

          <div
            v-if="query !== '' && filteredItems.length === 0"
            class="py-14 px-6 text-center text-sm sm:px-14"
          >
            <Icon name="UsersIcon" size="6" color="gray-400" class="mx-auto" />
            <Text
              size="sm"
              weight="semibold"
              color="gray-900"
              content="No people found"
              class="mt-4"
            />
            <Text
              size="sm"
              color="gray-500"
              content="We couldn’t find anything with that term. Please try again."
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
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Link from "../../../atoms/Link/Link.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show a palette with preview
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
    Avatar,
    Link,
    Button,
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
      recent: [this.items[0]],
      filteredItems,
    };
  },
};
</script>

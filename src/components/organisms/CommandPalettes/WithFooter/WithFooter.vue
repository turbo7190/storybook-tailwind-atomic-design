<template>
  <TransitionRoot :show="open" as="template" @after-leave="rawQuery = ''">
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
              @change="rawQuery = $event.target.value"
            />
          </div>

          <ComboboxOptions
            v-if="filteredProjects.length > 0 || filteredUsers.length > 0"
            static
            class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
          >
            <li v-if="filteredProjects.length > 0">
              <Text
                size="xs"
                weight="semibold"
                color="gray-900"
                content="Projects"
              />
              <ul class="-mx-4 mt-2 text-sm text-gray-700">
                <ComboboxOption
                  v-for="project in filteredProjects"
                  :key="project.id"
                  :value="project"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'flex cursor-default select-none items-center px-4 py-2',
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
                      :content="project.name"
                      color="gray-700"
                      class="ml-3 flex-auto truncate"
                    />
                  </li>
                </ComboboxOption>
              </ul>
            </li>
            <li v-if="filteredUsers.length > 0">
              <h2 class="text-xs font-semibold text-gray-900">Users</h2>
              <ul class="-mx-4 mt-2 text-sm text-gray-700">
                <ComboboxOption
                  v-for="user in filteredUsers"
                  :key="user.id"
                  :value="user"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'flex cursor-default select-none items-center px-4 py-2',
                      active && 'bg-primary-600 text-white',
                    ]"
                  >
                    <Avatar
                      :src="user.imageUrl"
                      :username="''"
                      size="6"
                      isCircle
                      class="flex-none"
                    />
                    <Text
                      size="sm"
                      color="gray-700"
                      class="ml-3 flex-auto truncate"
                      :content="user.name"
                    />
                  </li>
                </ComboboxOption>
              </ul>
            </li>
          </ComboboxOptions>

          <div
            v-if="rawQuery === '?'"
            class="py-14 px-6 text-center text-sm sm:px-14"
          >
            <Icon
              name="LifebuoyIcon"
              isOutline
              size="6"
              color="gray-400"
              class="mx-auto"
            />
            <Text
              size="sm"
              weight="semibold"
              color="gray-900"
              class="mt-4"
              content="Help with searching"
            />
            <Text
              size="sm"
              color="gray-500"
              class="mt-2"
              content="Use this tool to quickly search for users and projects across our entire
							platform. You can also use the search modifiers found in the footer below to limit the results to just
							users or projects."
            />
          </div>

          <div
            v-if="
              query !== '' &&
              rawQuery !== '?' &&
              filteredProjects.length === 0 &&
              filteredUsers.length === 0
            "
            class="py-14 px-6 text-center text-sm sm:px-14"
          >
            <Icon
              name="ExclamationTriangleIcon"
              size="6"
              color="gray-400"
              isOutline
              class="mx-auto"
            />
            <Text
              size="sm"
              weight="semibold"
              color="gray-900"
              class="mt-4"
              content="No results found"
            />
            <Text
              size="sm"
              color="gray-500"
              class="mt-2"
              content="We couldn’t find anything with that term. Please try again."
            />
          </div>

          <div
            class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700"
          >
            <Text size="xs" color="gray-700" content="Type" />
            <kbd
              :class="[
                'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                rawQuery.startsWith('#')
                  ? 'border-primary-600 text-primary-600'
                  : 'border-gray-400 text-gray-900',
              ]"
              >#</kbd
            >
            <Text
              size="xs"
              color="gray-700"
              content="for projects,"
              class="sm:hidden"
            />
            <Text
              size="xs"
              color="gray-700"
              content="to access projects,"
              class="hidden sm:inline"
            />
            <kbd
              :class="[
                'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                rawQuery.startsWith('>')
                  ? 'border-primary-600 text-primary-600'
                  : 'border-gray-400 text-gray-900',
              ]"
              >&gt;</kbd
            >
            <Text size="xs" color="gray-700" content="for users, and" />
            <kbd
              :class="[
                'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                rawQuery === '?'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-gray-400 text-gray-900',
              ]"
              >?</kbd
            >
            <Text size="xs" color="gray-700" content="for help." />
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
/**
 * - Use it to show a simple command palettes with footer
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
  },
  methods: {
    onSelect(item) {
      window.location = item.url;
    },
  },
  props: {
    /**
     * use it for projects
     */
    projects: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for users
     */
    users: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const open = ref(true);
    const rawQuery = ref("");
    const query = computed(() =>
      rawQuery.value.toLowerCase().replace(/^[#>]/, "")
    );
    const filteredProjects = computed(() =>
      rawQuery.value === "#"
        ? this.projects
        : query.value === "" || rawQuery.value.startsWith(">")
        ? []
        : this.projects.filter((project) =>
            project.name.toLowerCase().includes(query.value)
          )
    );
    const filteredUsers = computed(() =>
      rawQuery.value === ">"
        ? this.users
        : query.value === "" || rawQuery.value.startsWith("#")
        ? []
        : this.users.filter((user) =>
            user.name.toLowerCase().includes(query.value)
          )
    );
    return {
      open,
      rawQuery,
      query,
      filteredProjects,
      filteredUsers,
    };
  },
};
</script>

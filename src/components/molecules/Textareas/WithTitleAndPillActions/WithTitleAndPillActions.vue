<template>
  <form action="#" class="relative">
    <div
      class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500"
    >
      <label for="title" class="sr-only">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        class="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:outline-none px-3"
        placeholder="Title"
        v-model="inputTitleValue"
      />
      <label for="description" class="sr-only">Description</label>
      <textarea
        rows="2"
        name="description"
        id="description"
        v-model="inputDescriptionValue"
        class="block w-full border-0 py-0 px-3 resize-none placeholder-gray-500 sm:text-sm focus:outline-none"
        :placeholder="placeholder"
        :class="customClass"
      />

      <!-- Spacer element to match the height of the toolbar -->
      <div aria-hidden="true">
        <div class="py-2">
          <div class="h-9" />
        </div>
        <div class="h-px" />
        <div class="py-2">
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 inset-x-px">
      <!-- Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. -->
      <div class="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
        <Listbox as="div" v-model="assigned" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Assign </ListboxLabel>
          <div class="relative">
            <ListboxButton>
              <Badge
                :label="assigned.value === null ? 'Assign' : assigned.name"
                bgColor="gray-50"
                textColor="gray-500"
                px="3"
                iconName="UserCircleIcon"
                isLeft
                textSize="sm"
                iconSize="6"
              />
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="assignee in assignees"
                  :key="assignee.value"
                  :value="assignee"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      active ? 'bg-gray-100' : 'bg-white',
                      'cursor-default select-none relative py-2 px-3',
                    ]"
                  >
                    <div class="flex items-center">
                      <img
                        v-if="assignee.avatar"
                        :src="assignee.avatar"
                        alt=""
                        class="flex-shrink-0 h-5 w-5 rounded-full"
                      />
                      <Icon
                        v-else
                        name="UserCircleIcon"
                        size="5"
                        color="gray-400"
                      />
                      <span class="ml-3 block font-medium truncate">
                        {{ assignee.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="labelled" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Add a label </ListboxLabel>
          <div class="relative">
            <ListboxButton>
              <Badge
                :label="labelled.value === null ? 'Label' : labelled.name"
                bgColor="gray-50"
                :textColor="labelled.value === null ? 'gray-300' : 'gray-500'"
                px="3"
                iconName="TagIcon"
                isLeft
                textSize="sm"
                iconSize="6"
              />
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="label in labels"
                  :key="label.value"
                  :value="label"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      active ? 'bg-gray-100' : 'bg-white',
                      'cursor-default select-none relative py-2 px-3',
                    ]"
                  >
                    <div class="flex items-center">
                      <span class="block font-medium truncate">
                        {{ label.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="dated" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Add a due date </ListboxLabel>
          <div class="relative">
            <ListboxButton>
              <Badge
                :label="dated.value === null ? 'Due date' : dated.name"
                bgColor="gray-50"
                :textColor="dated.value === null ? 'gray-300' : 'gray-500'"
                px="3"
                iconName="CalendarIcon"
                isLeft
                textSize="sm"
                iconSize="6"
              />
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="dueDate in dueDates"
                  :key="dueDate.value"
                  :value="dueDate"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      active ? 'bg-gray-100' : 'bg-white',
                      'cursor-default select-none relative py-2 px-3',
                    ]"
                  >
                    <div class="flex items-center">
                      <span class="block font-medium truncate">
                        {{ dueDate.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div
        class="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3"
      >
        <div class="flex">
          <button
            type="button"
            class="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
          >
            <Icon
              name="PaperClipIcon"
              size="5"
              color="gray-400"
              class="-ml-1 mr-2 group-hover:text-gray-500"
            />
            <span class="text-sm text-gray-500 group-hover:text-gray-600 italic"
              >Attach a file</span
            >
          </button>
        </div>
        <div class="flex-shrink-0">
          <button-comp content="Create" variant="primary" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import ButtonComp from "../../../atoms/Button/Button.vue";
import Badge from "../../Badge/Basic/Basic.vue";
/**
 * - Use it when needs to show textarea with title and pill actions
 */
export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Icon,
    ButtonComp,
    Badge,
  },
  props: {
    /**
     * Use to show what textarea is for
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Placeholder of textarea
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it to apply extra class to textarea
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic value of title input
     */
    titleValue: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic value of description textarea
     */
    descriptionValue: {
      type: String,
      default: "",
    },
    /**
     * Use to show avatar
     */
    avatar: {
      type: String,
      default: "",
    },
    /**
     * Use for assignee actions list
     */
    assignees: {
      type: Array,
    },
    /**
     * Use for selected assigned action
     */
    assignedOption: {
      type: Object,
    },
    /**
     * Use for labels actions list
     */
    labels: {
      type: Array,
    },
    /**
     * Use for selected label action
     */
    labelledOption: {
      type: Object,
    },
    /**
     * Use for date actions list
     */
    dueDates: {
      type: Array,
    },
    /**
     * Use for selected date action
     */
    datedOption: {
      type: Object,
    },
    /**
     * Use for form title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use for form description
     */
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      labelled: this.labelledOption,
      assigned: this.assignedOption,
      dated: this.datedOption,
    };
  },
  computed: {
    inputTitleValue: {
      get() {
        return this.titleValue;
      },
      set(newValue) {
        this.$emit("update:titleValue", newValue);
      },
    },
    inputDescriptionValue: {
      get() {
        return this.descriptionValue;
      },
      set(newValue) {
        this.$emit("update:descriptionValue", newValue);
      },
    },
  },
};
</script>

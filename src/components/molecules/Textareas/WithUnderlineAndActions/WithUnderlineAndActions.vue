<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <Avatar :isCircle="true" :src="avatar" size="10" username="avatar" />
    </div>
    <div class="min-w-0 flex-1">
      <form action="#">
        <div class="border-b border-gray-200 focus-within:border-primary-600">
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea
            rows="3"
            name="comment"
            id="comment"
            v-model="inputValue"
            class="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-primary-600 focus:outline-none sm:text-sm"
            :placeholder="placeholder"
            :class="customClass"
          />
        </div>
        <div class="pt-2 flex justify-between">
          <div class="flex items-center space-x-5">
            <div class="flow-root">
              <button
                type="button"
                class="-m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
              >
                <Icon
                  name="PaperClipIcon"
                  :isOutline="true"
                  size="6"
                  color="gray-400"
                />
                <span class="sr-only">Attach a file</span>
              </button>
            </div>
            <div class="flow-root">
              <Listbox as="div" v-model="selected">
                <ListboxLabel class="sr-only"> Your mood </ListboxLabel>
                <div class="relative">
                  <ListboxButton
                    class="relative -m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span class="flex items-center justify-center">
                      <span v-if="selected.value === null">
                        <Icon
                          name="FaceSmileIcon"
                          :isOutline="true"
                          size="6"
                          color="gray-400"
                        />
                        <span class="sr-only"> Add your mood </span>
                      </span>
                      <span v-if="!(selected.value === null)">
                        <div
                          :class="[
                            selected.bgColor,
                            'w-8 h-8 rounded-full flex items-center justify-center',
                          ]"
                        >
                          <Icon :name="selected.icon" color="white" size="5" />
                        </div>
                        <span class="sr-only">{{ selected.name }}</span>
                      </span>
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="mood in moods"
                        :key="mood.value"
                        :value="mood"
                        v-slot="{ active }"
                      >
                        <li
                          :class="[
                            active ? 'bg-gray-100' : 'bg-white',
                            'cursor-default select-none relative py-2 px-3',
                          ]"
                        >
                          <div class="flex items-center">
                            <div
                              :class="[
                                mood.bgColor,
                                'w-8 h-8 rounded-full flex items-center justify-center',
                              ]"
                            >
                              <Icon
                                :name="mood.icon"
                                :color="mood.iconColor"
                                size="5"
                              />
                            </div>
                            <span class="ml-3 block font-medium truncate">
                              {{ mood.name }}
                            </span>
                          </div>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div class="flex-shrink-0">
            <button-comp content="Post" variant="primary" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import ButtonComp from "../../../atoms/Button/Button.vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
/**
 * - Use to show textarea with avatar and actions
 */
export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Icon,
    Avatar,
    ButtonComp,
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
     * Use to catch dynamic value of textarea
     */
    value: {
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
     * Use for actions list
     */
    moods: {
      type: Array,
    },
    /**
     * Use for selected action
     */
    selectedOption: {
      type: Object,
    },
  },
  data() {
    return {
      selected: this.selectedOption,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

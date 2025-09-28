<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden"
      @close="open = false"
    >
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
        >
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="pointer-events-auto w-screen max-w-md">
              <form
                class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
              >
                <div class="h-0 flex-1 overflow-y-auto">
                  <div class="bg-primary-700 py-6 px-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <Text
                        size="lg"
                        weight="medium"
                        color="white"
                        :content="title"
                      />
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-primary-700 focus:outline-none focus:ring-2 focus:ring-white"
                          @click="open = false"
                        >
                          <Icon
                            name="XMarkIcon"
                            size="6"
                            color="primary-200"
                            class="hover:text-white"
                          />
                        </button>
                      </div>
                    </div>
                    <Text
                      size="sm"
                      color="primary-300"
                      :content="description"
                      class="mt-1"
                    />
                  </div>
                  <div class="flex flex-1 flex-col justify-between">
                    <div class="divide-y divide-gray-200 px-4 sm:px-6">
                      <div class="space-y-6 pt-6 pb-5">
                        <div v-for="(form, i) in forms" :key="i">
                          <TextInput
                            v-if="!form.multiple"
                            :label="form.label"
                            v-model="form.value"
                          />
                          <TextArea
                            v-else
                            :label="form.label"
                            v-model="form.value"
                            customClass="border-black"
                          />
                        </div>

                        <div>
                          <Text
                            size="sm"
                            weight="medium"
                            color="gray-900"
                            content="Team Members"
                          />
                          <div class="mt-2">
                            <div class="flex space-x-2">
                              <a
                                v-for="person in team"
                                :key="person.email"
                                :href="person.href"
                                class="rounded-full hover:opacity-75"
                              >
                                <Avatar
                                  :src="person.imageUrl"
                                  :username="person.name"
                                  size="8"
                                  isCircle
                                />
                              </a>
                              <button
                                type="button"
                                class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                              >
                                <Icon
                                  name="PlusIcon"
                                  size="5"
                                  color="gray-400"
                                  class="hover:text-gray-500"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pt-4 pb-6">
                        <div class="flex text-sm">
                          <a
                            href="#"
                            class="group inline-flex items-center font-medium text-primary-600 hover:text-primary-900"
                          >
                            <Icon
                              name="LinkIcon"
                              size="5"
                              color="primary-500"
                              class="group-hover:text-primary-900"
                            />
                            <Text
                              size="sm"
                              weight="medium"
                              color="primary-600"
                              :content="linkText"
                              class="ml-2"
                            />
                          </a>
                        </div>
                        <div class="mt-4 flex text-sm">
                          <a
                            href="#"
                            class="group inline-flex items-center text-gray-500 hover:text-gray-900"
                          >
                            <Icon
                              name="QuestionMarkCircleIcon"
                              size="5"
                              color="gray-400"
                              class="group-hover:text-gray-500"
                            />
                            <Text
                              size="sm"
                              weight="medium"
                              color="gray-500"
                              :content="helpText"
                              class="ml-2"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-shrink-0 justify-end px-4 py-4 space-x-2">
                  <Button
                    :content="noBtnText"
                    variant="secondary"
                    :onClick="onNoClick"
                  />
                  <Button
                    :content="yesBtnText"
                    variant="primary"
                    :onClick="onYesClick"
                    class="rounded-md"
                  />
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import TextArea from "../../../molecules/Textareas/Simple/Simple.vue";
import RadioGroup from "../../../molecules/RadioGroup/ListWithDescription/ListWithDescription.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
/**
 * - Use it to show form that creates a project
 */
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    TextInput,
    TextArea,
    RadioGroup,
    Icon,
    Text,
    Button,
    Avatar,
  },
  props: {
    /**
     * Use it for title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it to show forms
     */
    forms: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it to show team members
     */
    team: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for link text
     */
    linkText: {
      type: String,
      default: "",
    },
    /**
     * Use it for help text
     */
    helpText: {
      type: String,
      default: "",
    },
    /**
     * Use it for yes button text
     */
    yesBtnText: {
      type: String,
      default: "",
    },
    /**
     * Use it for no button text
     */
    noBtnText: {
      type: String,
      default: "",
    },
    /**
     * Use it for yes button action
     */
    onYesClick: {
      type: Function,
      default: () => {},
    },
    /**
     * Use it for no button action
     */
    onNoClick: {
      type: Function,
      default: () => {},
    },
  },
  setup() {
    const open = ref(true);

    return {
      open,
    };
  },
};
</script>

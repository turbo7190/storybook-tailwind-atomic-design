<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden"
      @close="open = false"
    >
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
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
            <div class="pointer-events-auto relative w-96">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-500"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-500"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"
                >
                  <button
                    type="button"
                    class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    @click="open = false"
                  >
                    <Icon name="XMarkIcon" size="6" color="gray-300" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-full overflow-y-auto bg-white p-8">
                <div class="space-y-6 pb-16">
                  <div>
                    <div
                      class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg"
                    >
                      <img :src="file.image" alt="" class="object-cover" />
                    </div>
                    <div class="mt-4 flex items-start justify-between">
                      <div>
                        <Text
                          size="lg"
                          weight="medium"
                          color="gray-900"
                          :content="file.name"
                        />
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          :content="file.size + ' MB'"
                        />
                      </div>
                      <button
                        type="button"
                        class="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <Icon
                          name="HeartIcon"
                          isOutline
                          color="gray-400"
                          size="6"
                        />
                      </button>
                    </div>
                  </div>
                  <div>
                    <Text
                      weight="medium"
                      color="gray-900"
                      content="Information"
                    />
                    <dl
                      class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
                    >
                      <div
                        class="flex justify-between py-3 text-sm font-medium"
                      >
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Uploaded by"
                        />
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-900"
                          :content="file.creator"
                        />
                      </div>
                      <div
                        class="flex justify-between py-3 text-sm font-medium"
                      >
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Created"
                        />
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-900"
                          :content="file.createdAt"
                        />
                      </div>
                      <div
                        class="flex justify-between py-3 text-sm font-medium"
                      >
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Last modified"
                        />
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-900"
                          :content="file.updatedAt"
                        />
                      </div>
                      <div
                        class="flex justify-between py-3 text-sm font-medium"
                      >
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Dimensions"
                        />
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-900"
                          :content="file.dimensions"
                        />
                      </div>
                      <div
                        class="flex justify-between py-3 text-sm font-medium"
                      >
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-500"
                          content="Resolution"
                        />
                        <Text
                          size="sm"
                          weight="medium"
                          color="gray-900"
                          :content="file.resolution"
                        />
                      </div>
                    </dl>
                  </div>
                  <div>
                    <Text
                      weight="medium"
                      color="gray-900"
                      content="Description"
                    />
                    <div class="mt-2 flex items-center justify-between">
                      <Text
                        size="sm"
                        weight="normal"
                        color="gray-500"
                        content="Add a description to this image."
                        class="italic"
                      />
                      <button
                        type="button"
                        class="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <Icon name="PencilIcon" size="5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <Text
                      weight="medium"
                      color="gray-900"
                      content="Shared with"
                    />
                    <ul
                      role="list"
                      class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200"
                    >
                      <li
                        v-for="(user, i) in file.users"
                        :key="i"
                        class="flex items-center justify-between py-3"
                      >
                        <div class="flex items-center">
                          <Avatar
                            :src="user.avatar"
                            :username="user.avatar"
                            isCircle
                            size="8"
                          />
                          <Text
                            size="sm"
                            weight="medium"
                            color="gray-900"
                            class="ml-4"
                            :content="user.name"
                          />
                        </div>
                        <Button
                          content="Remove"
                          variant="secondary"
                          class="ml-6 border-none text-primary-600 hover:text-primary-500 pr-0"
                        />
                      </li>
                      <li class="flex items-center justify-between py-2">
                        <button
                          type="button"
                          class="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <span
                            class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400"
                          >
                            <Icon
                              name="PlusIcon"
                              size="5"
                              color="gray-400"
                              isOutline
                            />
                          </span>
                          <Text
                            size="sm"
                            weight="medium"
                            color="primary-600"
                            class="group-hover:text-primary-500 ml-4"
                            :content="'Share'"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="flex space-x-3">
                    <Button
                      v-for="(button, id) in file.buttons"
                      :key="id"
                      :content="button.label"
                      :variant="button.type"
                      class="rounded-md flex flex-1"
                    />
                  </div>
                </div>
              </div>
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
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
/**
 * - Use it to show file detail form
 */
export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    Icon,
    Text,
    Button,
    Avatar,
  },
  props: {
    /**
     * Use it for file
     */
    file: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    const open = ref(true);

    return {
      open,
    };
  },
};
</script>

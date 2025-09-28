<template>
  <div
    v-show="showConfirmModal"
    id="confirmModal"
    class="fixed z-10 inset-0 overflow-y-auto modal fade"
    role="dialog"
    aria-labelledby="deliverModalLabel"
  >
    <div class="flex items-center sm:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200 transform"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
      </transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" />&#8203;
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="transition ease-in duration-200 transform"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div class="inline-block w-full bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div class="content-center">
            <div class="flex justify-end">
              <Icons
                name="XMarkIcon"
                size="6"
                color="gray-400"
                custom-class="hover:text-gray-500 cursor-pointer absolute top-4 right-4 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                @click="onCloseModal"
              />
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <Text
                :content="title"
                size="lg"
                weight="medium"
                color="gray-900"
                custom-class="leading-6"
              />
              <div class="mt-2">
                <Text
                  :content="message"
                  size="sm"
                  color="gray-500"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <Button
              :content="yesTxt"
              variant="primary"
              custom-class="rounded-md"
              :onClick="onYes"
            />
            <Button
              :content="noTxt"
              variant="secondary"
              custom-class="rounded-md"
              :onClick="onNo"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
import Icons from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show a confirm modal with message and buttons
 */
export default {
    components: {
        Text,
        Button,
        Icons
    },
    props: {
      /**
       * use it to show title
       */
      title: {
        type: String,
        default: ''
      },
      /**
       * use it for content
       */
      message: {
        type: String,
        default: ''
      },
      /**
       * use it for confirm button text
       */
      yesTxt: {
        type: String,
        default: ''
      },
      /**
       * use it for cancel button text
       */
      noTxt: {
        type: String,
        default: ''
      },
      /**
       * use it for confirm button action
       */
      onYes: {
        type: Function,
        default: () => {}
      },
      /**
       * use it for cancel button action
       */
      onNo: {
        type: Function,
        default: () => {}
      },
      /**
       * use it to show modal
       */
      showConfirmModal: {
        type: Boolean,
        default: true,
      },
      /**
       * use it to handle modal closing
       */
      onCloseModal: {
        type: Function,
        default: () => {}
      }
    }
  }
</script>

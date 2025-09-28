<template>
  <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-primary-600 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-primary-800">
              <Icon :name="icon" size="6" color="white" isOutline />
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="inline">
                {{ content }}
              </span>
            </p>
          </div>
          <div
            class="
              order-3
              mt-2
              flex-shrink-0
              w-full
              sm:order-2 sm:mt-0 sm:w-auto
            "
          >
            <Button :content="btnText" variant="secondary" :onClick="onClick" />
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              class="
                -mr-1
                flex
                p-2
                rounded-md
                hover:bg-primary-500
                focus:outline-none focus:ring-2 focus:ring-white
              "
            >
              <Icon name="XMarkIcon" size="6" color="white" isOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";

/**
 * - Use it when show banner at bottom
 */
export default {
  components: {
    Button,
    Icon,
  },
  props: {
    /**
     * Use for showing banner content
     */
    content: {
      type: String,
    },
    /**
     * Use for button text
     */
    btnText: {
      type: String,
    },
    /**
     * Use for showing banner icon
     */
    icon: {
      type: String,
    },
    /**
     * Use for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

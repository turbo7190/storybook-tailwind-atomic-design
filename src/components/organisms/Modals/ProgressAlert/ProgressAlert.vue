<template>
  <div
    class="fixed bottom-0 right-10 shadow rounded border border-primary-500 boder-b-none w-80"
    v-if="isShow"
  >
    <div
      class="bg-black flex justify-between items-center pl-4 py-2 pr-2 rounded-t"
    >
      <div class="text-white text-sm">
        Uploading {{ files && files.length }} items
      </div>
      <!-- <div class="text-white text-sm" v-else>1 item uploaded</div> -->
      <div class="flex items-center justify-center space-x-1">
        <a
          class="cursor-pointer w-7 h-7 rounded-full flex justify-center items-center hover:bg-gray-700"
          @click="onCollapsed"
        >
          <Icon
            :name="isCollapsed ? 'ChevronUpIcon' : 'ChevronDownIcon'"
            size="5"
            color="white"
          />
        </a>
        <a
          class="cursor-pointer w-7 h-7 rounded-full flex justify-center items-center hover:bg-gray-700"
          @click="onClose"
        >
          <Icon :name="'XMarkIcon'" color="white" size="5" />
        </a>
      </div>
    </div>
    <div class="px-3 pt-4 pb-2" v-if="!isCollapsed">
      <div
        class="bg-white pb-2 flex justify-between items-center"
        v-for="(file, i) in files"
        :key="i"
      >
        <div class="flex items-center justify-center space-x-4">
          <Icon :name="'CloudArrowUpIcon'" size="4" color="gray-500" />
          <Text size="xs" color="gray-500" :content="file && file.file.name" />
        </div>
        <div class="flex items-center justify-center mr-3">
          <svg
            role="status"
            class="w-5 h-5 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!(file && file.isUploaded)"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#6600ed"
            />
          </svg>
          <Icon :name="'CheckCircleIcon'" size="5" color="green-500" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    Icon,
    Text,
  },
  props: {
    /**
     * show status
     */
    isShow: {
      type: Boolean,
      default: true,
    },
    /**
     * collapse status
     */
    isCollapsed: {
      type: Boolean,
      default: false,
    },
    /**
     * collapse event
     */
    onCollapsed: {
      type: Function,
      default: () => {},
    },
    /**
     * close event
     */
    onClose: {
      type: Function,
      default: () => {},
    },
    /**
     * files
     */
    files: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

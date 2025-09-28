<template>
  <footer class="bg-white">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in logos"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <Icon
            :name="item.icon"
            class="h-6 w-6"
            aria-hidden="true"
            color="gray-400"
          />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
export default {
  components: {
    Icon,
  },
  props: {
    logos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

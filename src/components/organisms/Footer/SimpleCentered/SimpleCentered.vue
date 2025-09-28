<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div v-for="item in items" :key="item.title" class="px-5 py-2">
          <Link
            size="medium"
            color="gray-500"
            :hoverColor="'gray-900'"
            :url="item.href"
            :content="item.title"
          />
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
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
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2020 Workflow, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
export default {
  components: {
    Link,
    Icon,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    logos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

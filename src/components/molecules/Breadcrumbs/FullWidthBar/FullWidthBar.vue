<template>
  <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
    <!-- mx-auto --removed as it added extra space at start -->
    <ol
      role="list"
      class="max-w-screen-xl w-full px-4 flex space-x-4 sm:px-6 lg:px-8"
    >
      <li class="flex">
        <div class="flex items-center">
          <a href="#">
            <Icon
              :name="iconName"
              color="gray-400"
              hoverTextColor="gray-500"
              size="5"
              class="flex-shrink-0"
              :aria-hidden="true"
            />
            <span class="sr-only">{{ iconName }}</span>
          </a>
        </div>
      </li>
      <li v-for="item in items" :key="item.name" class="flex">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <Link
            :url="item.href"
            :content="item.name"
            color="gray-500"
            hover-color="gray-700"
            size="sm"
            weight="medium"
            customClass="ml-4"
            :aria-current="!item.current ? undefined : 'page'"
          />
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
/**
- Use for showing the navigation trail in app
- options to customize icon 
- navigation to pages is handled by links so provide url in items array with href for each item
**/
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";

export default {
  components: {
    Icon,
    Link,
  },
  props: {
    /**
      array of page items
      */
    items: {
      type: Array,
      default: () => [],
    },
    /**
      icon to be shown at start of bar.Default is set to HomeIcon
    */
    iconName: {
      type: String,
      default: "HomeIcon",
    },
  },
};
</script>

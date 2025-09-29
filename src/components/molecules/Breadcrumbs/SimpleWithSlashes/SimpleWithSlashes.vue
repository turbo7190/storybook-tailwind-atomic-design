<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li v-for="item in items" :key="item.name">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-5 w-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
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
      icon to be shown at start of bar
    */
    iconName: {
      type: String,
      default: "HomeIcon",
    },
  },
};
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
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
      <li v-for="item in items" :key="item.name">
        <div class="flex items-center">
          <Icon
            name="ChevronRightIcon"
            color="gray-400"
            hoverTextColor="gray-500"
            size="5"
            class="flex-shrink-0"
            :aria-hidden="true"
          />
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
    Link,
    Icon,
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

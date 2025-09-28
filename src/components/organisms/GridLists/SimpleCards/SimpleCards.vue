<template>
  <div>
    <Text
      :content="title"
      color="gray-500"
      size="xs"
      weight="medium"
      decoration="uppercase"
      custom-class="tracking-wide"
    />
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="item in items"
        :key="item.name"
        class="col-span-1 flex shadow-sm rounded-md"
      >
        <div
          :class="[item.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']"
        >
          {{ item.name.split(' ').length > 1 ? item.name.split(' ')[0][0].toUpperCase() + item.name.split(' ')[1][0].toUpperCase() : item.name.split(' ')[0][0].toUpperCase() }}
        </div>
        <div
          class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md"
        >
          <div class="flex-1 px-4 py-2">
            <Link
              :url="item.href"
              color="gray-900"
              size="sm"
              weight="medium"
              hover-color="gray-600"
              :content="item.name"
              custom-class="truncate"
            />
            <Text
              color="gray-500"
              size="sm"
              :content="item.description"
              custom-class="truncate"
            />
            <!-- <a
                :href="item.href"
                class="text-gray-900 font-medium hover:text-gray-600"
              >{{ item.name }}</a> -->
            <!-- <p class="text-gray-500">
              {{ item.members }} Members
            </p> -->
          </div>
          <div class="flex-shrink-0 pr-2 relative">
            <DropDownWithMinIcon
              :items="item.actionItems"
              :menu-item-clicked="menuItemClicked"
              custom-class="absolute right-3"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * cards with name and description, initials derived from name
 */
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
import DropDownWithMinIcon from "../../../molecules/Dropdown/DropdownWithMinIcon/DropdownWithMinIcon.vue";

export default {
  components: {
    Link,
    Text,
    DropDownWithMinIcon,
  },
  props: {
    /**
     * header text to show on top of cards
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * list of items to show cards
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * action on clicking menu item
     */
    menuItemClicked: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

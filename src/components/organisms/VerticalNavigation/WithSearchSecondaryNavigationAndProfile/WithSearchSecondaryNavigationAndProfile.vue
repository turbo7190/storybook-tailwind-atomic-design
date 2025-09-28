<template>
  <nav
    class="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
    aria-label="Global"
  >
    <div class="h-16 flex items-center justify-between px-4 sm:px-6">
      <a href="#">
        <Image
          :src="logo.src"
          width="auto"
          height="8"
          :alt="logo.title"
          class="block"
        />
      </a>
      <button
        type="button"
        class="-mr-2 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
        @click="closeButtonClicked"
      >
        <Icon
          name="XMarkIcon"
          size="6"
          color="gray-400"
          is-outline
          hover-text-color="gray-500"
          aria-hidden="true"
        />
      </button>
    </div>
    <div class="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
      <div class="relative text-gray-400 focus-within:text-gray-500">
        <label for="mobile-search" class="sr-only">Search all inboxes</label>
        <TextInput
          id="search-field-mobile"
          v-model:value="searchText"
          custom-class="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-primary-600 focus:ring-primary-600"
          placeholder="Search"
          type="search"
          name="search"
          @change="searchTextChanged()"
        />
        <div
          class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
        >
          <Icon
            name="MagnifyingGlassIcon"
            size="5"
            color="gray-400"
            hover-text-color="gray-500"
          />
        </div>
      </div>
    </div>
    <div class="max-w-8xl mx-auto py-3 px-2 sm:px-4">
      <div v-for="item in navigation" :key="item.name">
        <Link
          :href="item.href"
          size="base"
          color="gray-900"
          hover-bg="gray-100"
          weight="medium"
          custom-class="block rounded-md py-2 px-3"
          :content="item.name"
          @click.prevent="itemClicked(item)"
        />
        <Link
          v-for="child in item.children"
          :key="child.name"
          :href="child.href"
          size="base"
          color="gray-500"
          hover-bg="gray-100"
          weight="medium"
          custom-class="block rounded-md py-2 pl-5 pr-3"
          :content="child.name"
          @click.prevent="itemClicked(item, child)"
        />
      </div>
    </div>
    <div class="border-t border-gray-200 pt-4 pb-3">
      <div class="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
        <AvatarText
          :src="user.avatar"
          :title="user.name"
          :subtitle="user.role"
          :username="user.name"
          subtitle-color="gray-500"
          title-color="gray-800"
        />
        <a
          class="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
          @click="notificationClicked"
        >
          <span class="sr-only">View notifications</span>
          <Icon
            name="BellIcon"
            is-outline
            size="6"
            color="gray-400"
            hover-text-color="gray-500"
          />
        </a>
      </div>
      <div class="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
        <Link
          v-for="item in userNavigation"
          :key="item.name"
          size="base"
          color="gray-900"
          hover-bg="gray-50"
          weight="medium"
          custom-class="block rounded-md py-2 px-3"
          :content="item.name"
          @click.prevent="item.action"
        />
      </div>
    </div>
  </nav>
</template>

<script>
/**
 * Search bar
 * avatar with user options
 * notification icon with action
 * navigation with action
 */
import { ref } from "vue";
import Image from "../../../atoms/Image/Image.vue";
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";

export default {
  components: {
    Image,
    Link,
    TextInput,
    Icon,
    AvatarText,
  },
  props: {
    /**
     * Use it to show logo
     */
    logo: {
      type: Object,
      default: () => {},
    },
    /**
     * close button clicked
     */
    closeButtonClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * Use it to show navigation list
     */
    userNavigation: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it to show navigation list
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it to show user profile
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * function on clicking an item
     */
    itemClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * action called on changing search input text
     */
    searchInputChange: {
      type: Function,
      default: () => {},
    },
    /**
     * action on notification button
     */
    notificationClicked: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const searchText = ref("");
    const searchTextChanged = () => {
      props.searchInputChange(searchText.value);
    };
    return {
      searchText,
      searchTextChanged,
    };
  },
};
</script>

<template>
  <div>
    <div>
      <nav aria-label="Back">
        <a
          class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
          @click="$router.go(-1)"
        >
          <Icon
            name="ChevronLeftIcon"
            size="5"
            color="gray-400"
            class="flex-shrink-0 -ml-1 mr-1"
          />
          Back
        </a>
      </nav>
      <!-- <breadcrumb :breadcrumbs="$route.meta.breadcrumbs"/> -->
    </div>
    <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <Text
          size="2xl"
          weight="bold"
          color="gray-900"
          class="leading-7 sm:text-3xl sm:truncate"
          :content="title"
        />
        <Meta :meta="meta" />
      </div>
      <div
        class="mt-4 flex-shrink-0 flex items-center md:mt-0 md:ml-4"
        v-if="onAdd"
      >
        <a class="cursor-pointer"
          ><Icon name="CogIcon" size="7" color="primary-600"
        /></a>
        <CustomButton
          :content="'Add ' + title"
          @click="onAdd"
          class="mx-2 rounded-md"
        />
      </div>
    </div>
    <div class="flex jusitfy-end items-end mt-4 w-full" v-if="!isNotShowSub">
      <div class="flex flex-1" />
      <div class="w-80 flex items-center">
        <a class="mx-3 cursor-pointer relative z-50">
          <Icon
            name="FunnelIcon"
            isOutline
            size="7"
            color="primary-600"
            @click="() => setShow(true)"
          />
          <advanced-search
            :fields="fields"
            :onSearch="onSearch"
            :isShow="isShow"
            :onClose="() => setShow(false)"
          />
        </a>
        <CustomInput
          placeholder="Type something..."
          class="w-64 self-end"
          v-model:value="inputValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../../../atoms/Button/Button.vue";
import Meta from "../../../molecules/Meta/Meta.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import CustomInput from "../../../molecules/Inputs/Component/Component.vue";
import AdvancedSearch from "../../../organisms/FormLayouts/AdvancedSearch/AdvancedSearch.vue";
import Text from "../../../atoms/Text/Text.vue";
/**
 * - Use it to show page header with title, meta, breadcrumbs, and search.
 */
export default {
  components: {
    Icon,
    CustomButton,
    Meta,
    CustomInput,
    AdvancedSearch,
    Text,
  },
  props: {
    /**
     * use it for title
     */
    title: {
      type: String,
      default: () => {},
    },
    /**
     * use it for adding item
     */
    onAdd: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for removing item
     */
    onRemove: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for meta items
     */
    meta: {
      type: Array,
      default: () => [],
    },
    /**
     * use it to show sidebar
     */
    onShow: {
      type: Function,
      default: () => {},
    },
    /**
     * use it for search action
     */
    onSearch: {
      type: Function,
      default: () => {},
    },
    /**
     * use it whether or not show sub header
     */
    isNotShowSub: {
      type: Boolean,
      default: false,
    },
    setShow: {
      type: Function,
      default: () => {},
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    fields: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      // getter
      get() {
        return this.value;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

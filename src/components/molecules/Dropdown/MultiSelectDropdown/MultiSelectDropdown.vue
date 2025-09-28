<template>
  <div
    v-click-outside="() => isOpen = false"
    class="space-y-2"
  >
    <Text
      v-if="label"
      size="xs"
      weight="semibold"
      :content="label"
    />
    <div
      class="relative z-0 flex flex-wrap flex-shrink w-full px-2 py-2 border rounded-md min-h-10 hover:border-primary-600"
      style="min-height: 40px;"
      @click="isOpen = !isOpen"
    >
      <div
        v-for="item in selectedItems"
        :key="item"
        class="flex items-center justify-center h-full px-2 py-1 m-1 text-xs text-white bg-primary-600 rounded"
      >
        {{ item }}
        <Icon
          name="XMarkIcon"
          size="3"
          color="white"
          custom-class="ml-1 cursor-pointer"
          @click.stop="onRemove(item)"
        />
      </div>
      <Icon
        :name="isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'"
        color="gray-500"
        size="5"
        custom-class="absolute right-3 top-3"
      />
    </div>
    <div
      v-if="isOpen"
      class="z-30 bg-white border"
    >
      <input
        ref="keyword"
        v-model="keyword"
        type="text"
        class="w-full px-2 py-2 text-sm border-none outline-none"
        placeholder="Type to find an option"
        @keyup.enter="handleAdding"
      >
      <a
        v-for="(item, id) in filterItems()"
        :key="item"
        :class="(keyword && id === 0) ? 'bg-gray-100' : ''"
        class="flex items-center w-full px-2 py-2 text-sm cursor-pointer hover:bg-primary-600 hover:text-white"
        @click="onSelect(item)"
      >
        {{ item }}
      </a>
      <div
        class="mx-2 bg-gray-200"
        style="height: 1px;"
      />
      <button
        class="flex items-center w-full px-2 py-2 text-sm text-green-500 hover:bg-primary-600 hover:text-white"
        :class="keyword && filterItems().length === 0 && 'bg-gray-100'"
        @click="onAdd"
      >
        + Add {{ keyword && keyword.length > 0 ? `"${keyword}""` : 'New' }}
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import vClickOutside from "click-outside-vue3";

export default {
  components: {
    Icon,
    Text,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      items: this.options,
      selectedItems: [],
      keyword: null,
      isOpen: false,
    };
  },
  methods: {
    onAdd() {
      if (this.keyword) {
        this.selectedItems.push(this.keyword);
        this.updateSelected();
        this.items.push(this.keyword);
        this.keyword = null;
      } else {
        this.$refs.keyword.focus();
      }
    },
    onSelect(item) {
      this.selectedItems.push(item);
      this.updateSelected();
    },
    filterItems() {
      const items = this.items.filter(
        (item) => !this.selectedItems.find((s) => s === item)
      );
      if (this.keyword && items?.length > 0) {
        return items.filter((i) =>
          i?.toLowerCase()?.includes(this.keyword?.toLowerCase())
        );
      } else {
        return items;
      }
    },
    onRemove(item) {
      const index = this.selectedItems.findIndex((s) => s === item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
        this.updateSelected();
      }
    },
    handleAdding() {
      if (this.keyword?.length > 0 && this.filterItems().length === 0) {
        this.selectedItems.push(this.keyword);
        this.updateSelected();
        this.items.push(this.keyword);
        this.keyword = null;
      } else if (this.keyword?.length > 0 && this.filterItems().length > 0) {
        const item = this.filterItems()[0];
        this.selectedItems.push(item);
        this.updateSelected();
        this.items.push(item);
        this.keyword = null;
      }
    },
    updateSelected() {
      this.$emit("update:selected", this.selectedItems);
    },
  },
};
</script>

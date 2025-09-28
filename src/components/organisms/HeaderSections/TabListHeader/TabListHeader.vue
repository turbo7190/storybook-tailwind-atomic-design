<template lang="html">
  <div class="flex justify-end items-center mb-3">
    <div class="flex items-center w-96">
      <a
        class="cursor-pointer mr-3"
        v-if="isSuperAdmin"
        @click="onOpenSetting()"
        ><Icon name="CogIcon" size="7" color="primary-600"
      /></a>
      <Button class="rounded-md" @click="onShowTabModal()" content="Add" />
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
      <Input
        placeholder="Type something..."
        custom-class="w-64"
        :is-search="true"
        v-model:value="inputValue"
      />
    </div>
  </div>
</template>

<script>
import Input from "../../../molecules/Inputs/Component/Component.vue";
import Button from "../../../atoms/Button/Button.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import AdvancedSearch from "../../../organisms/FormLayouts/AdvancedSearch/AdvancedSearch.vue";
/**
 * - Use it to show tab list header
 */
export default {
  props: {
    /**
     * seach action
     */
    onSearch: {
      type: Function,
      default: () => {},
    },
    /**
     * item
     */
    item: {
      type: Object,
      default: () => {},
    },
    isSuperAdmin: {
      type: Boolean,
      default: true,
    },
    onOpenSetting: {
      type: Function,
      default: () => {},
    },
    onShowTabModal: {
      type: Function,
      default: () => {},
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    setShow: {
      type: Function,
      default: () => {},
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
  components: {
    Input,
    AdvancedSearch,
    Button,
    Icon,
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

<template>
  <div class="text-center">
    <Icon :name="icon" size="12" isOutline color="gray-400" class="mx-auto" />
    <Text
      size="sm"
      weight="medium"
      color="gray-900"
      class="mt-2"
      :content="title"
    />
    <Text size="sm" color="gray-500" class="mt-1" :content="description" />
    <div class="mt-6">
      <Button
        :iconName="btnIcon"
        iconSize="5"
        :content="btnText"
        variant="primary"
        leading
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
/**
 * - Use it to show a simple empty state
 */
export default {
  components: {
    Text,
    Button,
    Icon,
  },
  props: {
    /**
     * Use it for state icon
     */
    icon: {
      type: String,
      default: "FolderPlusIcon",
    },
    /**
     * Use it for state title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for state description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it for button text
     */
    btnText: {
      type: String,
      default: "",
    },
    /**
     * Use it for button icon
     */
    btnIcon: {
      type: String,
      description: "PlusIcon",
    },
    /**
     * Use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

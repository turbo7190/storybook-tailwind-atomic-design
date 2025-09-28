<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
    <div v-if="items.length" class="space-x-2">
      <template v-for="(item, index) in items" :key="index">
        <Button
          :type="type"
          :variant="variant"
          :customClass="
            index === 0
              ? 'rounded-l-md'
              : index === items.length - 1
              ? 'rounded-r-md'
              : ''
          "
        >
          <Icon
            :size="size"
            :color="color"
            :name="item"
            :hoverTextColor="hoverTextColor"
          />
        </Button>
      </template>
    </div>
  </span>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";

export default {
  name: "OnlyIcon",
  props: {
    /**
             used to provide type like button or submit. By default button is set.
             */
    type: {
      type: String,
      default: "button",
    },
    /**
             used to provide type of array.
             */
    items: {
      type: Array,
      default: () => [],
    },
    /**
             switch between different variants i.e. primary, secondary, success, danger and themed. By default button is
             primary
             */
    variant: {
      type: String,
      default: "primary",
    },
    /**
             color of icon. default is black
             */
    color: {
      type: String,
      default: "white",
    },
    /**
             sets width and height of an icon. Default is 5
             */
    size: {
      type: [String, Number],
      default: 6,
    },
    /**
             for providing onHover color
             */
    hoverTextColor: {
      type: String,
      default: "white",
    },
  },
  components: {
    Button,
    Icon,
  },
};
</script>

<style>
.rounded-none {
  border-radius: 0 !important;
}

.rounded-r-md {
  border-top-right-radius: 0.375rem !important;
  border-bottom-right-radius: 0.375rem !important;
}

.rounded-l-md {
  border-top-left-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
}
</style>

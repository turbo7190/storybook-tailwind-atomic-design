<template>
  <div class="flex -space-x-1 overflow-hidden" v-if="stackType === 'B2T'">
    <Avatar
      v-for="item in items"
      :key="item.id"
      :size="item.size"
      :src="item.src"
      :username="item.username"
      is-circle
      class="ring-2 ring-white"
    ></Avatar>
  </div>
  <div class="flex -space-x-1 relative z-0 overflow-hidden" v-else>
    <Avatar
      v-for="(item, index) in items"
      :key="item.id"
      :size="item.size"
      :src="item.src"
      :username="item.username"
      is-circle
      :class="`relative z-${(items.length - index) * 10} ring-2 ring-white`"
    ></Avatar>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Avatar from "../../atoms/Avatar/Avatar.vue";

export default {
  name: "AvatarGroup",
  components: {
    Avatar,
  },
  props: {
    size: { type: Number, required: false },
    items: {
      type: Array,
      default: () => [],
    },
    stackType: { type: String },
  },
  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    };
  },
};
</script>

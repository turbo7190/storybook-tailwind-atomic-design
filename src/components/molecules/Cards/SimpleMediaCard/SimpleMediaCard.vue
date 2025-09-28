<template>
  <div
    class="rounded-md border border-gray-300 mb-4 inline-block"
    style="max-width: 250px; min-width: 250px"
  >
    <div
      class="h-36 border-b border-gray-300 flex justify-center items-center medias-center relative w-full"
    >
      <img
        :src="get(media, 'member.source')"
        class="w-full h-full object-cover rounded-t-md"
        v-if="get(media, 'member.type') === 'IMAGE'"
      />
      <img
        :src="get(media, 'member.avatar')"
        class="w-full h-full object-cover rounded-t-md"
        v-if="get(media, 'member.type') === 'VIDEO'"
      />
      <a
        class="cursor-pointer absolute z-20"
        v-if="get(media, 'member.type') === 'VIDEO'"
        @click="() => onClick(media.member)"
      >
        <Icon name="PlayIcon" style="color: #000000b3" class="w-10 h-10" />
      </a>
    </div>
    <div class="px-2 py-3">
      <div class="grid grid-cols-8 gap-2">
        <Icon
          size="5"
          isOutline
          color="gray-500"
          :name="
            get(media, 'member.type') === 'IMAGE'
              ? 'CameraIcon'
              : get(media, 'member.type') === 'VIDEO'
              ? 'VideoCameraIcon'
              : 'DocumentIcon'
          "
          style="margin-top: 1px"
          class="col-span-1"
        />
        <Text
          size="sm"
          color="gray-600"
          class="col-span-7"
          :content="get(media, 'member.name', '')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import { get } from "lodash-es";
/**
 * - Use it to show media card with thumbnail
 */
export default {
  components: {
    Icon,
    Text,
  },
  data() {
    return {
      get,
    };
  },
  props: {
    /**
     * use it for media object
     */
    media: {
      type: Object,
      default: () => {},
    },
    /**
     * use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style></style>

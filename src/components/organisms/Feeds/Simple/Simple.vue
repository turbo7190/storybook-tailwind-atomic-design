<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(event, eventIdx) in timeline" :key="event.id">
        <div class="relative pb-8">
          <span
            v-if="eventIdx !== timeline.length - 1"
            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex space-x-3">
            <div>
              <span
                :class="[
                  event.iconBackground,
                  'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                ]"
              >
                <Icon
                  :isOutline="false"
                  :name="event.icon"
                  color="white"
                  size="5"
                />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div class="flex gap-1">
                <Text :content="event.content" color="gray-500" weight="sm" />
                <Link
                  :url="event.href"
                  :content="event.target"
                  color="gray-900"
                  weight="medium"
                />
              </div>
              <div class="text-right text-sm whitespace-nowrap text-gray-500">
                <Time :datetime="event.datetime" :content="event.date" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Link from "../../../atoms/Link/Link.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Time from "../../../atoms/Time/Time.vue";

export default {
  components: {
    Link,
    Text,
    Icon,
    Time,
  },
  props: {
    /**
     * Use it for timeline items
     */
    timeline: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

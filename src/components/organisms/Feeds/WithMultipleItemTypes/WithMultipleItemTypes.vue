<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li
        v-for="(activityItem, activityItemIdx) in activity"
        :key="activityItem.id"
      >
        <div class="relative pb-8">
          <span
            v-if="activityItemIdx !== activity.length - 1"
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex items-start space-x-3">
            <template v-if="activityItem.type === 'comment'">
              <div class="relative">
                <Image
                  alt=""
                  :src="activityItem.imageUrl"
                  :width="10"
                  :height="10"
                  rounded="full"
                  customClass="flex items-center justify-center bg-gray-400 ring-8 ring-white"
                />
                <span
                  class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px"
                >
                  <Icon
                    name="ChatBubbleLeftRightIcon"
                    :width="5"
                    :height="5"
                    color="gray-400"
                    :ariaHidden="true"
                  />
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <div class="text-sm">
                    <Link
                      :url="activityItem.person.href"
                      weight="medium"
                      color="gray-900"
                      :content="activityItem.person.name"
                    />
                  </div>
                  <Text
                    customClass="mt-0.5"
                    size="sm"
                    color="gray-500"
                    :content="`Commented ${activityItem.date}`"
                  />
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <Text :content="activityItem.comment" />
                </div>
              </div>
            </template>
            <template
              v-else-if="activityItem.type === 'assignment'"
              condition="activityItem.type === 'assignment'"
            >
              <div>
                <div class="relative px-1">
                  <div
                    class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-8 ring-white"
                  >
                    <Icon
                      name="UserCircleIcon"
                      :width="5"
                      :height="5"
                      color="gray-500"
                      :ariaHidden="true"
                    />
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-1.5">
                <div class="text-sm text-gray-500">
                  <Link
                    :url="activityItem.person.href"
                    weight="medium"
                    color="gray-900"
                    :content="activityItem.person.name"
                  />
                  {{ " " }}
                  assigned
                  {{ " " }}
                  <Link
                    :url="activityItem.assigned.href"
                    weight="medium"
                    color="gray-900"
                    :content="activityItem.assigned.name"
                  />
                  {{ " " }}
                  <Text
                    :content="activityItem.date"
                    customClass="whitespace-nowrap"
                  />
                </div>
              </div>
            </template>
            <template
              v-else-if="activityItem.type === 'tags'"
              condition="activityItem.type === 'tags'"
            >
              <div>
                <div class="relative px-1">
                  <div
                    class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-8 ring-white"
                  >
                    <Icon
                      name="TagIcon"
                      :width="5"
                      :height="5"
                      color="gray-500"
                      :ariaHidden="true"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-1 min-w-0 py-0">
                <div class="text-sm leading-8 text-gray-500">
                  <span class="mr-0.5">
                    <Link
                      :url="activityItem.person.href"
                      weight="medium"
                      color="gray-900"
                      :content="activityItem.person.name"
                    />
                    {{ " " }}
                    <Text content="added tags" />
                  </span>
                  {{ " " }}
                  <span class="mr-0.5">
                    <template
                      template
                      v-for="tag in activityItem.tags"
                      :key="tag.name"
                    >
                      <Link
                        :leading="true"
                        :url="tag.href"
                        size="sm"
                        customClass="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                      >
                        <span
                          class="absolute flex items-center justify-center flex-shrink-0"
                        >
                          <span
                            :class="[tag.color, 'h-1.5 w-1.5 rounded-full']"
                            aria-hidden="true"
                        /></span>
                        <Text
                          :content="tag.name"
                          customClass="ml-3.5"
                          weight="medium"
                          color="gray-900"
                        />
                      </Link>
                      {{ " " }}
                    </template>
                  </span>
                  <Text
                    :content="activityItem.date"
                    customClass="whitespace-nowrap"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  ChatBubbleLeftRightIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/solid";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
import Image from "../../../atoms/Image/Image.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    ChatBubbleLeftRightIcon,
    TagIcon,
    UserCircleIcon,
    Text,
    Link,
    Image,
    Icon,
  },
  props: {
    /**
     * Use it for timeline items
     */
    activity: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

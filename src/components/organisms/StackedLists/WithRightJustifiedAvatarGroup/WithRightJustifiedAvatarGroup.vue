<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <Link url="#" customClass="block hover:bg-gray-50" leading>
          <div class="px-4 py-4 flex items-center sm:px-6">
            <div
              class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"
            >
              <div class="truncate">
                <div class="flex text-sm">
                  <Text
                    size="medium"
                    color="primary-600"
                    customClass="truncate"
                    :content="position.title"
                  />
                  <Text
                    size="normal"
                    color="gray-500"
                    customClass="ml-1 flex-shrink-0"
                    :content="`in ${position.department}`"
                  />
                </div>
                <div class="mt-2 flex">
                  <div class="flex items-center text-sm text-gray-500">
                    <Icon
                      name="CalendarIcon"
                      :width="5"
                      :height="5"
                      color="gray-400"
                      customclass="flex-shrink-0 mr-1.5"
                      :ariaHidden="true"
                    />
                    <Text content="Closing on" customClass="mr-1" />
                    <Time
                      :datetime="position.closeDate"
                      :content="position.closeDateFull"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                <div class="flex overflow-hidden -space-x-1">
                  <AvatarGroup :size="6" stack-type="B2T" />
                </div>
              </div>
            </div>
            <div class="ml-5 flex-shrink-0">
              <Icon
                name="ChevronRightIcon"
                :width="5"
                :height="5"
                color="gray-400"
                :ariaHidden="true"
              />
            </div>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</template>

<script>
// Icons are referenced as strings in template, no need to import
import AvatarGroup from "../../../molecules/Avatar/AvatarGroup.vue";
import Link from "../../../atoms/Link/Link.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Time from "../../../atoms/Time/Time.vue";

export default {
  components: {
    AvatarGroup,
    Link,
    Text,
    Icon,
    Time,
  },
  props: {
    positions: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

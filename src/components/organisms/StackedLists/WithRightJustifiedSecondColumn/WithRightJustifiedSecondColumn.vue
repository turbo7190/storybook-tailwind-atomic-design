<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <Link url="#" customClass="block hover:bg-gray-50" leading>
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <Text
                size="sm"
                weight="medium"
                color="primary-600"
                customClass="truncate"
                :content="position.title"
              />
              <div class="ml-2 flex-shrink-0 flex">
                <Text
                  customClass="px-2 inline-flex rounded-full bg-green-100"
                  size="xs"
                  weight="semibold"
                  color="green-800"
                  :content="position.type"
                />
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="flex items-center text-sm text-gray-500">
                  <Icon
                    name="UserIcon"
                    customClass="flex-shrink-0 mr-1.5"
                    :width="5"
                    :height="5"
                    color="gray-400"
                    :ariaHidden="true"
                  />
                  <Text :content="position.department" />
                </div>
                <div
                  class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
                >
                  <Icon
                    name="MapPinIcon"
                    customClass="flex-shrink-0 mr-1.5"
                    :width="5"
                    :height="5"
                    color="gray-400"
                    :ariaHidden="true"
                  />
                  <Text :content="position.location" />
                </div>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
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
        </Link>
      </li>
    </ul>
  </div>
</template>

<script>
// Icons are referenced as strings in template, no need to import
import Link from "../../../atoms/Link/Link.vue";
import Text from "../../../atoms/Text/Text.vue";
import Time from "../../../atoms/Time/Time.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Link,
    Text,
    Time,
    Icon,
  },
  props: {
    positions: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

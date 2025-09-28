<template>
  <div>
    <div class="flow-root mt-6">
      <ul role="list" class="-my-5 divide-y divide-gray-200">
        <li
          v-for="announcement in announcements"
          :key="announcement.id"
          class="py-5"
        >
          <div
            class="relative focus-within:ring-2 focus-within:ring-primary-500"
          >
            <h3 class="text-sm font-semibold text-gray-800">
              <Link
                url="#"
                customClass="over:underline focus:outline-none"
                leading
              >
                <span class="absolute inset-0" aria-hidden="true" />
                {{ announcement.title }}
              </Link>
            </h3>
            <Text
              customClass="mt-1 line-clamp-2"
              size="sm"
              color="gray-600"
              :content="announcement.preview"
            />
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6">
      <White label="View all" class="w-full text-sm" />
    </div>
  </div>
</template>

<script>
import White from "../../../molecules/Button/White/White.vue";
import Link from "../../../atoms/Link/Link.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    White,
    Link,
    Text,
  },
  props: {
    announcements: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

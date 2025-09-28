<template>
  <div>
    <div class="flow-root mt-6">
      <ul role="list" class="-my-5 divide-y divide-gray-200">
        <li v-for="person in people" :key="person.handle" class="py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <Image
                :src="person.imageUrl"
                :width="8"
                :height="8"
                rounded="full"
              />
            </div>
            <div class="flex-1 min-w-0">
              <Text
                :content="person.name"
                size="sm"
                weight="medium"
                color="gray-900"
                customClass="truncate"
              />
              <Text
                :content="`@${person.handle}`"
                size="sm"
                color="gray-500"
                customClass="truncate"
              />
            </div>
            <div>
              <Link
                url="#"
                size="sm"
                weight="medium"
                color="gray-700"
                content="View"
                customClass="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 leading-5 rounded-full bg-white hover:bg-gray-50"
              />
            </div>
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
import Image from "../../../atoms/Image/Image.vue";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";

export default {
  components: {
    White,
    Image,
    Text,
    Link,
  },
  props: {
    people: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

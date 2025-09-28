<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <Text
          content="Collections"
          weight="extrabold"
          color="gray-900"
          size="2xl"
        />
        <div
          class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6"
        >
          <div v-for="item in items" :key="item.name" class="group relative">
            <div
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
            >
              <Image
                :src="item.imageSrc"
                customClass="w-full h-full object-center object-cover"
                :alt="item.imageAlt"
              />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <Link
                size="medium"
                color="gray-500"
                :url="item.href"
                :content="item.name"
              />
            </h3>
            <Text
              :content="item.description"
              weight="normal"
              color="gray-900"
              size="base"
              customClass="font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../../../../atoms/Image/Image.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Text from "../../../../atoms/Text/Text.vue";
export default {
  components: {
    Image,
    Link,
    Text,
  },
  props: ["items"],
};
</script>

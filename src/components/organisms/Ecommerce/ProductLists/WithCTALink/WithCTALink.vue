<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="md:flex md:items-center md:justify-between">
        <Text
          size="2xl"
          weight="extrabold"
          color="gray-900"
          customClass="tracking-tight"
          content="Trending products"
        />
        <Link
          :leading="true"
          url="#"
          size="sm"
          weight="medium"
          color="primary-600"
          hoverColor="primary-500"
          customClass="hidden md:block"
          >Shop the collection<span aria-hidden="true"> &rarr;</span></Link
        >
      </div>

      <div
        class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80"
          >
            <Image
              :src="product.imageSrc"
              :alt="product.imageAlt"
              customClass="object-cover"
              width="full"
              height="full"
            />
          </div>
          <div class="mt-4 text-sm text-gray-700">
            <Link :leading="true" :url="product.href">
              <span class="absolute inset-0" />
              {{ product.name }}
            </Link>
          </div>
          <Text
            size="sm"
            color="gray-500"
            customClass="mt-1"
            :content="product.color"
          />
          <Text
            size="sm"
            weight="medium"
            color="grayy-900"
            customClass="mt-1"
            :content="product.price"
          />
        </div>
      </div>

      <div class="mt-8 text-sm md:hidden">
        <Link
          :leading="true"
          url="#"
          weight="medium"
          color="primary-600"
          hoverColor="primary-500"
          >Shop the collection<span aria-hidden="true"> &rarr;</span></Link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Image from "../../../../atoms/Image/Image.vue";

export default {
  components: {
    Text,
    Link,
    Image,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

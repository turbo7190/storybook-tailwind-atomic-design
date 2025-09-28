<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="flex items-center justify-between space-x-4">
        <Text
          size="lg"
          weight="medium"
          color="gray-900"
          content="Customers also viewed"
        />
        <Link
          :leading="true"
          url="#"
          size="sm"
          weight="medium"
          color="primary-600"
          hoverColor="primary-500"
          class="whitespace-nowrap"
          >View all<span aria-hidden="true"> &rarr;</span></Link
        >
      </div>
      <div
        class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="relative group"
        >
          <div
            class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100"
          >
            <Image
              :src="product.imageSrc"
              :alt="product.imageAlt"
              customClass="object-center object-cover"
              width="full"
              height="full"
            />
            <div
              class="flex items-end opacity-0 p-4 group-hover:opacity-100"
              aria-hidden="true"
            >
              <div
                class="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"
              >
                View Product
              </div>
            </div>
          </div>
          <div
            class="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"
          >
            <div>
              <Link :leading="true" url="#">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </Link>
            </div>
            <Text :content="product.price" />
          </div>
          <Text
            customClass="mt-1"
            size="sm"
            color="gray-500"
            :content="product.category"
          />
        </div>
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

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <Text customClass="sr-only" content="Products" />

      <div
        class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative p-4 border-r border-b border-gray-200 sm:p-6"
        >
          <div
            class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75"
          >
            <Image
              :src="product.imageSrc"
              :alt="product.imageAlt"
              customClass="object-center object-cover"
              width="full"
            />
          </div>
          <div class="pt-10 pb-4 text-center">
            <div class="text-sm font-medium text-gray-900">
              <Link :leading="true" :url="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                <Text :content="product.name" />
              </Link>
            </div>
            <div class="mt-3 flex flex-col items-center">
              <Text
                customClass="sr-only"
                :content="`${product.rating} out of 5 stars`"
              />
              <div class="flex items-center">
                <Icon
                  name="StarIcon"
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    product.rating > rating
                      ? 'text-yellow-400'
                      : 'text-gray-200',
                    'flex-shrink-0 h-5 w-5',
                  ]"
                  :ariaHidden="true"
                />
              </div>
              <Text
                customClass="mt-1"
                size="sm"
                color="gray-500"
                :content="`${product.reviewCount} reviews`"
              />
            </div>
            <Text
              customClass="mt-4"
              size="base"
              weight="medium"
              color="gray-900"
              :content="product.price"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Image from "../../../../atoms/Image/Image.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Text,
    Link,
    Image,
    Icon,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

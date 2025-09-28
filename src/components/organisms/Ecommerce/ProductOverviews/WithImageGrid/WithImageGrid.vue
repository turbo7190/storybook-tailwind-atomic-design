<template>
  <div class="h-screen overflow-scroll bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <Link
                :url="breadcrumb.href"
                customClass="mr-2"
                size="sm"
                weight="medium"
                color="gray-900"
                :content="breadcrumb.name"
              />
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <Link
              :url="product.href"
              ariaCurrent="Page"
              weight="medium"
              color="gray-500"
              hoverColor="gray-600"
              :content="product.name"
            />
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="max-w-2xl mx-auto mt-6 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          class="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block"
        >
          <Image
            :src="product.images[0].src"
            :alt="product.images[0].alt"
            customClass="object-center object-cover"
            width="full"
            height="full"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
            <Image
              :src="product.images[1].src"
              :alt="product.images[1].alt"
              customClass="object-center object-cover"
              width="full"
              height="full"
            />
          </div>
          <div class="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
            <Image
              :src="product.images[2].src"
              :alt="product.images[2].alt"
              customClass="object-center object-cover"
              width="full"
              height="full"
            />
          </div>
        </div>
        <div
          class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        >
          <Image
            :src="product.images[3].src"
            :alt="product.images[3].alt"
            customClass="object-center object-cover"
            width="full"
            height="full"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <Text
            size="2xl"
            weight="extrabold"
            customClass="tracking-tight sm:text-3xl"
            color="gray-900"
            :content="product.name"
          />
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <Text customClass="sr-only" content="Product information" />
          <Text size="3xl" color="gray-900" :content="product.price" />

          <!-- Reviews -->
          <div class="mt-6">
            <Text customClass="sr-only" content="Reviews" />
            <div class="flex items-center">
              <div class="flex items-center">
                <Icon
                  name="StarIcon"
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :customClass="`${
                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200'
                  } 'h-5 w-5 flex-shrink-0'`"
                  :ariaHidden="true"
                />
              </div>
              <Text
                customClass="sr-only"
                :content="`${reviews.average} out of 5 stars`"
              />
              <Link
                :url="reviews.href"
                customClass="ml-3"
                size="sm"
                weight="medium"
                color="primary-600"
                hoverColor="primary-500"
                :content="`${reviews.totalCount} reviews`"
              />
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <Text
                size="sm"
                color="gray-900"
                weight="medium"
                content="Color"
              />
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <Text
                  size="sm"
                  color="gray-900"
                  weight="medium"
                  content="Size"
                />
                <Link
                  url="#"
                  size="sm"
                  weight="medium"
                  color="primary-600"
                  hoverColor="primary-500"
                  content="Size guide"
                />
              </div>

              <MiddleCards
                :items="product.sizes"
                :selectedItem="selectedSize"
              />
            </div>

            <Primary
              type="submit"
              customClass="mt-10 w-full bg-primary-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              label="Add to bag"
            />
          </form>
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <Text customClass="sr-only" content="Description" />

            <div class="space-y-6">
              <Text
                size="base"
                color="gray-900"
                :content="product.description"
              />
            </div>
          </div>

          <div class="mt-10">
            <Text
              size="sm"
              weight="medium"
              color="gray-900"
              content="Highlights"
            />

            <div class="mt-4">
              <ul role="list" class="pl-4 space-y-2 text-sm list-disc">
                <li
                  v-for="highlight in product.highlights"
                  :key="highlight"
                  class="text-gray-400"
                >
                  <Text color="gray-600" :content="highlight" />
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <Text
              size="sm"
              weight="medium"
              color="gray-900"
              content="Details"
            />
            <div class="mt-4 space-y-6">
              <Text size="sm" color="gray-600" :content="product.details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import Image from "../../../../atoms/Image/Image.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Primary from "../../../../molecules/Button/Primary/Primary.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
import MiddleCards from "../../../../molecules/RadioGroup/MiddleCards/MiddleCards.vue";

export default {
  components: {
    Icon,
    Text,
    Image,
    Link,
    Primary,
    MiddleCards,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    reviews: {
      type: Object,
      default: () => {},
    },
    selectedColor: {
      type: Object,
      default: () => {},
    },
    selectedSize: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

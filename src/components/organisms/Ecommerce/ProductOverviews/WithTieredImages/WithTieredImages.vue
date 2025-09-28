<template>
  <div class="h-screen overflow-scroll bg-white">
    <div class="pt-6 pb-16 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <ol role="list" class="flex items-center space-x-4">
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <Link
                :url="breadcrumb.href"
                customClass="mr-4"
                size="sm"
                weight="medium"
                color="gray-900"
                :content="breadcrumb.name"
              />
              <svg
                viewBox="0 0 6 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-auto h-5 text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <Link
              :url="product.href"
              ariaCurrent="page"
              weight="medium"
              color="gray-500"
              hoverColor="gray-600"
              :content="product.name"
            />
          </li>
        </ol>
      </nav>
      <div class="max-w-2xl px-4 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div class="lg:col-start-8 lg:col-span-5">
            <div class="flex justify-between">
              <Text
                size="xl"
                weight="medium"
                color="gray-900"
                :content="product.name"
              />
              <Text
                size="xl"
                weight="medium"
                color="gray-900"
                :conten="product.price"
              />
            </div>
            <!-- Reviews -->
            <div class="mt-4">
              <Text customClass="sr-only" content="Reviews" />
              <div class="flex items-center">
                <div class="text-sm text-gray-700">
                  <Text :content="product.rating" />
                  <Text customClass="sr-only" content="out of 5 stars" />
                </div>
                <div class="flex items-center ml-1">
                  <Icon
                    name="StarIcon"
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :customClass="`${
                      product.rating > rating
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    } h-5 w-5 flex-shrink-0`"
                    :ariaHidden="true"
                  />
                </div>
                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div class="flex ml-4">
                  <Link
                    url="#"
                    size="sm"
                    weight="medium"
                    color="primary-600"
                    hoverColor="primary-500"
                    :content="`See all
										${product.reviewCount} reviews`"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Image gallery -->
          <div
            class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3"
          >
            <Text customClass="sr-only" content="Images" />

            <div
              class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
            >
              <Image
                v-for="image in product.images"
                :key="image.id"
                :src="image.imageSrc"
                :alt="image.imageAlt"
                :customClass="`${
                  image.primary
                    ? 'lg:col-span-2 lg:row-span-2'
                    : 'hidden lg:block'
                } rounded-lg`"
                width="full"
                height="full"
              />
            </div>
          </div>

          <div class="mt-8 lg:col-span-5">
            <form>
              <!-- Size picker -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <Text
                    size="sm"
                    weight="medium"
                    color="gray-900"
                    content="Size"
                  />
                  <Link
                    url="#"
                    size="sm"
                    weight="medium"
                    color="primary-600"
                    hoverColor="primary-500"
                    content="See sizing chart"
                  />
                </div>
                <SmallCards
                  :items="product.sizes"
                  :selectedItem="selectedSize"
                />
              </div>

              <Primary
                type="submit"
                customClass="mt-8 w-full bg-primary-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                label="Add to cart"
              />
            </form>

            <!-- Product details -->
            <div class="mt-10">
              <Text
                size="sm"
                weight="medium"
                color="gray-900"
                content="Description"
              />

              <div
                class="mt-4 prose-sm prose text-gray-500"
                v-html="product.description"
              />
            </div>

            <div class="pt-8 mt-8 border-t border-gray-200">
              <Text
                size="sm"
                weight="medium"
                color="gray-900"
                content="Fabric &amp; Care"
              />

              <div class="mt-4 prose-sm prose text-gray-500">
                <ul role="list">
                  <li v-for="item in product.details" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Policies -->
            <section aria-labelledby="policies-heading" class="mt-10">
              <Text
                id="policies-heading"
                customClass="sr-only"
                content="Our Policies"
              />

              <dl
                class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              >
                <div
                  v-for="policy in policies"
                  :key="policy.name"
                  class="p-6 text-center border border-gray-200 rounded-lg bg-gray-50"
                >
                  <dt>
                    <component
                      :is="policy.icon"
                      class="flex-shrink-0 w-6 h-6 mx-auto text-gray-400"
                      aria-hidden="true"
                    />
                    <Text
                      customClass="mt-4"
                      size="sm"
                      weight="medium"
                      color="gray-900"
                      :content="policy.name"
                    />
                  </dt>
                  <Text
                    customClass="mt-1"
                    size="sm"
                    color="gray-500"
                    :content="policy.description"
                  />
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Image from "../../../../atoms/Image/Image.vue";
import Primary from "../../../../molecules/Button/Primary/Primary.vue";
import SmallCards from "../../../../molecules/RadioGroup/SmallCards/SmallCards.vue";

export default {
  components: {
    Text,
    Icon,
    Link,
    Primary,
    Image,
    SmallCards,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    policies: {
      type: Array,
      default: () => [],
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

<template>
  <div class="bg-gray-50 h-screen overflow-scroll">
    <div class="max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
        <div class="flex sm:items-baseline sm:space-x-4">
          <Text
            size="2xl"
            weight="extrabold"
            color="gray-900"
            class="tracking-tight sm:text-3xl"
            :content="title"
          />
          <Link
            size="sm"
            weight="medium"
            color="primary-600"
            hover-color="primary-500"
            class="hidden sm:block"
            :content="`${btnText} &rarr;`"
          />
        </div>
        <Text
          size="sm"
          weight="medium"
          color="gray-600"
          class="tracking-tight"
          :content="`Order placed ${date}`"
        />
        <Link
          size="sm"
          weight="medium"
          color="primary-600"
          hover-color="primary-500"
          class="sm:hidden"
          :content="`${btnText} &rarr;`"
        />
      </div>

      <!-- Products -->
      <div class="mt-6">
        <div class="space-y-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
          >
            <div class="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
              <div class="sm:flex lg:col-span-7">
                <div
                  class="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40"
                >
                  <img
                    :src="product.imageSrc"
                    :alt="product.imageAlt"
                    class="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  >
                </div>

                <div class="mt-6 sm:mt-0 sm:ml-6">
                  <Link
                    weight="medium"
                    size="base"
                    color="gray-900"
                    :content="product.name"
                    :url="product.href"
                  />
                  <Text
                    size="sm"
                    weight="medium"
                    color="gray-900"
                    class="mt-2"
                    :content="`$${product.price}`"
                  />
                  <Text
                    size="sm"
                    color="gray-500"
                    class="mt-3"
                    :content="product.description"
                  />
                </div>
              </div>

              <div class="mt-6 lg:mt-0 lg:col-span-5">
                <dl class="grid grid-cols-2 gap-x-6 text-sm">
                  <div>
                    <Text
                      weight="medium"
                      color="gray-900"
                      content="Delivery address"
                    />
                    <dd class="mt-3 text-gray-500">
                      <Text
                        class="block"
                        :content="product.address[0]"
                      />
                      <Text
                        class="block"
                        :content="product.address[1]"
                      />
                      <Text
                        class="block"
                        :content="product.address[2]"
                      />
                    </dd>
                  </div>
                  <div>
                    <Text
                      weight="medium"
                      color="gray-900"
                      content="Shipping Updates"
                    />
                    <dd class="mt-3 text-gray-500 space-y-3">
                      <Text
                        class="block"
                        :content="product.email"
                      />
                      <Text
                        class="block"
                        :content="product.phone"
                      />
                      <Button
                        content="Edit"
                        class="text-primary-600 hover:text-primary-400 bg-white px-0"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
              <ProgressBar
                :title="`${product.status} on ${product.date}`"
                :steps="steps"
                :current-step="product.step"
                class="mt-6"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Billing -->
      <div class="mt-16">
        <h2 class="sr-only">
          Billing Summary
        </h2>

        <div class="bg-gray-100 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
          <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
            <div
              v-for="(info, i) in extraInfo"
              :key="i"
            >
              <Text
                weight="medium"
                color="gray-900"
                :content="info.label"
              />
              <dd class="mt-2 text-gray-700">
                <Text
                  v-for="(item, id) in info.list"
                  :key="id"
                  :content="item"
                />
              </dd>
            </div>
          </dl>

          <dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
            <div class="pb-4 flex items-center justify-between">
              <dt class="text-gray-600">
                Subtotal
              </dt>
              <dd class="font-medium text-gray-900">
                ${{ priceList.subtotal.toFixed(2) }}
              </dd>
            </div>
            <div class="py-4 flex items-center justify-between">
              <dt class="text-gray-600">
                Shipping
              </dt>
              <dd class="font-medium text-gray-900">
                ${{ priceList.shipping.toFixed(2) }}
              </dd>
            </div>
            <div class="py-4 flex items-center justify-between">
              <dt class="text-gray-600">
                Tax
              </dt>
              <dd class="font-medium text-gray-900">
                ${{ priceList.tax.toFixed(2) }}
              </dd>
            </div>
            <div class="pt-4 flex items-center justify-between">
              <dt class="font-medium text-gray-900">
                Order total
              </dt>
              <dd class="font-medium text-primary-600">
                ${{ priceList.total.toFixed(2) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import ProgressBar from "../../../../molecules/Steps/ProgressBar/ProgressBar.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Button from "../../../../atoms/Button/Button.vue";
/**
 * - Use it to show an order summary view with progress bar
 */
export default {
  components: {
    Text,
    ProgressBar,
    Link,
    Button,
  },
  props: {
    /**
     * page title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * order created date
     */
    date: {
      type: String,
      default: "",
    },
    /**
     * products list
     */
    products: {
      type: Array,
      default: () => [],
    },
    /**
     * detail button text
     */
    btnText: {
      type: String,
      default: "",
    },
    /**
     * pricing list
     */
    priceList: {
      type: Object,
      default: () => {},
    },
    /**
     * extra information
     */
    extraInfo: {
      type: Array,
      default: () => [],
    },
    /**
     * progress bar steps
     */
    steps: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

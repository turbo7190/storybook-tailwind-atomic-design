<template>
  <div class="bg-white">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="max-w-xl">
        <Text
          size="sm"
          weight="semibold"
          color="primary-600"
          class="tracking-wide uppercase"
          :content="label"
        />
        <Text
          size="4xl"
          weight="extrabold"
          class="mt-2 tracking-tight sm:text-5xl"
          :content="title"
        />
        <Text
          size="base"
          color="gray-500"
          class="mt-2"
          :content="description"
        />
        <dl class="mt-12 text-sm font-medium">
          <Text
            size="sm"
            weight="medium"
            color="gray-900"
            content="Tracking Number"
          />
          <Text
            size="sm"
            color="primary-600"
            class="mt-2"
            content="51547878755545848512"
          />
        </dl>
      </div>

      <div class="mt-10 border-t border-gray-200">
        <div
          v-for="product in products"
          :key="product.id"
          class="py-10 border-b border-gray-200 flex space-x-6"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
          />
          <div class="flex-auto flex flex-col">
            <div>
              <Link
                weight="medium"
                color="gray-900"
                :content="product.name"
                :url="product.href"
              />
              <Text
                size="sm"
                color="gray-600"
                class="mt-2"
                :content="product.description"
              />
            </div>
            <div class="mt-6 flex-1 flex items-end">
              <dl
                class="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6"
              >
                <div class="flex">
                  <Text weight="medium" color="gray-900" content="Quantity" />
                  <Text
                    class="ml-2"
                    color="gray-700"
                    :content="product.quantity.toString()"
                  />
                </div>
                <div class="pl-4 flex sm:pl-6">
                  <Text weight="medium" color="gray-900" content="Price" />
                  <Text
                    class="ml-2"
                    color="gray-700"
                    :content="product.price"
                  />
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div class="sm:ml-40 sm:pl-6">
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-sm">
            <div v-for="(info, i) in extraInfo" :key="i" class="pt-10">
              <Text weight="medium" color="gray-900" :content="info.label" />
              <dd class="mt-2 text-gray-700">
                <Text
                  v-for="(item, id) in info.list"
                  :key="id"
                  :content="item"
                />
              </dd>
            </div>
          </dl>

          <dl class="space-y-6 border-t border-gray-200 text-sm pt-10 mt-10">
            <div class="flex justify-between">
              <dt>Subtotal</dt>
              <dd class="text-gray-900">
                ${{ priceList.subtotal.toFixed(2) }}
              </dd>
            </div>
            <div class="flex justify-between">
              <dt>Taxes</dt>
              <dd class="text-gray-900">${{ priceList.tax.toFixed(2) }}</dd>
            </div>
            <div class="flex justify-between">
              <dt>Shipping</dt>
              <dd class="text-gray-900">
                ${{ priceList.shipping.toFixed(2) }}
              </dd>
            </div>
            <div class="flex justify-between">
              <dt>Total</dt>
              <dd>${{ priceList.total.toFixed(2) }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../../molecules/Inputs/Component/Component.vue";
import Text from "../../../../atoms/Text/Text.vue";
import Button from "../../../../atoms/Button/Button.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Divider from "../../../../molecules/Dividers/WithIcon/WithIcon.vue";
import Checkbox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";
/**
 * - Use it to show multi step checkout form
 */
export default {
  components: {
    TextInput,
    Text,
    Button,
    Link,
    Divider,
    Checkbox,
  },
  props: {
    /**
     * use it for label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * use it for title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * use it for description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * use it for products
     */
    products: {
      type: Array,
      default: () => [],
    },
    /**
     * use it to show pricing list
     */
    priceList: {
      type: Object,
      default: () => {},
    },
    /**
     * use it for extra information
     */
    extraInfo: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

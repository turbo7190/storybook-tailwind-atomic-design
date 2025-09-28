<template>
  <div class="bg-white h-screen overflow-scroll">
    <!-- Background color split screen for large screens -->
    <div
      class="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
      aria-hidden="true"
    />
    <div
      class="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-primary-900"
      aria-hidden="true"
    />

    <div
      class="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16"
    >
      <section
        aria-labelledby="summary-heading"
        class="bg-primary-900 text-primary-300 py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
      >
        <div class="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
          <dl>
            <dt class="text-sm font-medium">Amount due</dt>
            <dd class="mt-1 text-3xl font-extrabold text-white">
              ${{ priceList.due.toFixed(2) }}
            </dd>
          </dl>

          <ul
            role="list"
            class="text-sm font-medium divide-y divide-white divide-opacity-10"
          >
            <li
              v-for="product in products"
              :key="product.id"
              class="flex items-start py-6 space-x-4"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="flex-none w-20 h-20 rounded-md object-center object-cover"
              />
              <div class="flex-auto space-y-1">
                <Text
                  size="sm"
                  weight="medium"
                  color="white"
                  :content="product.name"
                />
                <Text size="sm" weight="medium" :content="product.color" />
                <Text size="sm" weight="medium" :content="product.size" />
              </div>
              <Text
                size="base"
                weight="medium"
                color="white"
                :content="product.price"
                class="flex-none"
              />
            </li>
          </ul>

          <dl
            class="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6"
          >
            <div class="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd>${{ priceList.subtotal.toFixed(2) }}</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt>Shipping</dt>
              <dd>${{ priceList.shipping.toFixed(2) }}</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt>Taxes</dt>
              <dd>${{ priceList.tax.toFixed(2) }}</dd>
            </div>

            <div
              class="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6"
            >
              <dt class="text-base">Total</dt>
              <dd class="text-base">${{ priceList.total.toFixed(2) }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="payment-and-shipping-heading"
        class="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
      >
        <form>
          <div class="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
            <div
              v-for="(form, id) in forms"
              :key="id"
              :class="id !== 0 && 'mt-10'"
            >
              <Text
                size="lg"
                weight="medium"
                color="gray-900"
                :content="form.title"
              />
              <div
                :class="`grid grid-cols-${form.col} sm:grid-cols-${form.smCol} gap-3`"
              >
                <div
                  v-for="(item, index) in form.children"
                  :key="index"
                  :class="[
                    `col-span-${item.col} sm:col-span-${item.smCol}`,
                    'mt-4',
                  ]"
                >
                  <TextInput
                    v-if="item.type === 'Input'"
                    :label="item.label"
                    v-model="item.value"
                  />
                  <Checkbox
                    v-else-if="item.type === 'Checkbox'"
                    :title="item.label"
                    v-model="item.value"
                  />
                </div>
              </div>
            </div>
            <div class="mt-10 flex justify-end pt-6 border-t border-gray-200">
              <Button :content="btnText" custom-class="rounded-md" />
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../../molecules/Inputs/Component/Component.vue";
import Button from "../../../../atoms/Button/Button.vue";
import Text from "../../../../atoms/Text/Text.vue";
import Checkbox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";

/**
 * - Use it to show checkout splitting with order summary
 */
export default {
  components: {
    Button,
    TextInput,
    Text,
    Checkbox,
    Link,
    Icon,
  },
  data() {
    return {
      quantities: [
        { text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        { text: 4, value: 4 },
        { text: 5, value: 5 },
        { text: 6, value: 6 },
        { text: 7, value: 7 },
        { text: 8, value: 8 },
        { text: 9, value: 9 },
        { text: 10, value: 10 },
      ],
    };
  },
  props: {
    /**
     * use it for forms
     */
    forms: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for products
     */
    products: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for price list
     */
    priceList: {
      type: Object,
      default: () => {},
    },
    /**
     * use it for button text
     */
    btnText: {
      type: String,
      default: "",
    },
  },
};
</script>

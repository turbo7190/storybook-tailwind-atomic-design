<template>
  <div class="bg-white">
    <div
      class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <!-- Image gallery -->
        <TabGroup :tabs="product.images" />

        <!-- Product info -->
        <div class="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
          <Text
            size="3xl"
            weight="extrabold"
            customClass="tracking-tight"
            color="gray-900"
            :content="product.name"
          />
          <div class="mt-3">
            <Text customClass="sr-only" content="Product information" />
            <Text size="3xl" color="gray-900" :content="product.price" />
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <Text customClass="sr-only" content="Reviews" />
            <div class="flex items-center">
              <div class="flex items-center">
                <Icon
                  name="StarIcon"
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :customClass="`${
                    product.rating > rating
                      ? 'text-primary-500'
                      : 'text-gray-300'
                  } 'h-5 w-5 flex-shrink-0'`"
                  :ariaHidden="true"
                />
              </div>
              <Text
                customClass="sr-only"
                :content="`${product.rating} out of 5 stars`"
              />
            </div>
          </div>

          <div class="mt-6">
            <Text customClass="sr-only" content="Description" />

            <div
              class="space-y-6 text-base text-gray-700"
              v-html="product.description"
            />
          </div>

          <form class="mt-6">
            <!-- Colors -->
            <div>
              <Text size="sm" color="gray-600" content="Color" />
              <ColorPicker
                :items="product.colors"
                :selectedColor="selectedColor"
              />
            </div>

            <div class="flex mt-10 sm:flex-col1">
              <Primary
                type="submit"
                class="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full"
                label="Add to bag"
              />

              <Button
                :leading="true"
                type="button"
                customClass="flex items-center justify-center px-3 py-3 ml-4 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500"
              >
                <Icon
                  name="HeartIcon"
                  color="gray-500"
                  customClass="flex-shrink-0"
                  :size="6"
                  :ariaHidden="true"
                />
                <span class="sr-only">Add to favorites</span>
              </Button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <Text
              id="details-heading"
              customClass="sr-only"
              content="Additional details"
            />

            <div class="border-t divide-y divide-gray-200">
              <Accordion :accordions="product.details" />
            </div>
          </section>
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
import Button from "../../../../atoms/Button/Button.vue";
import TabGroup from "../../../../molecules/Tabs/TabGroup/TabGroup.vue";
import ColorPicker from "../../../../molecules/RadioGroup/SmallCards/SmallCards.vue";
import Accordion from "../../../../molecules/Accordion/Accordion.vue";

export default {
  components: {
    Text,
    Link,
    Image,
    Icon,
    Primary,
    Button,
    TabGroup,
    ColorPicker,
    Accordion,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    selectedColor: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

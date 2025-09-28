<template>
  <div class="h-screen overflow-scroll bg-gray-900">
    <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div class="text-center">
        <Text
          size="lg"
          weight="semibold"
          color="gray-300"
          class="leading-6 uppercase tracking-wider"
          :content="category"
        />
        <Text
          size="3xl"
          weight="extrabold"
          color="white"
          class="sm:text-4xl lg:text-5xl"
          :content="title"
        />
        <Text
          size="xl"
          color="gray-300"
          class="mt-3 max-w-4xl mx-auto sm:mt-5 sm:text-2xl"
          :content="description"
        />
      </div>
    </div>
    <div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
      <div class="relative z-0">
        <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-7">
            <div
              class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <Text
                        size="2xl"
                        weight="medium"
                        color="gray-900"
                        class="text-center"
                        :content="items[0].title"
                      />
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-6xl tracking-tight"
                        >
                          <Text
                            size="4xl"
                            weight="medium"
                            color="gray-900"
                            class="mt-2 mr-2"
                            content="$"
                          />
                          <Text
                            size="6xl"
                            weight="extrabold"
                            color="gray-900"
                            :content="items[0].price.toString()"
                          />
                        </span>
                        <Text
                          size="xl"
                          weight="medium"
                          color="gray-500"
                          class="mt-2 mr-2"
                          :content="items[0].frequency.toString()"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li
                        v-for="feature in items[0].features"
                        :key="feature"
                        class="flex items-start"
                      >
                        <div class="flex-shrink-0">
                          <Icon name="CheckIcon" size="6" color="green-500" />
                        </div>
                        <Text
                          weight="medium"
                          color="gray-500"
                          :content="feature"
                          class="ml-3"
                        />
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <Button
                          :content="items[0].cta"
                          variant="secondary"
                          class="border-none w-full py-3 text-primary-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4"
            >
              <div class="relative z-10 rounded-lg shadow-xl">
                <div
                  class="pointer-events-none absolute inset-0 rounded-lg border-2 border-primary-600"
                  aria-hidden="true"
                />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <Badge
                      :label="'Most popular'"
                      px="4"
                      py="1"
                      textSize="sm"
                      textColor="white"
                      class="bg-primary-600 font-semibold tracking-wider uppercase"
                    />
                  </div>
                </div>
                <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <Text
                      size="2xl"
                      weight="semibold"
                      color="gray-900"
                      class="text-center"
                      :content="items[1].title"
                    />
                    <div class="mt-4 flex items-center justify-center">
                      <span
                        class="px-3 flex items-start text-6xl tracking-tight"
                      >
                        <Text
                          size="4xl"
                          weight="medium"
                          color="gray-900"
                          class="mt-2 mr-2"
                          content="$"
                        />
                        <Text
                          size="6xl"
                          weight="extrabold"
                          color="gray-900"
                          :content="items[1].price.toString()"
                        />
                      </span>
                      <Text
                        size="xl"
                        weight="medium"
                        color="gray-500"
                        class="mt-2 mr-2"
                        :content="items[1].frequency.toString()"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10"
                >
                  <ul role="list" class="space-y-4">
                    <li
                      v-for="feature in items[1].features"
                      :key="feature"
                      class="flex items-start"
                    >
                      <div class="flex-shrink-0">
                        <Icon name="CheckIcon" size="6" color="green-500" />
                      </div>
                      <Text
                        weight="medium"
                        color="gray-500"
                        :content="feature"
                        class="ml-3"
                      />
                    </li>
                  </ul>
                  <div class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <Button
                        :content="items[0].cta"
                        variant="primary"
                        class="border-none w-full py-4 font-medium text-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3"
            >
              <div
                class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg"
              >
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <Text
                        size="2xl"
                        weight="medium"
                        color="gray-900"
                        class="text-center"
                        :content="items[2].title"
                      />
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="px-3 flex items-start text-6xl tracking-tight"
                        >
                          <Text
                            size="4xl"
                            weight="medium"
                            color="gray-900"
                            class="mt-2 mr-2"
                            content="$"
                          />
                          <Text
                            size="6xl"
                            weight="extrabold"
                            color="gray-900"
                            :content="items[2].price.toString()"
                          />
                        </span>
                        <Text
                          size="xl"
                          weight="medium"
                          color="gray-500"
                          class="mt-2 mr-2"
                          :content="items[2].frequency.toString()"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
                  >
                    <ul role="list" class="space-y-4">
                      <li
                        v-for="feature in items[2].features"
                        :key="feature"
                        class="flex items-start"
                      >
                        <div class="flex-shrink-0">
                          <Icon name="CheckIcon" size="6" color="green-500" />
                        </div>
                        <Text
                          weight="medium"
                          color="gray-500"
                          :content="feature"
                          class="ml-3"
                        />
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <Button
                          :content="items[2].cta"
                          variant="secondary"
                          class="border-none w-full py-3 text-primary-500 font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
import Badge from "../../../molecules/Badge/Basic/Basic.vue";
/**
 * - Use it to show three tiers pricing section with emphasized tier
 */
export default {
  components: {
    Icon,
    Text,
    Button,
    Link,
    Badge,
  },
  props: {
    /**
     * use it to show section title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * use it to show section description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * use it to show section category
     */
    category: {
      type: String,
      default: "",
    },
    /**
     * use it for items
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

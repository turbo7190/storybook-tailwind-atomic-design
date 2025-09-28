<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <Text
          :content="heading"
          align="center"
          size="3xl"
          weight="extrabold"
          color="gray-900"
          custom-class="sm:text-4xl"
        />
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            v-for="faq in faqs"
            :key="faq.question"
            v-slot="{ open }"
            as="div"
            class="pt-6"
          >
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <Text
                  :content="faq.question"
                  weight="medium"
                  color="gray-900"
                  align="left"
                />
                <span class="ml-6 h-7 flex items-center">
                  <Icon
                    name="ChevronDownIcon"
                    color="gray-400"
                    :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel
              as="dd"
              class="mt-2 pr-12"
            >
              <Text
                :content="faq.answer"
                size="base"
                weight="normal"
                color="gray-500"
                align="left"
              />
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * FAQ section with accordion
 */
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Text,
    Icon,
  },
  props: {
    /**
     * faq list
     */
    faqs: {
      type: Array,
      default: () => [],
    },
    /**
     * heading of section
     */
    heading: {
      type: String,
      default: "",
    },
  },
};
</script>

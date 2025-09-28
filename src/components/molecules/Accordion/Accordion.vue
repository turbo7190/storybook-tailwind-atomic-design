<template>
  <Disclosure
    as="div"
    v-for="detail in accordions"
    :key="detail.name"
    v-slot="{ open }"
  >
    <div>
      <DisclosureButton
        class="relative flex items-center justify-between w-full py-6 text-left group"
      >
        <Text
          :customClass="`${
            open ? 'text-primary-600' : 'text-gray-900'
          } 'text-sm font-medium'`"
          :content="detail.name"
        />
        <div class="flex items-center ml-6">
          <Icon
            name="PlusIcon"
            v-if="!open"
            :size="6"
            color="gray-400"
            customClass="block group-hover:text-gray-500"
            :ariaHidden="true"
          />
          <Icon
            name="MinusIcon"
            v-else
            :size="6"
            color="primary-400"
            customClass="block group-hover:text-primary-500"
            :ariaHidden="true"
          />
        </div>
      </DisclosureButton>
    </div>
    <DisclosurePanel as="div" class="pb-6 prose-sm prose">
      <ul role="list">
        <li v-for="item in detail.items" :key="item">{{ item }}</li>
      </ul>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import Text from "../../atoms/Text/Text.vue";
import Icon from "../../atoms/Icons/Icons.vue";
/**
 * - Use it when show tabs with underline and icons
 * - tabs is required. default is empty array
 */
export default {
  components: {
    Text,
    Icon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  props: {
    /**
     * the list of tabs
     */
    accordions: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

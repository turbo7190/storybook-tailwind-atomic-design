<template>
  <TabGroup as="div" class="flex flex-col-reverse">
    <div class="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
      <TabList class="grid grid-cols-4 gap-6">
        <Tab
          v-for="image in tabs"
          :key="image.id"
          class="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
          v-slot="{ selected }"
        >
          <Text customClass="sr-only" :content="image.name" />
          <div class="absolute inset-0 overflow-hidden rounded-md">
            <Image
              :src="image.src"
              alt=""
              customClass="object-cover object-center"
              width="full"
              height="full"
            />
          </div>
          <span
            :class="[
              selected ? 'ring-primary-500' : 'ring-transparent',
              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none',
            ]"
            aria-hidden="true"
          />
        </Tab>
      </TabList>
    </div>

    <TabPanels class="w-full aspect-w-1 aspect-h-1">
      <TabPanel v-for="image in tabs" :key="image.id">
        <Image
          :src="image.src"
          :alt="image.alt"
          customClass="object-cover object-center sm:rounded-lg"
          width="full"
          height="full"
        />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import Image from "../../../atoms/Image/Image.vue";
import Text from "../../../atoms/Text/Text.vue";
/**
 * - Use it when show tabs with underline and icons
 * - tabs is required. default is empty array
 */
export default {
  components: {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Image,
    Text,
  },
  props: {
    /**
     * the list of tabs
     */
    tabs: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

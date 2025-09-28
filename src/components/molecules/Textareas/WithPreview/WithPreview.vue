<template>
  <form action="#">
    <TabGroup v-slot="{ selectedIndex }">
      <TabList class="flex items-center">
        <Tab v-slot="{ selected }">
          <button-comp
            content="Write"
            variant="secondary"
            :class="[
              selected
                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
              'text-sm mr-2',
            ]"
          />
        </Tab>
        <Tab v-slot="{ selected }">
          <button-comp
            content="Preview"
            variant="secondary"
            :class="[
              selected
                ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
              'text-sm mr-2',
            ]"
          />
        </Tab>

        <!-- These buttons are here simply as examples and don't actually do anything. -->
        <div
          v-if="selectedIndex === 0"
          class="ml-auto flex items-center space-x-5"
        >
          <div class="flex items-center">
            <button
              type="button"
              class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Insert link</span>
              <Icon
                name="LinkIcon"
                size="5"
                color="gray-400"
                hoverTextColor="gray-500"
              />
            </button>
          </div>
          <div class="flex items-center">
            <button
              type="button"
              class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Insert code</span>
              <Icon
                name="CodeBracketIcon"
                size="5"
                color="gray-400"
                hoverTextColor="gray-500"
              />
            </button>
          </div>
          <div class="flex items-center">
            <button
              type="button"
              class="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Mention someone</span>
              <Icon
                name="AtSymbolIcon"
                size="5"
                color="gray-400"
                hoverTextColor="gray-500"
              />
            </button>
          </div>
        </div>
      </TabList>
      <TabPanels class="mt-2">
        <TabPanel class="p-0.5 -m-0.5 rounded-lg">
          <label for="comment" class="sr-only">Comment</label>
          <div>
            <textarea
              rows="5"
              v-model="inputValue"
              name="comment"
              id="comment"
              class="shadow-sm border px-3 py-2 focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              :placeholder="placeholder"
              :class="customClass"
            />
          </div>
        </TabPanel>
        <TabPanel class="p-0.5 -m-0.5 rounded-lg">
          <div class="border-b">
            <div
              class="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800"
            >
              Preview content will render here.
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <div class="mt-2 flex justify-end">
      <button-comp content="Post" variant="primary" />
    </div>
  </form>
</template>

<script>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import ButtonComp from "../../../atoms/Button/Button.vue";

/**
 * - Use it when needs to show preview
 */
export default {
  components: {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Icon,
    ButtonComp,
  },
  props: {
    /**
     * Use to show what textarea is for
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Placeholder of textarea
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it to apply extra class to textarea
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Use to catch dynamic value of textarea
     */
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

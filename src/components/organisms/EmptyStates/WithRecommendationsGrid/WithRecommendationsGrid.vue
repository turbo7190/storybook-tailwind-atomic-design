<template>
  <div class="max-w-md mx-auto sm:max-w-3xl">
    <div>
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <Text
          size="lg"
          weight="medium"
          color="gray-900"
          class="mt-2"
          :content="title"
        />
        <Text
          size="sm"
          weight="base"
          color="gray-500"
          class="mt-1"
          :content="description"
        />
      </div>
      <form action="#" class="mt-6 flex w-full">
        <TextInput
          placeholder="Enter an email"
          v-model="inputValue"
          class="flex flex-1 w-96"
        />
        <Button
          :content="btnText"
          :variant="'primary'"
          class="ml-4"
          :onClick="onClick"
        />
      </form>
    </div>
    <div class="mt-10">
      <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        Recommended team members
      </h3>
      <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="(person, personIdx) in list" :key="personIdx">
          <button
            type="button"
            class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span class="min-w-0 flex-1 flex items-center space-x-3">
              <AvatarText
                :src="person.imageUrl"
                :title="person.name"
                :subtitle="person.role"
              />
            </span>
            <span
              class="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center"
            >
              <circle-button
                :iconSize="'5'"
                iconName="PlusIcon"
                padding="2"
                bgColor="white"
                textColor="gray-400"
                :hoverBgColor="'white'"
              />
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import PrimaryBtn from "../../../molecules/Button/Primary/Primary.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Button from "../../../atoms/Button/Button.vue";
import CircleButton from "../../../molecules/Button/Circular/Circular.vue";
/**
 * - Use it to show empty state with recommendations
 */

export default {
  components: {
    TextInput,
    PrimaryBtn,
    AvatarText,
    Text,
    Icon,
    Button,
    CircleButton,
  },
  props: {
    /**
     * Use it for title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it for input value
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * Use it for input placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it for button
     */
    btnText: {
      type: String,
      default: "",
    },
    /**
     * Use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
    /**
     * Use it for list
     */
    list: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for list label
     */
    listLabel: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      // getter
      get() {
        return this.value;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>

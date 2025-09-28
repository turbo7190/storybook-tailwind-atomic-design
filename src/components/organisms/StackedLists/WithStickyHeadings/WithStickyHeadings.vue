<template>
  <nav class="h-screen overflow-scroll" aria-label="Directory">
    <div
      v-for="letter in Object.keys(directory)"
      :key="letter"
      class="relative"
    >
      <div
        class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
      >
        <Text :content="letter" />
      </div>
      <ul role="list" class="relative z-0 divide-y divide-gray-200">
        <li
          v-for="person in directory[letter]"
          :key="person.id"
          class="bg-white"
        >
          <div
            class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500"
          >
            <AvatarText
              :href="person.imageUrl"
              :title="person.name"
              :subtitle="person.role"
              :username="person.name"
            />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
import Text from "../../../atoms/Text/Text.vue";

export default {
  components: {
    AvatarText,
    Text,
  },
  props: {
    directory: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

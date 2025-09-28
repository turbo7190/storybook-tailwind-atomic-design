<template>
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="person in people" :key="person.email" class="flex py-4">
      <AvatarText
        :href="person.image"
        :title="person.name"
        :subtitle="person.email"
        :username="person.name"
      />
    </li>
  </ul>
</template>

<script>
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";

export default {
  components: {
    AvatarText,
  },
  props: {
    people: {
      type: Array,
      default: () => {},
    },
  },
};
</script>

<template>
  <div class="rounded-lg bg-white overflow-hidden shadow">
    <div class="bg-white p-6">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="sm:flex sm:space-x-5">
          <div class="flex-shrink-0">
            <Avatar
              :username="user.name"
              isCircle
              :src="user.imageUrl"
              size="20"
            />
          </div>
          <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
            <Text
              size="sm"
              weight="medium"
              color="gray-600"
              content="Welcome back,"
            />
            <Text
              size="xl"
              weight="bold"
              color="gray-900"
              customClass="sm:text-2xl"
              :content="user.name"
            />
            <Text
              size="sm"
              weight="medium"
              color="gray-600"
              :content="user.role.toString()"
            />
          </div>
        </div>
        <div class="mt-5 flex justify-center sm:mt-0">
          <Button :content="btnText" variant="secondary" :onClick="onClick" />
        </div>
      </div>
    </div>
    <div
      class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="px-6 py-5 flex justify-center text-center"
      >
        <Text
          size="sm"
          weight="medium"
          color="gray-900"
          :content="stat.value.toString()"
          customClass="mr-1"
        />
        <Text
          size="sm"
          weight="medium"
          color="gray-900"
          :content="stat.label.toString()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show page header with avatar and action button.
 */
export default {
  components: {
    Button,
    Avatar,
    Text,
  },
  props: {
    /**
     * Use it for avatar part
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * Use it for stats list
     */
    stats: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for button text
     */
    btnText: {
      type: String,
      default: "View Profile",
    },
    /**
     * Use it for button action
     */
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

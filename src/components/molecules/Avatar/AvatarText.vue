<template>
  <a
    href="#"
    class="flex-shrink-0 group block no-underline"
    :class="customClass"
  >
    <div class="flex items-center">
      <div>
        <Avatar
          :size="size"
          :is-circle="true"
          :src="src"
          :username="username"
        />
      </div>
      <div class="ml-3">
        <Text
          :content="title"
          size="sm"
          weight="medium"
          :color="titleColor"
          custom-class="group-hover:text-gray-900"
        />
        <Text
          :content="subtitle"
          size="xs"
          weight="medium"
          :color="subtitleColor"
          custom-class="group-hover:text-gray-700"
        />
      </div>
    </div>
  </a>
</template>

<script>
/**
- Used for displaying avatar with title and subtitle
- username is required and is used to display initials in case src is not provided
- if src and username are not provided then placeholder-icon is shown
- title and subtitle are used to display text with avatar
**/
import Avatar from "../../atoms/Avatar/Avatar.vue";
import Text from "../../atoms/Text/Text.vue";

export default {
  name: "AvatarText",
  components: { Avatar, Text },
  props: {
    /**
    Avatar comes in 5 sizes. By default 8 is set
    */
    size: {
      type: [String, Number],
      default: "8",
    },
    /**
      title text to show with avatar
    */
    title: {
      type: String,
      default: "",
    },
    /**
      subtitle text to show below title
    */
    subtitle: {
      type: String,
      default: "",
    },
    /**
    The URL of the Avatar image
    */
    src: {
      type: String,
      default: "",
    },
    titleColor: {
      type: String,
      default: "gray-700",
    },
    subtitleColor: {
      type: String,
      default: "gray-500",
    },
    customClass: {
      type: String,
      default: "",
    },
    /**
      Avatar fallbacks to user initials if no name is provided
    */
    username: {
      type: String,
      required: true,
    },
  },
};
</script>

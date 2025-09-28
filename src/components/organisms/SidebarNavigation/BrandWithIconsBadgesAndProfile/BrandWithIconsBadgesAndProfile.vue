<template>
  <div class="flex-1 flex flex-col min-h-0 bg-primary-700">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <img class="h-8 w-auto" :src="logo" alt="Workflow" />
      </div>
      <nav class="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-primary-800 text-white'
              : 'text-primary-100 hover:bg-primary-600 hover:bg-opacity-75',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
          ]"
        >
          <Icon
            isOutline
            :name="item.icon"
            size="6"
            color="primary-300"
            class="mr-3 flex-shrink-0"
          />
          <Text
            class="flex-1"
            size="sm"
            weight="medium"
            :color="item.current ? 'white' : 'primary-100'"
            :content="item.name"
          />
          <Badge
            v-if="item.count"
            px="3"
            py="0.5"
            size="xs"
            weight="medium"
            :bgColor="item.current ? 'primary-600' : 'primary-800'"
            :textColor="item.current ? 'white' : 'primary-100'"
            :label="item.count.toString()"
          />
        </a>
      </nav>
    </div>
    <div class="flex-shrink-0 flex border-t border-primary-800 p-4">
      <a href="#" class="flex-shrink-0 w-full group block">
        <AvatarText
          :src="user.avatar"
          :username="user.name"
          :title="user.name"
          :subtitle="user.role"
          :titleColor="'white'"
          :subtitleColor="'primary-200'"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
import Badge from "../../../molecules/Badge/Basic/Basic.vue";
/**
 * - Use it to show a sidebar navigation with icons, badges and profile
 */
export default {
  components: {
    Icon,
    Text,
    AvatarText,
    Badge,
  },
  props: {
    /**
     * Use it to show logo
     */
    logo: {
      type: String,
      default: "",
    },
    /**
     * Use it to show navigation list
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it to show user profile
     */
    user: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<template>
  <div>
    <div>
      <img
        class="h-32 w-full object-cover lg:h-48"
        :src="profile.backgroundImage"
        alt=""
      />
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <Avatar
            isCircle
            size="24"
            :src="profile.avatar"
            :username="profile.name"
            class="ring-4 ring-white sm:h-32 sm:w-32"
          />
        </div>
        <div
          class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
        >
          <div class="sm:hidden md:block mt-6 min-w-0 flex-1">
            <Text
              size="2xl"
              weight="bold"
              color="gray-900"
              :content="profile.name"
            />
          </div>
          <div
            class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <ButtonWithIcon
              v-for="(button, i) in buttons"
              :key="i"
              variant="secondary"
              :iconName="button.icon"
              iconSize="5"
              textColor="gray-400"
              :content="button.label"
              leading
              :onClick="button.onClick"
            />
          </div>
        </div>
      </div>
      <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
        <Text
          size="2xl"
          weight="bold"
          color="gray-900"
          :content="profile.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Text from "../../../atoms/Text/Text.vue";
import ButtonWithIcon from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show page header with banner image
 */
export default {
  components: {
    Avatar,
    Text,
    ButtonWithIcon,
  },
  props: {
    /**
     * Use it for avatar, name, banner
     */
    profile: {
      type: Object,
      default: () => {},
    },
    /**
     * Use it for buttons list
     */
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

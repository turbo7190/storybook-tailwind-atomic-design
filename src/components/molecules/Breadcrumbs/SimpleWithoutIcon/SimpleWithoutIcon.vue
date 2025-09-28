<template>
  <nav class="hidden sm:flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li v-for="(breadcrumb, i) in breadcrumbs" :key="i">
        <div class="flex items-center">
          <Icon
            :isOutline="false"
            color="gray-400"
            size="5"
            name="ChevronRightIcon"
            class="mr-2"
            aria-hidden
            v-if="i !== 0"
          />
          <a
            @click="$router.push({ name: breadcrumb })"
            class="
              text-sm
              font-medium
              text-gray-500
              hover:text-primary-400
              cursor-pointer
            "
            >{{ breadcrumb }}</a
          >
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";
/**
 * - Use it to show a simple breadcrumbs without icon
 */
export default {
  components: { Icon },
  props: {
    /**
     * use it for breadcrumbs list
     */
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

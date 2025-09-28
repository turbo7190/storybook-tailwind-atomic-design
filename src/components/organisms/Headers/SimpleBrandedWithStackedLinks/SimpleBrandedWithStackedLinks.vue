<template>
  <header class="bg-primary-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-primary-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <img class="h-10 w-auto" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80" alt="" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <Link v-for="link in navigation" :key="link.name" :url="link.href" :content="link.name" color="white" hoverColor="primary-50" size="base" weight="medium"/>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <Button content="Sign in" variant="secondary" class="text-base"/>
          <Button content="Sign up" variant="primary" customClass="text-base border border-gray-300"/>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <Link v-for="link in navigation" :key="link.name" :url="link.href" :content="link.name" color="white" hoverColor="primary-50" size="base" weight="medium"/>
      </div>
    </nav>
  </header>
</template>

<script>
import Button from '../../../atoms/Button/Button.vue'
import Text from '../../../atoms/Text/Text.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show simple branded header with stacked links
 */
export default {
  components: {
    Button, Text, Link
  },
	props: {
    /**
     * Use it for navigation list
     */
    navigation: {
      type: Array,
      default: () => []
    },
  }
}
</script>

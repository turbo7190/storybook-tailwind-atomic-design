
<template>
  <div class="bg-white">
    <h2 class="sr-only">{{heading}}</h2>
    <div class="flex overflow-x-auto">
      <div class="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
        <div v-for="item in items" :key="item.name" class="flex items-center text-sm font-medium text-primary-600">
          <component :is="item.icon" class="mr-2 flex-none w-6 h-6" aria-hidden="true" />
						<Text
							:content="item.name"
						/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Text from "../../../../atoms/Text/Text.vue";

export default {
	components: {
		Text,
	},
  props: ['heading','items']
}
</script>

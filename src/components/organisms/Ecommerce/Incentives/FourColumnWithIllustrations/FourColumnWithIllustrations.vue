
<template>
  <div class="bg-gray-50">
    <div class="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="item in items" :key="item.name">
          <Image :src="item.imageSrc" customClass="w-auto h-24" />
          <Text
            :content="item.name"
            weight="medium"
            color="gray-900"
            size="sm"
            customClass="mt-6"
          />
          <Text
            :content="item.description"
            color="gray-500"
            size="sm"
            customClass="mt-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Text from "../../../../atoms/Text/Text.vue";
import Image from "../../../../atoms/Image/Image.vue";

export default {
	components: {
		Text,
		Image,
	},
	props: ['items'],
}
</script>

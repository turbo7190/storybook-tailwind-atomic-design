
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
        <div v-for="item in items" :key="item.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
          <div class="sm:flex-shrink-0">
            <div class="flow-root">
							<Image :src="item.imageSrc" customClass="w-28 h-24 mx-auto" />
            </div>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
						<Text
							:content="item.name"
							weight="medium"
							color="gray-900"
							size="sm"
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
	props: ['heading','items']
}
</script>

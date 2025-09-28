
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
        <div class="max-w-xl mx-auto lg:max-w-none">
          <div class="text-center">
            <Text
              :content="heading"
              weight="extrabold"
              color="gray-900"
              size="2xl"
              customClass="tracking-tight"
            />
          </div>
          <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            <div v-for="item in items" :key="item.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
							<Image :src="item.imageSrc" customClass="w-16 h-16 mx-auto" />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
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


<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
          <div>
            <Text
              :content="heading"
              weight="extrabold"
              color="gray-900"
              size="4xl"
              customClass="tracking-tight"
            />
            <Text
              :content="description"
              color="gray-500"
              customClass="mt-4"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
            <Image :src="imageSrc" customClass="w-full h-full object-center object-cover" />
          </div>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          <div v-for="item in items" :key="item.name" class="sm:flex lg:block">
            <div class="sm:flex-shrink-0">
							<Image :src="item.imageSrc" customClass="w-16 h-16 mx-auto" />
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
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
</template>

<script>

import Text from "../../../../atoms/Text/Text.vue";
import Image from "../../../../atoms/Image/Image.vue";

export default {
	components: {
		Text,
		Image,
	},
	props: ['heading','description','imageSrc','items']
}
</script>

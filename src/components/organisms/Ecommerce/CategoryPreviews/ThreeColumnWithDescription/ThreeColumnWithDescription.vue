
<template>
  <div class="bg-white">
    <div class="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Text
        content="Shop by Collection"
        weight="extrabold"
        color="gray-900"
        size="2xl"
        customClass="tracking-tight"
      />
      <Text
        content="Each season, we collaborate with world-class designers to create a collection inspired by the natural world."
        weight="normal"
        color="gray-500"
        size="base"
        customClass="mt-4"
      />
      <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <a v-for="item in items" :key="item.name" :href="item.href" class="group block">
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
            <Image :src="item.imageSrc" customClass="w-full h-full object-center object-cover" :alt="item.imageAlt" />
          </div>
						<Text
							:content="item.name"
							weight="normal"
							color="gray-900"
							size="base"
							customClass="font-semibold"
						/>
						<Text
							:content="item.description"
							weight="normal"
							color="gray-500"
							size="sm"
							customClass="mt-2"
						/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import Image from "../../../../atoms/Image/Image.vue";
import Text from "../../../../atoms/Text/Text.vue";

export default {
	components: {
		Image,
		Text
	},
  props: ['items']
}
</script>

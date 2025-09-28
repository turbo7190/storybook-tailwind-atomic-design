<template>
	<div class="bg-white h-screen overflow-scroll">
		<div class="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">{{title}}</h2>
				<p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>
			</div>

			<div class="mt-16 space-y-16">
				<div v-for="(feature, featureIdx) in features" :key="feature.name"
						 class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
					<div
							:class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4']">
						<h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
						<p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
					</div>
					<div
							:class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8']">
						<div class="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
							<img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    name: "WithAlternatingSections",
    props: {
        title: {
            type: String,
            default: null
        },
        desc: {
            type: String,
            default: null
        },
        features: {
            type: Array,
            default: null
        }
    },
}
</script>

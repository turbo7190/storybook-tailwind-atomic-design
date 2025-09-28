<template>
	<div class="bg-white h-screen overflow-scroll">
		<div aria-hidden="true" class="relative">
			<img :src="imageSrc" :alt="imageAlt" class="w-full h-96 object-center object-cover"/>
			<div class="absolute inset-0 bg-gradient-to-t from-white"/>
		</div>

		<div class="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
			<div class="max-w-2xl mx-auto text-center lg:max-w-4xl">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">{{title}}</h2>
				<p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>
			</div>

			<dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
				<div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
					<dt class="font-medium text-gray-900">{{ feature.name }}</dt>
					<dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
				</div>
			</dl>
		</div>
	</div>
</template>

<script>

export default {
    name: "WithFadingImage",
    props: {
        title: {
            type: String,
            default: null
        },
        imageSrc: {
            type: String,
            default: null
        },
        imageAlt: {
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

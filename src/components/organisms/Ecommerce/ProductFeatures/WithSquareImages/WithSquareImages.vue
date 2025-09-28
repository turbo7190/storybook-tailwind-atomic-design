<template>
	<div class="bg-white h-screen overflow-scroll">
		<div class="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="max-w-3xl">
				<h2 id="features-heading" class="font-medium text-gray-500" v-if="heading">{{heading}}</h2>
				<p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">{{title}}</p>
				<p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>
			</div>

			<div class="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
				<div v-for="feature in features" :key="feature.name" class="flex flex-col-reverse">
					<div class="mt-6">
						<h3 class="text-sm font-medium text-gray-900">{{ feature.name }}</h3>
						<p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
					</div>
					<div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
						<img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import * as heroIcons from "@heroicons/vue/24/solid";
    import * as heroOutlineIcons from "@heroicons/vue/24/outline";

    export default {
        name: "WithSquareImages",
        props: {
            title: {
                type: String,
                default: null
            },
            heading: {
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
        data() {
            return {
            };
        },
        mounted() {
        },
    };
</script>

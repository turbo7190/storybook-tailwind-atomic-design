<template>
	<div class="bg-white h-screen overflow-scroll">
		<div
				class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
			<div>
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">{{title}}</h2>
				<p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>

				<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
					<div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-900">{{ feature.name }}</dt>
						<dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
					</div>
				</dl>
			</div>
			<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
				<img v-for="image in images" :src="image.src" :alt="image.alt"
						 class="bg-gray-100 rounded-lg"/>
			</div>
		</div>
	</div>
</template>

<script>
    import * as heroIcons from "@heroicons/vue/24/solid";
    import * as heroOutlineIcons from "@heroicons/vue/24/outline";

    export default {
        name: "WithImageGrid",
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
            },
            images: {
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

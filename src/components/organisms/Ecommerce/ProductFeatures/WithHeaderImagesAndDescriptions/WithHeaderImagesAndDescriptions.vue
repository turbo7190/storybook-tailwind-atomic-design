<template>
	<div class="bg-gray-50 h-screen overflow-scroll">
		<div class="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
			<!-- Details section -->
			<section aria-labelledby="details-heading">
				<div class="flex flex-col items-center text-center">
					<h2 id="details-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{title}}</h2>
					<p class="mt-3 max-w-3xl text-lg text-gray-600">{{desc}}</p>
				</div>

				<div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
					<div v-for="feature in features">
						<div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
							<img :src="feature.imageSrc" :alt="feature.imageAlt"
									 class="w-full h-full object-center object-cover"/>
						</div>
						<p class="mt-8 text-base text-gray-500" v-if="feature.desc">{{feature.desc}}</p>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
    import * as heroIcons from "@heroicons/vue/24/solid";
    import * as heroOutlineIcons from "@heroicons/vue/24/outline";

    export default {
        name: "WithHeaderImagesAndDescriptions",
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
        data() {
            return {
            };
        },
        mounted() {
        },
    };
</script>

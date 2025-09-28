<template>
	<div class="bg-white h-screen overflow-scroll">
		<section aria-labelledby="features-heading" class="relative">
			<div
					class="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
				<img :src="imageSrc" :alt="imageAlt" class="h-full w-full object-center object-cover lg:h-full lg:w-full"/>
			</div>

			<div
					class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
				<div class="lg:col-start-2">
					<h2 id="features-heading" class="font-medium text-gray-500" v-if="heading">{{heading}}</h2>
					<p class="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight" v-if="title">{{title}}</p>
					<p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>

					<dl class="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
						<div v-for="feature in features" :key="feature.name">
							<dt class="font-medium text-gray-900">{{ feature.name }}</dt>
							<dd class="mt-2 text-gray-500">{{ feature.description }}</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
    import * as heroIcons from "@heroicons/vue/24/solid";
    import * as heroOutlineIcons from "@heroicons/vue/24/outline";

    export default {
        name: "WithSplitImage",
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
            },
            imageSrc: {
                type: String,
                default: null
            },
            imageAlt: {
                type: String,
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

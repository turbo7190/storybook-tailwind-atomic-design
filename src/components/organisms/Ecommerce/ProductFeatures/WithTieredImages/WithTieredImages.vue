<template>
	<div class="bg-white h-screen overflow-scroll">
		<div class="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
				<div>
					<div class="border-b border-gray-200 pb-10">
						<h2 class="font-medium text-gray-500" v-if="heading">{{heading}}</h2>
						<p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">{{title}}</p>
					</div>

					<dl class="mt-10 space-y-10">
						<div v-for="feature in features" :key="feature.name">
							<dt class="text-sm font-medium text-gray-900">{{ feature.name }}</dt>
							<dd class="mt-3 text-sm text-gray-500">{{ feature.description }}</dd>
						</div>
					</dl>
				</div>

				<div>
					<div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
						<img v-if="mainImage" :src="mainImage.src" :alt="mainImage.alt"
								 class="w-full h-full object-center object-cover"/>
					</div>
					<div v-if="subImages" class="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
						<div v-for="item in subImages" class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
							<img :src="item.src" :alt="item.alt"
									 class="w-full h-full object-center object-cover"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue'

    export default {
        name: "WithTieredImages",
        components: {
            Tab,
            TabGroup,
            TabList,
            TabPanel,
            TabPanels,
        },
        props: {
            title: {
                type: String,
                default: null
            },
            heading: {
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
                mainImage: null,
                subImages: null
            };
        },
        mounted() {
            if (this.images && this.images.length > 0) {
                this.mainImage = this.images[0];
                this.subImages = this.images.slice(1);
            }
        },
    };
</script>

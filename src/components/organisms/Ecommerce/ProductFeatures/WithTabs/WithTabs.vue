<template>
	<div class="bg-white h-screen overflow-scroll">
		<section aria-labelledby="features-heading" class="max-w-7xl mx-auto py-32 sm:px-2 lg:px-8">
			<div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
				<div class="max-w-3xl">
					<h2 id="features-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" v-if="title">
                        {{title}}
                    </h2>
					<p class="mt-4 text-gray-500" v-if="desc">{{desc}}</p>
				</div>

				<TabGroup as="div" class="mt-4">
					<div class="-mx-4 flex overflow-x-auto sm:mx-0">
						<div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
							<TabList class="-mb-px flex space-x-10">
								<Tab as="template" v-for="tab in tabs" :key="tab.name" v-slot="{ selected }">
									<button
											:class="[selected ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">
										{{ tab.name }}
									</button>
								</Tab>
							</TabList>
						</div>
					</div>

					<TabPanels as="template">
						<TabPanel v-for="tab in tabs" :key="tab.name" class="space-y-16 pt-10 lg:pt-16">
							<div v-for="feature in tab.features" :key="feature.name"
									 class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
								<div class="mt-6 lg:mt-0 lg:col-span-5">
									<h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
									<p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
								</div>
								<div class="lg:col-span-7">
									<div class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
										<img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-center object-cover"/>
									</div>
								</div>
							</div>
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</div>
		</section>
	</div>
</template>

<script>
    import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue'

    export default {
        name: "WithTabs",
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
            desc: {
                type: String,
                default: null
            },
            tabs: {
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

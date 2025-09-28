<template>
	<div class="relative bg-white py-16 sm:py-24 h-screen overflow-scroll ">
		<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
			<div class="relative sm:py-16 lg:py-0">
				<div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
					<div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"/>
					<svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392"
							 fill="none" viewBox="0 0 404 392">
						<defs>
							<pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20"
											 patternUnits="userSpaceOnUse">
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
							</pattern>
						</defs>
						<rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
					</svg>
				</div>
				<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
					<!-- Testimonial card-->
					<div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <slot name="testimonial" />
					</div>
				</div>
			</div>

			<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
				<!-- Content area -->
                <slot />

                <!-- Stats section -->
				<div class="mt-10">
					<dl class="grid grid-cols-2 gap-x-4 gap-y-8">
						<div v-for="stat in stats" :key="stat.label" class="border-t-2 border-gray-100 pt-6">
							<dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>
							<dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ stat.value }}</dd>
						</div>
					</dl>
					<div class="mt-10">
						<a :href="linkUrl" class="text-base font-medium text-primary-600"> {{linkLabel}}
							<span aria-hidden="true">&rarr;</span> </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    name: "StatsTestimonialContent",
    props: {
        stats: {
            type: Array,
            default: () => []
        },
        linkUrl: {
            type: String,
            default: "#"
        },
        linkLabel: {
            type: String,
            default: ""
        }
    },
}
</script>

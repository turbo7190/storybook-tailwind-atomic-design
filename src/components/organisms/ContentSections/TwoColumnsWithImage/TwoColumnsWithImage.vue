<template>
	<div class="bg-white overflow-hidden h-screen overflow-scroll ">
		<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"/>
			<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                <div>
                    <slot name="header" />
                </div>
			</div>
			<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
				<div class="relative lg:row-start-1 lg:col-start-2">
					<svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none"
							 viewBox="0 0 404 384" aria-hidden="true">
						<defs>
							<pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
											 patternUnits="userSpaceOnUse">
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
							</pattern>
						</defs>
						<rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
					</svg>
					<div class="relative text-base mx-auto max-w-prose lg:max-w-none">
						<figure>
							<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
								<img class="rounded-lg shadow-lg object-cover object-center"
										 :src="imageUrl"
										 alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376"/>
							</div>
							<figcaption class="mt-3 flex text-sm text-gray-500">
                                <slot name="imageDesc" />
							</figcaption>
						</figure>
					</div>
				</div>
				<div class="mt-8 lg:mt-0">
                    <slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    name: "TwoColumnsWithImage",
    props: {
        imageUrl: {
            type: String,
            default: "",
        },
    },
	components: {
	},
}
</script>

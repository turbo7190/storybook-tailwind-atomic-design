<template>
	<div class="h-screen overflow-scroll relative bg-white">
		<div class="lg:absolute lg:inset-0">
			<div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
				<img class="h-56 w-full object-cover lg:absolute lg:h-full"
						 :src="imgUrl"
						 alt=""/>
			</div>
		</div>
		<div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
			<div class="lg:col-start-2 lg:pl-8">
				<div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    /**
     - Use a button for actions within applications
     - different variants i.e. primary, secondary etc. and sizes supported
     **/
    export default {
        name: "ImageSplitContent",
        props: {
            /**
             Used this prop to assign custom classes to container
             */
            customClass: {
                type: String,
                default: "",
            },
            imgUrl: {
                type: String,
                default: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            }
        }
    };
</script>

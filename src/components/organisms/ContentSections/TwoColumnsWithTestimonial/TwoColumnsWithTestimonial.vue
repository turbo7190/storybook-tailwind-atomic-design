<template>
  <div class="py-16 bg-gray-50 overflow-hidden h-screen overflow-scroll">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <slot name="header" />
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <slot />
        </div>
        <div
          class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none"
        >
          <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
            />
          </svg>
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <slot name="testimonial" />
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoColumnsWithTestimonial",
};
</script>

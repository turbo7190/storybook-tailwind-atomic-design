import Component from './WithTestimonialAndStats.vue';

export default {
    title: 'Components/Organisms/Content Sections',
    component: Component,
    argTypes: {
        stats: {
            type: 'array'
        },
    },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args">' +
      '<template #testimonial>' +
      '  <img class="absolute inset-0 h-full w-full object-cover"' +
      '         src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"' +
      '         alt=""/>' +
      '  <div class="absolute inset-0 bg-primary-500 mix-blend-multiply"/>' +
      '  <div class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-90"/>' +
      '  <div class="relative px-8">' +
      '    <div>' +
      '        <img class="h-12" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Workcation"/>' +
      '    </div>' +
      '    <blockquote class="mt-8">' +
      '        <div class="relative text-lg font-medium text-white md:flex-grow">' +
      '            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"' +
      '                     fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">' +
      '                <path' +
      '                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>' +
      '            </svg>' +
      '            <p class="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in' +
      '                volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>' +
      '        </div>' +
      '        <footer class="mt-4">' +
      '            <p class="text-base font-semibold text-primary-200">Sarah Williams, CEO at Workcation</p>' +
      '        </footer>' +
      '    </blockquote>' +
      '  </div>' +
      '</template>' +
      '<div class="pt-12 sm:pt-16 lg:pt-20">\n' +
      '    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">On a mission to empower\n' +
      '        teams</h2>\n' +
      '    <div class="mt-6 text-gray-500 space-y-6">\n' +
      '        <p class="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur\n' +
      '            neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus\n' +
      '            morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>\n' +
      '        <p class="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum.\n' +
      '            Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.\n' +
      '            Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium\n' +
      '            arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>\n' +
      '        <p class="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel\n' +
      '            ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh\n' +
      '            id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>\n' +
      '    </div>\n' +
      '</div>' +
      '</component>',
});

export const WithTestimonialAndStats = Template.bind({});
WithTestimonialAndStats.args = {
    stats: [
        {label: 'Founded', value: '2021'},
        {label: 'Employees', value: '5'},
        {label: 'Beta Users', value: '521'},
        {label: 'Raised', value: '$25M'},
    ],
    linkLabel: "Learn more about how we're changing the world"
};

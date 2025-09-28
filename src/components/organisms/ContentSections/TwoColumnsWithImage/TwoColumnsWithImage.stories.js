import Component from "./TwoColumnsWithImage.vue";
// CameraIcon referenced as string in template

export default {
  title: "Components/Organisms/Content Sections",
  component: Component,
  argTypes: {
    imageUrl: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template:
    '<component v-bind="args">' +
    "<template #header>" +
    '    <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">Case Study</h2>' +
    '    <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Whitney</h3>' +
    "</template>" +
    "<template #imageDesc>" +
    '    <Icon name="CameraIcon" class="flex-none w-5 h-5 text-gray-400" aria-hidden="true"/>' +
    '    <span class="ml-2">Photograph by Marcus O’Leary</span>' +
    "</template>" +
    '<div class="text-base max-w-prose mx-auto lg:max-w-none">' +
    '    <p class="text-lg text-gray-500">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed' +
    "        consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>" +
    "</div>" +
    '<div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">' +
    "    <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium" +
    "        arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>" +
    "    <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet" +
    "        fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>" +
    "    <p>Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus." +
    "        In.</p>" +
    '    <ul role="list">' +
    "        <li>Quis elit egestas venenatis mattis dignissim.</li>" +
    "        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>" +
    "        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>" +
    "    </ul>" +
    "    <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit" +
    "        faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim" +
    "        sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>" +
    "    <h3>How we helped</h3>" +
    "    <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes," +
    "        magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus." +
    "        Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>" +
    "    <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique" +
    "        pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>" +
    "</div>" +
    "</component>",
});

export const TwoColumnsWithImage = Template.bind({});
TwoColumnsWithImage.args = {
  imageUrl:
    "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80",
};

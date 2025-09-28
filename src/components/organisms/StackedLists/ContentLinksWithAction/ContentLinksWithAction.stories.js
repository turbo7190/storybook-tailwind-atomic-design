import Component from "./ContentLinksWithAction.vue";

export default {
  title: "Components/Organisms/Stacked Lists",
  component: Component,
  argTypes: {},
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ContentLinksWithAction = Template.bind({});
ContentLinksWithAction.args = {
  announcements: [
    {
      id: 1,
      title: "Office closed on July 2nd",
      preview:
        "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
    },
    {
      id: 2,
      title: "New password policy",
      preview:
        "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
    },
    {
      id: 3,
      title: "Office closed on July 2nd",
      preview:
        "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
    },
  ],
};

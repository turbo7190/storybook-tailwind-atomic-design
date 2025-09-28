import AvatarWithBadge from "./AvatarWithBadge.vue";
import AvatarGroup from "./AvatarGroup.vue";
import AvatarText from "./AvatarText.vue";

export default {
  title: "Components/Molecules/Avatar",
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["6", "8", "10", "12", "14"],
      description: "assign size to avatar",
    },
    username: {
      type: "string",
      description: "provide name to show initials",
    },
    badgeSize: {
      control: { type: "select" },
      options: [1.5, 2, 2.5, 3, 3.5, 4],
      description: "assign size to badge",
    },
    badgeBgColor: {
      control: { type: "select" },
      options: ["gray", "red", "green"],
      description: "assign background color to badge",
    },
    badgeBgWeight: {
      control: { type: "select" },
      options: [100, 200, 300, 400, 500, 600, 700, 800],
      description: "assign background color weight to badge",
    },
    isTop: {
      control: { type: "boolean" },
      description: "switch between top and bottom position",
    },
    isRight: {
      control: { type: "boolean" },
      description: "switch between right and left position",
    },
    stackType: {
      control: { type: "select" },
      options: ["B2T", "T2B"],
      description: "placement of group items as stack",
    },
  },
  parameters: {
    componentSubtitle: "Displays an Avatar with text, badge or in a group",
  },
};

export const AvatarWithBadgeExamples = (args) => ({
  components: { AvatarWithBadge },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <avatar-with-badge v-bind="args" is-circle />
      <avatar-with-badge v-bind="args" is-circle is-right />
      <avatar-with-badge
        v-bind="args"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        is-circle
      />
      <avatar-with-badge
        v-bind="args"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <avatar-with-badge
        v-bind="args"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        is-right
      />
    </div>
  `,
});
AvatarWithBadgeExamples.args = {
  size: 8,
  badgeSize: 4,
  badgeBgColor: "gray",
  badgeBgWeight: 100,
  isTop: true,
  username: "Tom Cook",
};
AvatarWithBadgeExamples.parameters = {
  docs: {
    storyDescription:
      "Avatar with badge with options for customizing position, color and size",
  },
};

const AvatarGroupTemplate = (args) => ({
  components: { AvatarGroup },
  setup() {
    return { args };
  },
  template: '<avatar-group v-bind="args" />',
});

export const AvatarGroupStackB2T = AvatarGroupTemplate.bind({});
AvatarGroupStackB2T.args = {
  items: [
    {
      id: 1,
      username: "test user",
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      size: 12,
    },
    {
      id: 2,
      username: "test user",
      src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      size: 12,
    },
    {
      id: 3,
      username: "test user",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      size: 12,
    },
    {
      id: 4,
      username: "test user",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      size: 12,
    },
  ],
  stackType: "B2T",
};
AvatarGroupStackB2T.parameters = {
  docs: {
    storyDescription: "supports array of avatars",
  },
};

export const AvatarGroupStackT2B = AvatarGroupTemplate.bind({});
AvatarGroupStackT2B.args = {
  items: [
    {
      id: 1,
      username: "test user",
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      size: 12,
    },
    {
      id: 2,
      username: "test user",
      src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      size: 12,
    },
    {
      id: 3,
      username: "test user",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      size: 12,
    },
    {
      id: 4,
      username: "test user",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      size: 12,
    },
  ],
  stackType: "T2B",
};
AvatarGroupStackT2B.parameters = {
  docs: {
    storyDescription: "supports array of avatars",
  },
};

export const AvatarWithText = (args) => ({
  components: { AvatarText },
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3">
      <avatar-text v-bind="args" />
      <avatar-text
        v-bind="args"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </div>
  `,
});
AvatarWithText.args = {
  size: 8,
  title: "Tom Cook",
  subtitle: "View Profile",
  username: "Tom Cook",
};
AvatarWithText.parameters = {
  docs: {
    storyDescription: "Avatar component with title and subtitle",
  },
};

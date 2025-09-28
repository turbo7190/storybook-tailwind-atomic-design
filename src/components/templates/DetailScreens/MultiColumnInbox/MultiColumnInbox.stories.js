import Component from "./MultiColumnInbox.vue";
import {
  ArchiveBoxXMarkIcon as ArchiveBoxXMarkIconOutline,
  NoSymbolIcon,
  FlagIcon,
  InboxIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

export default {
  title: "Components/Templates/Detail Screens",
  component: Component,
  argTypes: {
    content: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const MultiColumnInbox = Template.bind({});
MultiColumnInbox.args = {
  user: {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    {
      name: "Inboxes",
      href: "#",
      children: [
        { name: "Technical Support", href: "#" },
        { name: "Sales", href: "#" },
        { name: "General", href: "#" },
      ],
    },
    { name: "Reporting", href: "#", children: [] },
    { name: "Settings", href: "#", children: [] },
  ],
  sidebarNavigation: [
    { name: "Open", href: "#", icon: InboxIcon, current: true },
    {
      name: "Archive",
      href: "#",
      icon: ArchiveBoxXMarkIconOutline,
      current: false,
    },
    { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
    { name: "Flagged", href: "#", icon: FlagIcon, current: false },
    { name: "Spam", href: "#", icon: NoSymbolIcon, current: false },
    { name: "Drafts", href: "#", icon: PencilIcon, current: false },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  messages: [
    {
      id: 1,
      subject: "Velit placeat sit ducimus non sed",
      sender: "Gloria Roberston",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 2,
      subject:
        "Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil",
      sender: "Virginia Abshire",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 3,
      subject:
        "Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus",
      sender: "Kyle Gulgowski",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 4,
      subject: "Eos sequi et aut ex impedit",
      sender: "Hattie Haag",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 5,
      subject: "Quisquam veniam explicabo",
      sender: "Wilma Glover",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 6,
      subject:
        "Est ratione molestiae modi maiores consequatur eligendi et excepturi magni",
      sender: "Dolores Morissette",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 7,
      subject: "Commodi deserunt aut veniam rem ipsam",
      sender: "Guadalupe Walsh",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 8,
      subject: "Illo illum aut debitis earum",
      sender: "Jasmine Hansen",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 9,
      subject: "Qui dolore iste ut est cumque sed",
      sender: "Ian Volkman",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
    {
      id: 10,
      subject: "Aut sed aut illum delectus maiores laboriosam ex",
      sender: "Rafael Klocko",
      href: "#",
      date: "1d ago",
      datetime: "2021-01-27T16:35",
      preview:
        "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
    },
  ],
  message: {
    subject: "Re: New pricing for existing customers",
    sender: "joearmstrong@example.com",
    status: "Open",
    items: [
      {
        id: 1,
        author: "Joe Armstrong",
        date: "Yesterday at 7:24am",
        datetime: "2021-01-28T19:24",
        body: "<p>Thanks so much! Can't wait to try it out.</p>",
      },
      {
        id: 2,
        author: "Monica White",
        date: "Wednesday at 4:35pm",
        datetime: "2021-01-27T16:35",
        body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
      },
      {
        id: 3,
        author: "Joe Armstrong",
        date: "Wednesday at 4:09pm",
        datetime: "2021-01-27T16:09",
        body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
      },
    ],
  },
};

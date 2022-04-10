const MENU_ITEMS = [
  {
    id: 1,
    name: "Normal Text",
    type: "p",
    size: "1rem",
  },
  {
    id: 2,
    name: "Heading 1",
    type: "h1",
    size: "6rem",
  },
  {
    id: 3,
    name: "Heading 2",
    type: "h2",
    size: "3.75rem",
  },
  {
    id: 4,
    name: "Heading 3",
    type: "h3",
    size: "3rem",
  },
  {
    id: 5,
    name: "Heading 4",
    type: "h4",
    size: "2.125rem",
  },
  {
    id: 8,
    name: "Link",
    type: "a",
    size: "1rem",
  },
];

const initialState = {
  editor: {
    id: 1,
    name: "Demo Editor",
    comps: [
      {
        id: 1,
        type: "h1",
        content: "",
        inputRef: null,
      },
    ],
  },
  menu: {
    menuItems: MENU_ITEMS,
  },
};

const data = {
  menuItems: MENU_ITEMS,
  initialState: initialState,
};

export default data;

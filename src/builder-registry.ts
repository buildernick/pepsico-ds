import { Builder, noWrap, withChildren } from "@builder.io/react";
import {
  CustomButton,
  CustomCard,
  CustomFilter,
  CustomSearch,
  CustomSideBar,
  CustomTab,
  CustomTabsNavigation,
  CustomTag,
} from "./components";

Builder.registerComponent(withChildren(CustomCard), {
  name: "CustomCard",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: undefined,
    },
    {
      name: "border",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "ellipsis",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "icon",
      type: "string",
      defaultValue: undefined,
    },
  ],
});

Builder.registerComponent(CustomButton, {
  name: "CustomButton",
  inputs: [
    {
      name: "type",
      type: "string",
      enum: [
        "primary",
        "secondary",
        "tertiary",
        "primary-inverse",
        "secondary-inverse",
        "tertiary-inverse",
        "auxiliary",
        "danger",
      ],
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "state",
      type: "string",
      enum: ["enabled", "hover", "disabled", "pressed", "loading", "skeleton"],
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Button",
    },
    {
      name: "iconLeading",
      type: "string",
      defaultValue: "Icon",
    },
    {
      name: "iconTrailing",
      type: "string",
      defaultValue: "arrow",
    },
    {
      name: "isDark",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(CustomTag, {
  name: "CustomTag",
  inputs: [
    {
      name: "type",
      type: "string",
      enum: ["filled", "outlined"],
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "small"],
    },
    {
      name: "text",
      type: "string",
      defaultValue: "Tag",
    },
    {
      name: "iconLeading",
      type: "string",
      defaultValue: "Icon",
    },
    {
      name: "isCopyable",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "isRemovable",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "isDark",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(CustomFilter, {
  name: "CustomFilter",
  inputs: [
    {
      name: "label",
      type: "string",
      defaultValue: "Label",
    },
  ],
});

Builder.registerComponent(CustomSearch, {
  name: "CustomSearch",
  inputs: [
    {
      name: "placeholderText",
      type: "string",
      defaultValue: "Placeholder",
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
  ],
});

Builder.registerComponent(withChildren(CustomTabsNavigation), {
  name: "CustomTabsNavigation",
});

Builder.registerComponent(noWrap(CustomTab), {
  name: "CustomTab",
  inputs: [
    {
      name: "label",
      type: "string",
      defaultValue: "Label",
    },
    {
      name: "isActive",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "isDisabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "type",
      type: "string",
      enum: ["dropdown", "close"],
    },
    {
      name: "isDark",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(CustomSideBar, {
  name: "CustomSideBar",
  inputs: [
    {
      name: "showCollapsed",
      type: "boolean",
      defaultValue: true,
    },
  ],
});

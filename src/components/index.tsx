import {
  Button,
  Card,
  Filter,
  Search,
  SideBar,
  Tab,
  TabsNavigation,
  Tag,
} from "pepsico-ds";
import React from "react";

export default Button;

const CustomButton: React.FC<React.ComponentProps<typeof Button>> = (props) => {
  return <Button {...props} />;
};

const CustomCard: React.FC<React.ComponentProps<typeof Card>> = (props) => {
  return <Card {...props} />;
};

const CustomFilter: React.FC<React.ComponentProps<typeof Filter>> = (props) => {
  return <Filter {...props} />;
};

const CustomSearch: React.FC<React.ComponentProps<typeof Search>> = (props) => {
  return <Search {...props} />;
};

const CustomTabsNavigation: React.FC<
  React.ComponentProps<typeof TabsNavigation>
> = (props) => {
  return <TabsNavigation {...props} />;
};

const CustomSideBar: React.FC<React.ComponentProps<typeof SideBar>> = (
  props
) => {
  return <SideBar {...props} />;
};

const CustomTab: React.FC<React.ComponentProps<typeof Tab>> = (props) => {
  return <Tab {...props} />;
};

const CustomTag: React.FC<React.ComponentProps<typeof Tag>> = (props) => {
  return <Tag {...props} />;
};

export {
  CustomButton,
  CustomCard,
  CustomFilter,
  CustomSearch,
  CustomSideBar,
  CustomTab,
  CustomTabsNavigation,
  CustomTag,
};

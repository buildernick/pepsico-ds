import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { CustomTabsNavigation } from "../components/index";

// ❖ Tabs Navigation
interface FigmaTabsNavigationProps extends BaseFigmaProps {
  "Show More"?: boolean;
  Type?: "Horizontal" | "Vertical";
  Amount?: "2" | "3" | "4" | "5" | "6" | "7" | "8";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Tabs Navigation",
  componentKey: "ab7b03b709bb52036cd8dc479b1d6f5b839a61eb",
  mapper(figma: FigmaTabsNavigationProps) {
    return <CustomTabsNavigation>{figma.$children}</CustomTabsNavigation>;
  },
});

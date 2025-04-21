import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { CustomSideBar } from "../components/index";

// ❖ Side Menu
interface FigmaSideMenuProps extends BaseFigmaProps {
  "Show Close"?: boolean;
  "Show Text"?: boolean;
  Text?: string;
  "Show Floating Button"?: boolean;
  Type?:
    | "Desktop Collapsed"
    | "Desktop Expanded"
    | "Tablet Collapsed"
    | "Tablet Expanded"
    | "Mobile (Overlay)";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Side Menu",
  componentKey: "c898a4cfc72ba2bcf033d95039ef2333c9cd6717",
  mapper(figma: FigmaSideMenuProps) {
    const items = figma.$children[0].$children.slice(1).map((item) => {
      return {
        icon: item.$children[0].$name.split("/")[1],
        label: "",
        url: "/",
      };
    });
    return <CustomSideBar items={items} showCollapsed={true} />;
  },
});

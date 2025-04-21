import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { CustomTab } from "../components/index";

// ❖ Tab
interface FigmaTabProps extends BaseFigmaProps {
  "Show Trailing Icon"?: boolean;
  "Show Text"?: boolean;
  "Show Leading Icon"?: boolean;
  "Leading icon"?: ChildrenNode; // when "Show Leading Icon" is true
  Text?: string; // when "Show Text" is true
  Type?: "Dropdown" | "Close";
  Layout?: "Horizontal" | "Vertical";
  State?: "Default" | "Hover" | "Active" | "Disabled" | "Skeleton";
}

type Type = React.ComponentProps<typeof CustomTab>["type"];

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Tab",
  componentKey: "b5ba4ee26b742abc5119455d65ce7d7496ebb973",
  mapper(figma: FigmaTabProps) {
    return (
      <CustomTab
        disabled={figma.State === "Disabled"}
        isActive={figma.State === "Active"}
        label={figma.Text || ""}
        type={figma.Type?.toLowerCase() as Type}
      />
    );
  },
});

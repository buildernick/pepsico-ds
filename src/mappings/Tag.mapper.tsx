import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
  explicitFalse,
} from "@builder.io/dev-tools/figma";
import { CustomTag } from "../components/index";

// ❖ Tag
interface FigmaTagProps extends BaseFigmaProps {
  "Show Leading Icon"?: boolean;
  "Leading Icon"?: ChildrenNode; // when "Show Leading Icon" is true
  "Show Trailing Icon"?: boolean;
  Text?: string;
  Style?: "Default (Auxiliary)" | "Gray" | "Green" | "Red" | "Orange" | "Blue";
  Type?: "Default" | "Faded" | "Outlined";
  Size?: "Medium" | "Small";
  State?: "Default" | "Skeleton" | "Disabled";
}

type Type = React.ComponentProps<typeof CustomTag>["type"];
type Size = React.ComponentProps<typeof CustomTag>["size"];

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Tag",
  componentKey: "be392721d71cc0924a9674455ceefd1e203d47d1",
  mapper(figma: FigmaTagProps) {
    const typeMap = {
      faded: "filled",
      outlined: "outlined",
    } as const;

    const type: Type =
      typeMap[figma.Type?.toLowerCase()! as keyof typeof typeMap];
    const size: Size = figma.Size?.toLowerCase() as Size;

    return (
      <CustomTag
        type={type}
        size={size}
        text={figma.Text}
        isCopyable={explicitFalse(false)}
      />
    );
  },
});

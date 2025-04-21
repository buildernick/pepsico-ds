import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { CustomButton } from "../components";

// ❖ Button
interface FigmaButtonProps extends BaseFigmaProps {
  "Show Leading Icon"?: boolean;
  "Show Text"?: boolean;
  "Leading icon"?: ChildrenNode; // when "Show Leading Icon" is true
  "Show Trailing Icon"?: boolean;
  Text?: string; // when "Show Text" is true
  Type?:
    | "Primary"
    | "Secondary"
    | "Tertiary"
    | "Primary Inverse"
    | "Secondary Inverse"
    | "Tertiary inverse"
    | "Auxiliary"
    | "Danger";
  Size?: "Large" | "Medium" | "Small";
  State?: "Enabled" | "Hover" | "Disabled" | "Pressed" | "Loading" | "Skeleton";
}

type Size = React.ComponentProps<typeof CustomButton>["size"];

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Button",
  componentKey: "4d0b3b39c94f8696db07a5f6fa57da456e8ab50e",
  mapper(figma: FigmaButtonProps) {
    const variantMap = {
      Primary: "primary",
      Secondary: "secondary",
      Tertiary: "tertiary",
      "Primary Inverse": "primaryInverse",
      "Secondary Inverse": "secondaryInverse",
      "Tertiary inverse": "tertiaryInverse",
      Auxiliary: "auxiliary",
      Danger: "danger",
    } as const;

    return (
      <CustomButton
        variant={variantMap[figma.Type as keyof typeof variantMap]}
        size={figma.Size?.toLowerCase() as Size}
        state={figma.State?.toLowerCase()}
        iconLeading={figma["Show Leading Icon"] && figma["Leading icon"]}
        iconTrailing={(figma["Show Trailing Icon"] && "arrow") || undefined}
        text={(figma["Show Text"] && figma.Text) || undefined}
      />
    );
  },
});

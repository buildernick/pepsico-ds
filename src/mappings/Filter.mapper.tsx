import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { CustomFilter } from "../components/index";

// ❖ Filter
interface FigmaFilterProps extends BaseFigmaProps {
  "Selected option"?: string;
  Label?: string;
  Type?: "Single select" | "Multi select";
  Size?: "Default" | "Small";
  State?:
    | "Default"
    | "Hover"
    | "Menu open"
    | "Item(s) selected"
    | "Disabled"
    | "Skeleton";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Filter",
  componentKey: "2dbac16cb3ed94c3912c691bbd2889b58c0a9a98",
  mapper(figma: FigmaFilterProps) {
    // Get label either from prop or text node
    const labelText = figma.Label ?? figma.$children[0]?.$textContent ?? "";

    return <CustomFilter label={labelText} options={[]} />;
  },
});

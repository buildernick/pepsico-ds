import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { CustomSearch } from "../components/index";

// ❖ Search
interface FigmaSearchProps extends BaseFigmaProps {
  "Show menu"?: boolean;
  Typing?: string;
  "User input"?: string;
  Placeholder?: string;
  State?: "Enabled" | "Hover" | "Focused" | "Active" | "Disabled" | "Skeleton";
  Size?: "Medium" | "Small";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Search",
  componentKey: "b8fb2b1dc56bbbabeea30059d188b6e9f7ea6ae8",
  mapper(figma: FigmaSearchProps) {
    // Extract placeholder text
    const placeholder =
      figma.Placeholder ??
      figma.$findOneByName("Text: Inactive")?.$textContent ??
      "";

    // Extract input value
    const value = figma["User input"] ?? figma.Typing ?? "";

    // Map size to component format
    const size = figma.Size?.toLowerCase() as "medium" | "small";

    // Map state to component format
    const disabled = figma.State === "Disabled";

    return (
      <CustomSearch
        placeholderText={placeholder}
        isDisabled={disabled}
        size={size}
      />
    );
  },
});

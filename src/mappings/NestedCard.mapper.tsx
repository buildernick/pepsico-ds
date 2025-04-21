import { explicitFalse, figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { CustomCard } from "../components/index";

// ❖ Nested Card
interface FigmaNestedCardProps extends BaseFigmaProps {
  "Sticky Area"?: boolean;
  Header?: boolean;
  Body?: boolean;
  Type?: "Interactive" | "Non Interactive" | "Scrollable";
  Viewport?: "Desktop" | "Mobile";
  State?: "Default" | "Hover" | "Selected" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Nested Card",
  componentKey: "a4a056f0b7a488b2d083c5e6415c9ed5c5b95279",
  mapper(figma: FigmaNestedCardProps) {
    return (
      <CustomCard ellipsis={explicitFalse(false)} icon="" border={true}>
        {figma.$findOneByName("Body")?.$children}
      </CustomCard>
    );
  },
});

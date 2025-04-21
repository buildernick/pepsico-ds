Look at all the pairs of READMEs and Image (load the images too) inside the /figma-components folder.
- Each represent information we know about an existing figma component we wanna map to a local/reusable component within the project.

In order to continue, plan a mapping strategy:

1. Analyze all the figma components (the pairs), maybe even note that some figma components are internal implementation details and should not be mapped.
2. Find all the local components that could be mapped to the figma components.
3. Cluster the components into groups, for example in order to map a Table, TableHeader, TableBody, ... you might need to take all into account when creating 1 or more mappings.
Standalone components like a Button, or Input could be by themselves, just pay attention to highly coupled components.

4. Create a MAPPING_PLAN.md file with the information collected, groups of components and relations between figma components and local components.

5. Proceed one by one, mapping each figma component to a vue component.

- Read the [MAP_VUE](./MAP_VUE.md), [MAP_REACT](./MAP_REACT.md) or [MAP_ANGULAR](./MAP_ANGULAR.md) depending on the project, do not read all of them, just the one that applies to your project.
- Follow the guide to create the mapper files inside the mappings/ folder.
- Remember that the end goal is to create COMPONENT_NAME.mapper.ts/tsx files inside the mappings/ folder.

They look like this:

```tsx
// 1. Import the figma mapping function from "@builder.io/dev-tools/figma"
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// 2.Import the local component, or multiple components
import { Avatar } from "@/components/ui/primitives/Avatar/Avatar";
import { Icon } from "@/components/ui/primitives/Icon/Icon";

// Figma component props
interface FigmaAvatarProps extends BaseFigmaProps {
  Type?: "Initial" | "Image";
  Size?: string;
  Shape?: "Circle" | "Square";
}

figmaMapping({
  componentKey: "COMPONENT_KEY",
  mapper(figma: FigmaAvatarProps) {
    return (
      <Avatar
        square={figma.Shape === "Square"}
        size={figma.Size?.toLowerCase() as "large" | "medium" | "small"}
        src={figma.Type === "Image" ? figma.$imageUrl : undefined}
      >
        {!!figma.$findOneByName("Icon") && <Icon />}
      </Avatar
    );
  },
});
```

The `figma` variable allows to access the state of the figma components:
- like props: `figma.Type`
- like children: `figma.$findOneByName("Icon")`, `figma.$children[]`
...

Check out the API reference for more in `./figma-api-reference.md`.

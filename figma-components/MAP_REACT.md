# Creating mappings for React

Component mappings in React involve creating `.mapper.tsx` or `.mapper.jsx` files that connect Figma components to your React code components. These mappings define how Figma component properties translate to React component props.

A component mapping file links a specific Figma component to a React component in your codebase. To identify the Figma component, you must include:

- `componentName`: The exact name of the component or component set in Figma (required)

And one of:
- `componentKey`: A unique identifier for the Figma component
- `url`: The Figma URL that points to the component (more human-readable)

Example of a mapping:
```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Primary Button",
  mapper(figma) {
    return (
      <Button
        variant={figma.Variant?.toLowerCase()}
        size={figma.Size?.toLowerCase()}
      >
        {figma.$children}
      </Button>
    );
  },
});
```

These mapping files are just normal files in your repository that can be created manually. However, for convenience, we also provide a CLI command to generate them more easily with AI assistance.

Once this files exist in your project, we use `npx builder.io@latest figma publish` to [publish them](/component-mapping/publishing) to your Builder Space.

## Creating Mappings Manually

Let's start by understanding how to create mappings manually, which gives you complete control over how Figma designs are translated to code.

### Manual Mapping Process in Detail

1. **Create a Mapper File**: Create a file with the naming convention `[componentName].mapper.tsx` in your project. Many developers use a dedicated `mappings` directory to organize these files, for example: `src/mappings/Button.mapper.tsx`.

2. **Import Required Dependencies**:

   ```tsx
   import { figmaMapping } from "@builder.io/dev-tools/figma";
   import YourComponent from "@/path/to/your/component";
   ```

   > **Important**: When importing components in mapper files, always use non-relative import paths that reflect how the component will be imported in production:
   >
   > ```tsx
   > // ❌ Don't use relative imports
   > import { Button } from "../components/button";
   >
   > // ✅ Use the actual package import path
   > import { Button } from "@your-org/components";
   > ```
   >
   > This is especially important when creating mappings for a design system or component library, as the mappings need to work in any project that consumes your components.

3. **Define Your Mapping Function**:

   This is where you'll write the logic that transforms Figma properties into React component props. You need to identify your Figma component using the `url` parameter:

   ```tsx
   // Using the URL approach (more human-readable)
   figmaMapping({
     componentKey: "[COMPONENT_KEY]",
     componentName: "Button Component",
     mapper(figma) {
       return (
         <YourComponent prop1={figma.Property1} prop2={figma.Property2}>
           {figma.$children}
         </YourComponent>
       );
     },
   });
   ```

## Understanding the Interfaces and APIs

The mapping function has access to a rich set of properties and methods through the `figma` parameter:

### Core Properties and Methods

#### `figma.$children`

Returns an array of all direct child nodes of the current Figma design.

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return <Button>{figma.$children}</Button>;
  },
});
```

#### `figma.$textContent`

Retrieves the text content from the current Figma design node or its text children.

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return <Button>{figma.$children[1].$textContent}</Button>;
  },
});
```

#### `figma.$findOneByName(name)`

Maps a specific child node of the current Figma component by its layer name.

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Dialog Component",
  mapper(figma) {
    return <div>{figma.$findOneByName("dialog")}</div>;
  },
});
```

#### `figma.$findOne(callback)`

Finds the first node that meets specified criteria through a callback function.

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Page Component",
  mapper(figma) {
    return <div>{figma.$findOne((node) => node.name === "Heading")}</div>;
  },
});
```

#### `figma.$visit(callback)`

Traverses all child nodes and applies a function to each one.

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Content Component",
  mapper(figma) {
    return figma.$visit((node) => {
      if (node.name === "Header") {
        return <h1>{node.$textContent}</h1>;
      } else if (node.name === "Content") {
        return node.$textContent;
      }
    });
  },
});
```

## Advanced Mapping Examples

### Basic Button Mapping

```tsx
import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Button } from "@acme/design-system";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return (
      <Button
        color={figma.Color?.toLowerCase()}
        size={figma.Size?.toLowerCase()}
        type={figma.Variant?.toLowerCase()}
      >
        {figma.$children}
      </Button>
    );
  },
});
```

### Hero Section with Multiple Content Areas

```tsx
import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Hero } from "@acme/design-system";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Hero Component",
  mapper(figma) {
    const heading = figma.Heading;
    const supportingText = figma.$findOneByName("Supporting Text").$textContent;
    const navigation = figma.$findOneByName("Navigation");

    return (
      <Hero
        heading={heading}
        supportingText={supportingText}
        navigation={navigation}
      />
    );
  },
});
```

### Getting Content from Specific Child Layers

```tsx
import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Button } from "@acme/design-system/button";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    // Use the text from the 2nd child ($children is zero indexed)
    const text = figma.$children[1].$textContent;

    return <Button>{text}</Button>;
  },
});
```

Another option is to retrieve children by their layer name:

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    const text = figma.$findOneByName("Label").$textContent;

    return <Button>{text}</Button>;
  },
});
```

### Using Your Own CSS Classes

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    // Make an array to hold the CSS class names
    const classes = ["button"];

    // If figma.variant is 'primary', add the 'button-primary' class
    if (figma.variant === "primary") {
      classes.push("button-primary");
    }

    // Return a button with className applied
    return <button className={classes.join(" ")}>{figma.Text}</button>;
  },
});
```

### Generic Mapping Function

For complex layouts or special case handling, you can create a generic mapper:

```tsx
figmaMapping({
  genericMapper(figma) {
    if (figma.$name === "Grid row") {
      return <Grid>{figma.$children}</Grid>;
    } else if (figma.$name === "Section") {
      return <section>{figma.$children}</section>;
    }
    return undefined;
  },
});
```

## Advanced Table Example

Here's a more complex example mapping a table component:

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Table Component",
  mapper(figma) {
    // Extract columns data
    const columns =
      figma.$children?.map((column) => {
        const header = column.$findOneByName("Header")?.$textContent ?? "";
        return { name: header, uid: header.toLowerCase() };
      }) ?? [];

    // Extract rows data
    const firstColumn = figma.$children?.[0];
    const rowsFrame = firstColumn?.$findOneByName("Rows");
    const rowCount = rowsFrame?.$children?.length ?? 0;

    // Create rows data structure
    const rows = Array.from({ length: rowCount }, (_, rowIndex) => {
      const rowData = {};
      figma.$children?.forEach((column) => {
        const rowItem = column.$findOneByName("Rows")?.$children?.[rowIndex];
        const cellContent =
          rowItem?.$findOneByName("Row item")?.$textContent ?? "";
        const columnId =
          column.$findOneByName("Header")?.$textContent?.toLowerCase() ?? "";
        rowData[columnId] = cellContent;
      });
      return { id: rowIndex, ...rowData };
    });

    return (
      <TableView
        aria-label="Table"
        isQuiet={figma.Style === "Quiet"}
        selectionMode={
          figma["Selection Column"] === "True" ? "multiple" : "none"
        }
      >
        <TableHeader columns={columns}>
          {(column) => <Column>{column.name}</Column>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
        </TableBody>
      </TableView>
    );
  },
});
```

## TypeScript Interfaces

When working with TypeScript, you can leverage these interfaces for better type safety in your mapping functions:

```tsx
export type FigmaNodeType =
  | "COMPONENT"
  | "ELLIPSE"
  | "FRAME"
  | "GROUP"
  | "INSTANCE"
  | "LINE"
  | "POLYGON"
  | "RECTANGLE"
  | "STAR"
  | "TEXT"
  | "VECTOR";

export interface FigmaNode extends BaseFigmaProps {
  /** Figma node "name" */
  $name: string;

  /** Figma node type (FRAME, GROUP, TEXT, etc.) */
  $type:
    | "COMPONENT"
    | "ELLIPSE"
    | "FRAME"
    | "GROUP"
    | "INSTANCE"
    | "LINE"
    | "POLYGON"
    | "RECTANGLE"
    | "STAR"
    | "TEXT"
    | "VECTOR";

  /** Represents the text content of the node and its descendants */
  $textContent: string;

  /** URL to the rasterized image of this node */
  $imageUrl: string;
}

export interface BaseFigmaProps {
  /** Direct children of the root component node or instance */
  $children: (FigmaNode | undefined)[];

  /** Recursively finds the first figma child with the given name, among all descendants */
  $findOneByName(name: string | RegExp): FigmaNode | undefined;

  /** Recursively finds all nodes with the given name, among all descendants */
  $findAllByName(name: string | RegExp): FigmaNode[];

  /** Recursively finds the first node that matches the predicate, among all descendants */
  $findOne(predicate: (node: FigmaNode) => boolean): FigmaNode | undefined;

  /** Recursively finds all nodes that match the predicate, among all descendants */
  $findAll(predicate: (node: FigmaNode) => boolean): FigmaNode[];
}
```

When creating a mapping function for a specific component, you should extend `BaseFigmaProps` with the properties from your Figma component:

```tsx
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma: FigmaButtonProps) {
    return (
      <Button
        color={figma.Color?.toLowerCase()}
        size={figma.Size?.toLowerCase()}
        type={figma.Variant?.toLowerCase()}
      >
        {figma.$children}
      </Button>
    );
  },
});
```

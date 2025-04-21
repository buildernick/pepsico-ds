# Creating mappings for Vue

Component mappings in Vue involve creating `.mapper.ts` files that connect Figma components to your Vue code components. These mappings define how Figma component properties translate to Vue component props.

A component mapping file links a specific Figma component to a Vue component in your codebase. To identify the Figma component, you must include:

- `componentName`: The exact name of the component or component set in Figma (required)

And one of:
- `componentKey`: A unique identifier for the Figma component
- `url`: The Figma URL that points to the component (more human-readable)

Example of a mapping:
```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Primary Button",
  mapper(figma) {
    return html`
      <${VButton}
        :variant=${figma.Variant?.toLowerCase()}
        :size=${figma.Size?.toLowerCase()}
      >
        ${figma.$children}
      <//>
    `;
  },
});
```

These mapping files are just normal files in your repository that can be created manually. Once these files exist in your project, we use `npx builder.io@latest figma publish` to [publish them](/component-mapping/publishing) to your Builder Space.

## Creating Mappings Manually

Let's start by understanding how to create mappings manually, which gives you complete control over how Figma designs are translated to code.

### Manual Mapping Process in Detail

1. **Create a Mapper File**: Create a file with the naming convention `[componentName].mapper.ts` in your project. Many developers use a dedicated `mappings` directory to organize these files, for example: `src/mappings/Button.mapper.ts`.

2. **Import Required Dependencies**:

   ```ts
   import { figmaMapping, html } from "@builder.io/dev-tools/figma";
   import YourComponent from "@/path/to/your/component";
   ```

   > **Important**: When importing components in mapper files, always use non-relative import paths that reflect how the component will be imported in production:
   > ```ts
   > // ❌ Don't use relative imports
   > import { Button } from '../components/button';
   > 
   > // ✅ Use the actual package import path
   > import { Button } from '@your-org/components';
   > ```
   > This is especially important when creating mappings for a design system or component library, as the mappings need to work in any project that consumes your components.

3. **Define Your Mapping Function**:

   Vue offers two approaches for defining your mappings: HTML template literals (similar to Angular) or JSX (similar to React). Choose the approach that best fits your team's preferences and existing codebase.

   #### Using HTML Template Literals:

   ```ts
   // Using the URL approach (more human-readable)
   figmaMapping({
     componentKey: "xxxxx",
     mapper(figma) {
       return html`
         <${YourComponent}
           :prop1=${figma.Property1}
           :prop2=${figma.Property2}
         >
           ${figma.$children}
         <//>
       `;
     },
   });
   ```

   The URL approach is often preferred for manual mapping because it's more human-readable, easier to obtain directly from Figma, and provides a direct link back to the visual component.

   ### Component Reference Options

   #### 1. HTML Template Literals with Component Tag (Recommended for Vue)
   ```ts
   figmaMapping({
     mapper(figma) {
       return html`
         <${VButton} variant="primary">
           ${figma.$children}
         <//>
       `;
     },
   });
   ```

   > **Note**: For Vue mappings, we recommend using the second approach (HTML Template Literals with Component Tag) as it provides the best balance between readability and Vue-like syntax. The `$cmp` approach is more commonly used in Angular mappings, while JSX is typically associated with React patterns.


### HTML Template Literals:
- More familiar to Vue developers used to Vue's template syntax
- Uses `:prop="value"` binding syntax (similar to Vue templates)
- Great for simple components and straightforward mappings
- Easier to visualize the final template structure
- Uses `<${Component}>` syntax for component references with `<//>` closing tag

```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return html`<button-component>${figma.$children}</button-component>`;
  },
});
```


## Understanding the Interfaces and APIs

The mapping function has access to a rich set of properties and methods through the `figma` parameter:

### Core Properties and Methods

#### `figma.$children`

Returns an array of all direct child nodes of the current Figma design.

```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return html`<${VButton}>${figma.$children}<//>`;
  },
});
```

#### `figma.$textContent`

Retrieves the text content from the current Figma design node or its text children.

```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return html`<${VButton}>${figma.$children[1].$textContent}<//>`;
  },
});
```

#### `figma.$findOneByName(name)`

Maps a specific child node of the current Figma component by its layer name.

```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Dialog Component",
  mapper(figma) {
    return html`<div>${figma.$findOneByName("dialog")}</div>`;
  },
});
```

#### `figma.$findOne(callback)`

Finds the first node that meets specified criteria through a callback function.

```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Page Component",
  mapper(figma) {
    return html`<div>
      ${figma.$findOne((node) => node.name === "Heading")}
    </div>`;
  },
});
```

#### `figma.$visit(callback)`

Traverses all child nodes and applies a function to each one.

```ts
figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Content Component",
  mapper(figma) {
    return figma.$visit((node) => {
      if (node.name === "Header") {
        return html`<h1>${node.$textContent}</h1>`;
      } else if (node.name === "Content") {
        return node.$textContent;
      }
    });
  },
});
```

## Advanced Mapping Examples

### Basic Button Mapping

Using HTML template literals:
```ts
import { figmaMapping, html } from "@builder.io/dev-tools/figma";
import { VButton } from "@acme/design-system";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return html`
      <${VButton}
        :color=${figma.Color?.toLowerCase()}
        :size=${figma.Size?.toLowerCase()}
        :type=${figma.Variant?.toLowerCase()}
      >
        ${figma.$children}
      <//>
    `;
  },
});
```

Using JSX:
```tsx
import { figmaMapping } from "@builder.io/dev-tools/figma";
import { VButton } from "@acme/design-system";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Button Component",
  mapper(figma) {
    return (
      <VButton
        color={figma.Color?.toLowerCase()}
        size={figma.Size?.toLowerCase()}
        type={figma.Variant?.toLowerCase()}
      >
        {figma.$children}
      </VButton>
    );
  },
});
```

### Hero Section with Multiple Content Areas

Using HTML template literals:
```ts
import { figmaMapping, html } from "@builder.io/dev-tools/figma";
import { VHero } from "@acme/design-system";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Hero Component",
  mapper(figma) {
    const heading = figma.Heading;
    const supportingText = figma.$findOneByName("Supporting Text").$textContent;
    const navigation = figma.$findOneByName("Navigation");

    return html`
      <${VHero}
        :heading=${heading}
        :supporting-text=${supportingText}
        :navigation=${navigation}
      ><//>
    `;
  },
});
```

Using JSX:
```tsx
import { figmaMapping } from "@builder.io/dev-tools/figma";
import { VHero } from "@acme/design-system";

figmaMapping({
  componentKey: "[COMPONENT_KEY]",
  componentName: "Hero Component",
  mapper(figma) {
    const heading = figma.Heading;
    const supportingText = figma.$findOneByName("Supporting Text").$textContent;
    const navigation = figma.$findOneByName("Navigation");

    return (
      <VHero
        heading={heading}
        supportingText={supportingText}
        navigation={navigation}
      />
    );
  },
});
```

### Using Your Own CSS Classes

```ts
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

    // Return a button with class binding
    return html`<button :class=${classes.join(" ")}>${figma.Text}</button>`;
  },
});
```

### Generic Mapping Function

For complex layouts or special case handling, you can create a generic mapper:

```ts
figmaMapping({
  genericMapper(figma) {
    if (figma.$name === "Grid row") {
      return html`<${VGrid}>${figma.$children}<//>`;
    } else if (figma.$name === "Section") {
      return html`<section>${figma.$children}</section>`;
    }
    return undefined;
  },
});
```

## Advanced Table Example

Here's a more complex example mapping a table component:

```ts
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

    return html`
      <${VTableView}
        aria-label="Table"
        :is-quiet=${figma.Style === "Quiet"}
        :selection-mode=${figma["Selection Column"] === "True"
          ? "multiple"
          : "none"}
        :columns=${columns}
        :rows=${rows}
      ><//>
    `;
  },
});
```
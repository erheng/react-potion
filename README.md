<div style="display: flex; justify-content: center;"">
  <img src="https://raw.githubusercontent.com/tugboatcoding/react-potion/master/logo.png" width="140px" />
</div>

# React Potion

A Notion-like design system. This repo is in not affiliated to Notion in any way.

## Why?

[Notion](http://notion.so/) is great for writing content but also has a nice design sytem for blocks-based design. This repo attempts to replicate some of the benefits that Notion offers.

## Get started

```bash
npm i -S react-notion
```

To use:

```jsx
import { Cover, Heading } from 'react-notion';

<Cover
  src="https://images.unsplash.com/photo-1589802787293-c7009d1fce33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
/>
<Heading size={900}>Heading 900</Heading>
```

## Examples

To view examples, open Storybook:

```
npm run storybook
```

![Storybook](https://raw.githubusercontent.com/tugboatcoding/react-design-system-adapters/master/screenshots/storybook.png)

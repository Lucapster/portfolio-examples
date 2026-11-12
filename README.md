# Simple portfolio examples

Three standalone portfolios built with plain HTML, CSS, and JavaScript. No frameworks, dependencies, build tools, or external assets. All people, contact addresses, and projects are fictional sample content.

| Folder | Style | Interaction |
| --- | --- | --- |
| [developer](developer/index.html) | Dark, minimal, sage accents | Light/dark mode and expandable project notes |
| [designer](designer/index.html) | Colorful, bold, playful | Project details in accessible native dialogs |
| [writer](writer/index.html) | Warm, editorial, serif typography | Category filters and expandable sample writing |

## Open an example

Open any folder's `index.html` directly in your browser. Each folder contains its own `index.html`, `style.css`, and `script.js` and can be copied or hosted independently.

Optionally serve all examples locally from this directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/developer/`, `http://localhost:8000/designer/`, or `http://localhost:8000/writer/`.

## Customize

- Edit `index.html` to replace the name, bio, project copy, and `mailto:` address.
- Edit the variables at the top of `style.css` to change the colors.
- Edit `script.js` for the interaction. Designer project descriptions are stored there.
- Replace the CSS project illustrations with your own screenshots if desired.

The layouts adapt to small screens, include visible keyboard focus, and respect reduced-motion preferences. Contact links open the visitor's email app; there is no backend or contact form.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

always use the next.js docs before applying any changes 
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Documentation & Guidelines for Core Tech Stacks

When developing or modifying this codebase, refer to the official documentation and best practices for the following libraries:

### GSAP (GreenSock Animation Platform)
* **Integration**: When using GSAP in React, prioritize using clean cleanups (e.g. `gsap.context()`) or the `useGSAP` hook from `@gsap/react` if available, to prevent memory leaks and duplicate triggers caused by React's StrictMode double-rendering.
* **ScrollTrigger**: Always kill or refresh ScrollTrigger instances on component unmount to maintain scroll position accuracy.

### Framer Motion
* **Layout Transitions**: Use `<motion.div>` for UI transition states (such as switching flavors, opening menus, and hover card expansions).
* **Exit Animations**: Ensure component parent trees use `<AnimatePresence>` when managing conditional components that fade out or slide away.

### Lenis (Smooth Scroll)
* **Scroll Management**: Lenis handles kinetic smooth scrolling. For elements that need page coordinates, verify that custom window scroll listeners hook into Lenis callbacks (`lenis.on('scroll', ...)`).

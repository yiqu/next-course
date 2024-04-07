## NextApp

### Notes

1) 'use client' defines the boundary between server and client code on the module dependency tree, not the render tree.
  -  A component is only a Client Component if it declared 'use client' or imported by another Client Component.
  -  If the component is not directly imported nor called the component by another Client Component, then it is still a Server Component, even though it could be rendered inside a Client Component.
  - The takeaway is that a parent-child render relationship between components does not guarantee the same render environment.

2) A component can be both a Server or Client component. It depends on where it is being imported from.

### With Docker
https://nextjs.org/docs/app/building-your-application/deploying#docker-image


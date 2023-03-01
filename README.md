# File System Route API

Extracted from https://github.com/gatsbyjs/gatsby/tree/master/examples as a POC.

## Thoughts

Locations are currently built using `createPages`, and is querying Contentful for every build. In discussion with Gatby's Chris L., the `createPages` approach is slow, and the File System Route API may be a better approach. Perhaps we could improve that by generating a yaml file via a cron job, and use the File System Route API to only build changed pages. The yaml file could contain minimal information, as well as perhaps a timestamp indicating the last change. If the timestamp changes, the page is rebuilt.

## Update 1:10 PM on Wednesday, March 1, 2023

According to Chris, the locations would have to be broken down into separate `yaml` files, otherwise whenever the overall file changes, all locations would be rebuilt.

---

This is a light POC which builds pages for periodic elements, based on a yaml file.

---

This example showcases the APIs and conventions for using the file system as the primary way of creating pages. You should be able to accomplish most common tasks with this file-based API. If you want more control over the page creation you should use the [`createPages`](https://www.gatsbyjs.com/docs/node-apis#createPages) API.

In short, these APIs enable you to programmatically create pages from Gatsby's [GraphQL data layer](https://www.gatsbyjs.com/docs/graphql-concepts/) and to create [client-only routes](https://www.gatsbyjs.com/docs/client-only-routes-and-user-authentication).

You can learn more in the [documentation](https://www.gatsbyjs.com/docs/file-system-route-api/).

/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as IndexImport } from './routes/index'
import { Route as UsersNewImport } from './routes/users.new'
import { Route as UsersUserIdImport } from './routes/users.$userId'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const UsersRoute = UsersImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersNewRoute = UsersNewImport.update({
  path: '/new',
  getParentRoute: () => UsersRoute,
} as any)

const UsersUserIdRoute = UsersUserIdImport.update({
  path: '/$userId',
  getParentRoute: () => UsersRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/users/$userId': {
      id: '/users/$userId'
      path: '/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof UsersImport
    }
    '/users/new': {
      id: '/users/new'
      path: '/new'
      fullPath: '/users/new'
      preLoaderRoute: typeof UsersNewImport
      parentRoute: typeof UsersImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  UsersRoute: UsersRoute.addChildren({ UsersUserIdRoute, UsersNewRoute }),
  AboutLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/users",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/users": {
      "filePath": "users.tsx",
      "children": [
        "/users/$userId",
        "/users/new"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/users/$userId": {
      "filePath": "users.$userId.tsx",
      "parent": "/users"
    },
    "/users/new": {
      "filePath": "users.new.tsx",
      "parent": "/users"
    }
  }
}
ROUTE_MANIFEST_END */

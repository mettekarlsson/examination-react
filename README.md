# Users App

A single-page application built with React and TypeScript that fetches user data from an external REST API and presents it in a list, a detail view and a statistics page.

Made as an individual project assignment in the React course (Teknikhögskolan i Lund).

## Features

- **Users list** with responsive cards (1, 2 or 3 columns depending on screen width)
- **User detail page** (`/users/:id`) showing profile, address, settings and roles
- **Statistics page** (`/stats`) with counts calculated from the user data (total users, admins, notification settings, themes)
- **Loading, error and empty states** handled on every page that fetches data
- **Friendly error messages** that depend on the HTTP status (e.g. rate limit reached, access denied, server error, no connection)
- **Error boundary** that catches rendering crashes and lets the user recover

## Tech stack

| Purpose | Technology |
| --- | --- |
| UI | React 19 |
| Language | TypeScript (strict typing of all props and API data) |
| Build tool | Vite |
| Data fetching and caching | TanStack Query (`useQuery`) |
| Routing | React Router (`react-router-dom`) |
| Error handling | `react-error-boundary` |
| Styling | Tailwind CSS v4 |
| Loading indicator | `react-spinners` |

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build (this also type-checks the whole project):

```bash
npm run build
```

> **Note:** The API allows a maximum of 100 requests per day. Every full page reload (F5) clears the in-memory cache and results in a new request, so avoid reloading unnecessarily during development.

## Routes

| Path | Page | Description |
| --- | --- | --- |
| `/` | `HomePage` | Start page |
| `/users` | `UserPage` | List of all users |
| `/users/:id` | `UserDetailPage` | Details for one user |
| `/stats` | `StatsPage` | Statistics based on the user data |

## Project structure

```text
src/
├── api/
│   └── fetchUsers.ts        # The fetch function, including status-based error messages
├── components/
│   ├── ErrorFallback.tsx    # UI shown by the ErrorBoundary
│   ├── Nav.tsx              # Navigation bar
│   ├── StatCard.tsx         # One statistic (title + number)
│   ├── UserCard.tsx         # One user in the list
│   ├── UserDetailCard.tsx   # Full details for one user
│   └── UserList.tsx         # Grid of UserCards
├── hooks/
│   └── useUsers.ts          # Custom hook wrapping useQuery
├── pages/
│   ├── HomePage.tsx
│   ├── StatsPage.tsx
│   ├── UserDetailPage.tsx
│   └── UserPage.tsx
├── types/
│   └── User.ts              # Interfaces describing the API data
├── App.tsx                  # Layout, routes and ErrorBoundary
└── main.tsx                 # Providers (QueryClient, Router) and entry point
```

The code follows a separation of concerns: pages fetch data and handle states, components only display what they receive through props, the hook holds the query settings, and the API layer handles the network request.

## How the app talks to the API

Data is fetched with a `GET` request to the users endpoint. The request includes the required `x-api-key` header (set in `src/api/fetchUsers.ts`). The JSON response is an array of users, typed as `User[]`.

`fetch` does not throw on HTTP errors such as 404 or 500, so `fetchUsers` checks `res.ok` itself and throws an `Error` with a user-friendly message depending on the status code. Network failures (e.g. no connection) are caught separately.

## Handling the 100 requests per day limit

- **Caching:** all pages use the same `useUsers` hook and the same `queryKey`, so the list, the detail page and the statistics page share one cache entry. Navigating between them does not trigger new requests.
- **`staleTime`:** the data is considered fresh for 5 minutes, so TanStack Query does not refetch it in the background during that time.
- **`retry: 1`:** only one retry after a failed request (the default is 3), since every retry counts towards the limit.

## Error handling

There are two separate layers, because they catch different kinds of errors:

1. **API errors** are returned by `useQuery` as a value (`error`) and displayed by each page with a friendly message.
2. **Rendering errors** (a component crashing while rendering) are caught by an `ErrorBoundary` in `App.tsx`. The navigation bar is placed outside the boundary, and the boundary resets automatically when the URL changes (`resetKeys`).

## Possible improvements

- Move the API key to an environment variable (`.env`)
- Add a search field or filter to the users list
- Add a catch-all route for unknown URLs
- Extract the repeated loading/error/empty messages into a shared component

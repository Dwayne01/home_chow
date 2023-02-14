# home_chow

Homechow is a technology-driven startup that connects busy customers with small vendors who sell homemade food, drinks, and snacks. Our platform allows customers to easily order and track their deliveries while providing small vendors with a new revenue stream. We also have a strong focus on community, promoting small and local businesses.

## Requirements

- [Node](https://nodejs.org/en/)
- [NextJs](https://nextjs.org/)

* Make sure to use node version 16 or later.

## Libraries
- [Storybook](https://storybook.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cypress](https://docs.cypress.io/)
- [Firebase](https://firebase.google.com/docs/auth)
- [GraphQL](https://graphql.org/)

## install packages
`yarn`
# Start Project
`yarn dev`

# Graphql Usage
- Front-side
* In index File (Fetching)
`import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';`
`const client = new ApolloClient({`
`uri: 'https://example.com/',`  `uri: 'server//localhost or hosted localhost address `
`cache: new InMemoryCache(),`
`});`

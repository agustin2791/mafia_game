/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      host {
        id
        name
        isStoryTeller
        isPed
        isMafia
        isCop
        createdAt
        updatedAt
      }
      party_code
      party_limit
      guests {
        id
        name
        isStoryTeller
        isPed
        isMafia
        isCop
        createdAt
        updatedAt
      }
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        host {
          id
          name
          isStoryTeller
          isPed
          isMafia
          isCop
          createdAt
          updatedAt
        }
        party_code
        party_limit
        guests {
          id
          name
          isStoryTeller
          isPed
          isMafia
          isCop
          createdAt
          updatedAt
        }
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      isStoryTeller
      isPed
      isMafia
      isCop
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isStoryTeller
        isPed
        isMafia
        isCop
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

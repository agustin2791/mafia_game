/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      party_code
      party_limit
      guests {
        items {
          id
          game_id
          name
          isStoryTeller
          isPed
          isMafia
          isCop
          isAlive
          isHost
          createdAt
          updatedAt
        }
        nextToken
      }
      isActive
      roundActive
      discussionActive
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
        party_code
        party_limit
        guests {
          nextToken
        }
        isActive
        roundActive
        discussionActive
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
      game_id
      name
      isStoryTeller
      isPed
      isMafia
      isCop
      isAlive
      isHost
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
        game_id
        name
        isStoryTeller
        isPed
        isMafia
        isCop
        isAlive
        isHost
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

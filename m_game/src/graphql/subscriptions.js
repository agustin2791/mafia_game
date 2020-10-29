/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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

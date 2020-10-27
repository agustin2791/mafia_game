/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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

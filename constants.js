const prod = {
  url: {
    API_USER_INFOS(userId) {
      return `http://localhost:3000/user/${userId}`
    },
    API_USER_ACTIVITY(userId) {
      return `http://localhost:3000/user/${userId}/activity`
    },
    API_USER_SESSIONS(userId) {
      return `http://localhost:3000/user/${userId}/average-sessions`
    },
    API_USER_PERFORMANCE(userId) {
      return `http://localhost:3000/user/${userId}/performance`
    }
  }
}

// TODO : utiliser une fonction qui renvoie une string

const dev = {
  url: {
    API_USER_INFOS(userId) {
      return `../src/data/${userId}/userInfos.json`
    },
    API_USER_ACTIVITY(userId) {
      return `../src/data/${userId}/userActivity.json`
    },
    API_USER_SESSIONS(userId) {
      return `../src/data/${userId}/userAverageSession.json`
    },
    API_USER_PERFORMANCE(userId) {
      return `../src/data/${userId}/userPerformance.json`
    }
  }
}

export const config = import.meta.env.DEV ? dev : prod

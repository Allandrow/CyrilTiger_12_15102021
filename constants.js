// TODO :
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

let config
try {
  config = import.meta.env.DEV ? dev : prod
} catch {
  config = dev
}

export { config }

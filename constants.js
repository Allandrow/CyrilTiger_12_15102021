const prod = {
  // TODO : FIND A WAY TO IMPORT USERID HERE
  // url: {
  //   API_URL_USER_INFOS: 'http://localhost:3000/user/${userId}',
  //   API_URL_USER_ACTIVITY: 'http://localhost:3000/user/${userId}/activity',
  //   API_URL_USER_SESSIONS: 'http://localhost:3000/user/${userId}/average-sessions',
  //   API_URL_USER_PERFORMANCE: 'http://localhost:3000/user/${userId}/performance'
  // }
}

const dev = {
  url: {
    API_URL_INFOS: '../src/data/userInfos.json',
    API_URL_ACTIVITY: '../src/data/userActivity.json',
    API_URL_SESSIONS: '../src/data/userAverageSession.json',
    API_URL_PERFORMANCE: '../src/data/userPerformance.json'
  }
}

export const config = import.meta.env.DEV ? dev : prod

const PATH_USER_PAGES_AUTHORIZE = 'pages/authorize/main';

function openSetting () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success (res) {
        if (JSON.stringify(res.authSetting) === '{}') {
          reject(new Error('empty author'));
        } else {
          resolve(res.authSetting);
        }
      },
      fail: reject
    })
  })
}

function getUserWeChatInfo () {
  return new Promise((resolve, reject) => {
    return openSetting().then(() => {
    }, getAuthorization)
  })
}

function getAuthorization () {
  const currentPage = (getCurrentPages().slice(0).pop() || {}).route || '';
  const isAuthorizePage = currentPage.includes(PATH_USER_PAGES_AUTHORIZE);
  if (!isAuthorizePage) {
    console.log(PATH_USER_PAGES_AUTHORIZE);
    wx.navigateTo({
      url: `/${PATH_USER_PAGES_AUTHORIZE}`,
    });
  }
}

export default {
  openSetting,
  getAuthorization,
  getUserWeChatInfo,
}

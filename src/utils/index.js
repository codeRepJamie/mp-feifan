function cloudRequest (path = '') {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'router',
      data: {
        $url: path
      }
    }).then(({result}) => {
      if (result.code === 0) {
        resolve(result.data);
      } else {
        reject(new Error(result.errMsg))
      }
    }).catch(reject);
  })
}

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime,
  cloudRequest
}

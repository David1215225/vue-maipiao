// cookie的增删查
export function getCookie (name) {
  var cookieArr = document.cookie.split('; ')
  for (var i = 0; i < cookieArr.length; i++) {
    var arr = cookieArr[i].split('=')
    if (arr[0] === name) {
      return cookieArr[i]
    }
  }
  return false
}

export function setCookie (key, value, day) {
  var date = new Date()
  date.setDate(date.getDate() + day)
  document.cookie = key + '=' + value + ';expires=' + date
}

export function removeCookie (key) {
  setCookie(key, '', -1)
}

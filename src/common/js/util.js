function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 打乱顺序
export function shuffle(arr) {
    let _arr = arr.slice()
    for (let i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}

// 函数节流
export function debounce(func, delay) {
    let timer

    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
// ajax请求
window.postJSON = function(url, data) {
    return require('superagent')
        .post("http://localhost:3000" + url)
        .send(data)
}

window.fetchGet = function(url, data, api) {
    return require('superagent')
        .get("http://localhost:3000" + url)
        .query(data)
}

// cookie的设置
window.getCookie = function(cookieName) {
    var strCookie = document.cookie;

    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return eval("(" + arr[1] + ")");
        }
    }
    return "";
}

window.setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
window.clearCookie = function clearCookie(name) {
    setCookie(name, "", -1);
}
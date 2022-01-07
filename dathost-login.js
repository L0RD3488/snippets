fetch("https://dathost.net/security/login", {
  "headers": {
    "accept": "application/json, text/*",
    "accept-language": "ru-RU,ru;q=0.9",
    "anonymous": "true",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundary3yWQlkLe7pWR9fc7",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://dathost.net/log-in",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundary3yWQlkLe7pWR9fc7\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\ncyber.glow.community@gmail.com\r\n------WebKitFormBoundary3yWQlkLe7pWR9fc7\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\nmf_gocgc34NOre99\r\n------WebKitFormBoundary3yWQlkLe7pWR9fc7\r\nContent-Disposition: form-data; name=\"remember\"\r\n\r\ntrue\r\n------WebKitFormBoundary3yWQlkLe7pWR9fc7\r\nContent-Disposition: form-data; name=\"csrf_token\"\r\n\r\nImEzMmUyZDJhNjM5ZjQ0NTEwZjVkZGRmYTg3YWM1YTBiNjMzZDZiMWUi.YdPNow.gmwfhvylezwL-iZCrH0wdABvkgE\r\n------WebKitFormBoundary3yWQlkLe7pWR9fc7--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

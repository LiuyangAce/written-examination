function urlQuery(url) {
  // const queryStr = url.split("?")[1]
  // const a = queryStr.split("&")

  // const obj = {}
  // a.forEach(element => {
  //   const arr = element.split('=')
  //   obj[arr[0]] = arr[1]
  // });

  // return obj;

  let urlStr = url.split('?')[1]
	const urlSearchParams = new URLSearchParams(urlStr)
  // console.log(urlSearchParams);
  // console.log(urlSearchParams.entries());
	const result = Object.fromEntries(urlSearchParams.entries())
	return result
}

const url = "http://www.jianshu.com/search?q=js&page=1&type=note";

const obj = urlQuery(url);
console.log(obj);
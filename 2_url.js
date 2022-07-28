function getUrlParameterValue(url, parameter) {
	const q = url.split("?");
	const s = q[1];
	const r = s.split("&");
	for (let i = 0; i < r.length; i++) {
		const x = r[i].split("=");
		if (x[0] === parameter) {
			return x[1];
		}
	}
}

var url =
	"https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));

function convert(num) {
	let r = 0,
		rev = 0;
	while (num != 0) {
		r *= 10;
		r += num % 10;
		num = Math.floor(num / 10);
	}
	return r;
}
console.log(convert(149));

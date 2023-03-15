console.log('funguju!');

let hadejCislo = 1
const kostka = document.querySelector('.dice')
const otocKostkou = () => {
	hadejCislo = hadejCislo + 1
	if (hadejCislo === 7) {
		hadejCislo = 1
	}
	kostka.src = `img/side${hadejCislo}.svg`
}
document.addEventListener('keydown', otocKostkou)
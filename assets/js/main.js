const lightTheme = {
	'--color-light': '#f7f7f7',
	'--color-dark': '#100303',
	'--color-primary': '#72e7ca',
	'--color-secondary': '#95389e',
	'--color-shadow': '#10030361',
}
const darkTheme = {
	'--color-light': '#323232',
	'--color-dark': '#f7f7f7',
	'--color-primary': '#ff1e56',
	'--color-secondary': '#ffac41',
	'--color-shadow': '#f7f7f738',
}

const $state = document.getElementById('state')
const $textState = document.getElementById('text-state')
const $imageState = document.getElementById('image-state')

let darkMode =
	window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

$textState.textContent = darkMode ? 'DAYMODE' : 'NIGHTMODE'

darkMode
	? $imageState.classList.add('active')
	: $imageState.classList.remove('active')

const rotateImage = () => {
	$imageState.classList.toggle('active')
}

const addTheme = (theme) => {
	const styles = document.documentElement.style
	const customStyles = Object.keys(theme)

	for (const style of customStyles) {
		styles.setProperty(style, theme[style])
	}
}

const toggleTheme = () => {
	darkMode = !darkMode

	darkMode ? addTheme(darkTheme) : addTheme(lightTheme)

	$textState.textContent = darkMode ? 'DAYMODE' : 'NIGHTMODE'

	rotateImage()
}

$state.addEventListener('click', () => {
	toggleTheme()
})

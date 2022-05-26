const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

function imageMode(color) {
    image1.src = `img/undraw_business_chat_${color}.svg`
    image2.src = `img/undraw_creative_team_${color}.svg`
    image3.src = `img/undraw_mobile_encryption_${color}.svg`
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'
    textBox.style.backgroundColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode'
    if(isDark) {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
        imageMode('dark')
    } else {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
        imageMode('light')
    } 

        

   
}

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(true)
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(false)
    }

}

// Event listener
toggleSwitch.addEventListener("click", switchTheme)

// Check local Storage
const currentTheme = localStorage.getItem('theme')
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true
        toggleDarkLightMode(true)

    }
}

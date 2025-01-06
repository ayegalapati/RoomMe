const loginScreen = document.getElementById('login-screen');
const signupScreen = document.getElementById('signup-screen');
const homeScreen = document.getElementById('home-screen');
const profileSetupScreen = document.getElementById('profile-setup-screen');

const navLogin = document.getElementById('nav-login');
const navSignup = document.getElementById('nav-signup');
const navHome = document.getElementById('nav-home');
const navProfile = document.getElementById('nav-profile');

function showScreen(screenToShow) {
    [loginScreen, signupScreen, homeScreen, profileSetupScreen].forEach(screen => {
        screen.classList.add('hidden');
    });
    screenToShow.classList.remove('hidden');
}

navLogin.addEventListener('click', () => showScreen(loginScreen));
navSignup.addEventListener('click', () => showScreen(signupScreen));
navHome.addEventListener('click', () => showScreen(homeScreen));
navProfile.addEventListener('click', () => showScreen(profileSetupScreen));

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showScreen(homeScreen);
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showScreen(homeScreen);
});

document.getElementById('profile-setup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showScreen(homeScreen);
});
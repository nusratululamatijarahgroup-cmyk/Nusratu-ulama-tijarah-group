function openMenu(){
document.getElementById('sidebar').classList.add('active');
}

function closeMenu(){
document.getElementById('sidebar').classList.remove('active');
}

const date = new Date();

const days = [
"রবিবার",
"সোমবার",
"মঙ্গলবার",
"বুধবার",
"বৃহস্পতিবার",
"শুক্রবার",
"শনিবার"
];

document.getElementById("currentDate").innerText =
date.toLocaleDateString("bn-BD");

document.getElementById("currentDay").innerText =
days[date.getDay()];

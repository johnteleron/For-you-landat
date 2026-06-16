const messageText = `Dear Babbii 💖,

Happy Monthsary babbii, ahh sad kay dli ta mag kita, kay na pa ikaw dira but it's okayy bawi nalang sunod, 6 months na dibaa grabe dalia ra no, naka remember noun ko sa atong first meet mwehhe don mac yarn, and i just want to say na very thankful ko na na abot ka, and sa ma umaabot na months and days i wish na good health the both, and kong unsa man ang mga nanga agi-an fight parin, no worries po naa rako here always dli ra ikaw isa nag fight, ILOVEYOUUU BABBI MWAAAAPPPSS 😘.

—Your Babi keithh❤️`;

const openBtn  = document.getElementById('openBtn');
const ignoreBtn = document.getElementById('ignoreBtn');
const letter = document.getElementById('letter');
const msgEl = document.getElementById('message');
const flap = document.getElementById('flap');

openBtn.addEventListener('click', () => {
  letter.classList.remove('hidden');
  msgEl.textContent = messageText;
  flap.classList.add('open');
  document.getElementById('buttons').style.display = 'none';
});

ignoreBtn.addEventListener('click', () => {
  ignoreBtn.classList.add('ignore-move');
  setTimeout(() => {
    ignoreBtn.classList.remove('ignore-move');
  }, 1000);
});

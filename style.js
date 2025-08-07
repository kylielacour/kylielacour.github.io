// List your honk sound files here
document.addEventListener('DOMContentLoaded', () => {
  const honkFiles = [
    'assets/honks/sfx_goose_honk_b_01.wav',
    'assets/honks/sfx_goose_honk_b_02.wav',
    'assets/honks/sfx_goose_honk_b_03.wav',
    'assets/honks/sfx_goose_honk_b_05.wav',
    'assets/honks/sfx_goose_honk_b_06.wav',
    'assets/honks/sfx_goose_honk_glass_02.wav',
    'assets/honks/sfx_goose_honk_glass_03.wav',
    'assets/honks/sfx_goose_honk_glass_04.wav',
    'assets/honks/sfx_goose_honk_glass_05.wav',
    'assets/honks/sfx_goose_honk_harmonica_01.wav',
    'assets/honks/sfx_goose_honk_harmonica_02.wav',
    'assets/honks/sfx_goose_honk_harmonica_03.wav',
    'assets/honks/sfx_goose_honk_harmonica_04.wav',
    'assets/honks/sfx_goose_honk_harmonica_05.wav',
    'assets/honks/sfx_goose_honk_harmonica_06.wav',
    'assets/honks/sfx_goose_honk_pylon_01.wav',
    'assets/honks/sfx_goose_honk_pylon_02.wav',
    'assets/honks/sfx_goose_honk_pylon_03.wav',
    'assets/honks/sfx_goose_honk_pylon_04.wav',
    'assets/honks/sfx_goose_honk_pylon_05.wav',
    'assets/honks/sfx_goose_honk_pylon_06.wav',
    'assets/honks/sfx_goose_honk_pylon_07.wav',
    'assets/honks/sfx_goose_honk_soap_01.wav',
    'assets/honks/sfx_goose_honk_soap_02.wav',
    'assets/honks/sfx_goose_honk_soap_03.wav',
    'assets/honks/sfx_goose_honk_soap_04.wav',
    'assets/honks/sfx_goose_honk_trashlid_01.wav',
    'assets/honks/sfx_goose_honk_trashlid_02.wav',
    'assets/honks/sfx_goose_honk_trashlid_03.wav',
    'assets/honks/sfx_goose_honk_trashlid_04.wav',
    'assets/honks/sfx_goose_honk_trashlid_05.wav',
    'assets/honks/sfx_goose_honk_walkie_talkie_03.wav',
    'assets/honks/sfx_goose_honk_walkie_talkie_04.wav',
    'assets/honks/sfx_goose_honk_walkie_talkie_06.wav'
  ];

  const gooseSvg = document.getElementById('goose-svg');
  if (gooseSvg) {
    gooseSvg.addEventListener('mouseenter', () => {
      if (!gooseSvg.classList.contains('goose-jump')) {
        // Play honk
        const randomHonk = honkFiles[Math.floor(Math.random() * honkFiles.length)];
        const audio = new Audio(randomHonk);
        audio.play();
        // Add jump animation
        gooseSvg.classList.add('goose-jump');
      }
    });
    gooseSvg.addEventListener('animationend', () => {
      gooseSvg.classList.remove('goose-jump');
    });
  }
});


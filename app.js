// Ses dosyalarının adlarını içeren bir dizi oluşturuluyor.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Her bir ses dosyası için bir düğme oluşturuluyor.
sounds.forEach((sound) => {
  // Düğme elementi oluşturuluyor.
  const btn = document.createElement('button');
  // Düğmeye 'btn' sınıfı ekleniyor.
  btn.classList.add('btn');
  // Düğmenin metni, ses dosyasının adı ile ayarlanıyor.
  btn.innerText = sound;

  // Düğmeye tıklama olayı ekleniyor.
  btn.addEventListener('click', () => {
    // Tüm ses dosyalarını durduran fonksiyon çağrılıyor.
    stopSongs();
    // Tıklanan düğmeye karşılık gelen ses dosyası çalınıyor.
    document.getElementById(sound).play();
  });

  // Düğme, 'buttons' id'li bir HTML öğesine ekleniyor.
  document.getElementById('buttons').appendChild(btn);
});

// Tüm ses dosyalarını durduran fonksiyon.
function stopSongs() {
  // Her ses dosyası için bir döngü oluşturuluyor.
  sounds.forEach((sound) => {
    // Ses dosyasının DOM öğesi alınıyor.
    const song = document.getElementById(sound);
    // Ses dosyası duraklatılıyor.
    song.pause();
  });
}
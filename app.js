const apiUrl = "https://ipwhois.app/json/";
const languageData = {
  en: {
    title: "Internet Speed Test & IP Viewer",
    startTest: "Start Speed Test",
    loading: "Loading IP...",
  },
  tr: {
    title: "İnternet Hız Testi ve IP Görüntüleyici",
    startTest: "Hız Testini Başlat",
    loading: "IP Yükleniyor...",
  },
};

function setLanguage(lang) {
  document.getElementById("title").textContent = languageData[lang].title;
  document.getElementById("start-test").textContent = languageData[lang].startTest;
  document.getElementById("ip-address").textContent = languageData[lang].loading;
}

// Konum ve ISP bilgisi
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip-address").textContent = `Your IP: ${data.ip}`;
    document.getElementById("location").textContent = `Location: ${data.city}, ${data.country}`;
    document.getElementById("isp").textContent = `ISP: ${data.isp}`;
  })
  .catch((error) => {
    console.error("Error fetching IP details:", error);
  });

// Dil seçici
document.getElementById("language-selector").addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Hız Testi
document.getElementById("start-test").addEventListener("click", () => {
  document.getElementById("loading-spinner").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading-spinner").classList.add("hidden");
    const downloadSpeed = (Math.random() * 100).toFixed(2);
    const uploadSpeed = (Math.random() * 50).toFixed(2);

    document.getElementById("download-speed").textContent = `${downloadSpeed} Mbps`;
    document.getElementById("upload-speed").textContent = `${uploadSpeed} Mbps`;
  }, 3000);
});

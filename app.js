// Mobile nav toggle
const navMenuBtn = document.getElementById("nav-menu");
const navLinks = document.getElementById("nav-links");

if (navMenuBtn && navLinks) {
  navMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Currency toggle (very simple PKR <-> USD display using fixed rate)
const currencyToggle = document.getElementById("currency-toggle");
let useUSD = false;
const FX_RATE = 300; // 1 USD ≈ 300 PKR (demo only)

function updatePrices() {
  const priceEls = document.querySelectorAll(".price");
  priceEls.forEach((el) => {
    const basePkr = Number(el.getAttribute("data-pkr") || "0");
    if (!basePkr) return;
    if (useUSD) {
      const usd = (basePkr / FX_RATE).toFixed(1);
      el.textContent = `USD ${usd}`;
    } else {
      el.textContent = `PKR ${basePkr.toLocaleString("en-PK")}`;
    }
  });
}

if (currencyToggle) {
  currencyToggle.addEventListener("click", () => {
    useUSD = !useUSD;
    currencyToggle.textContent = useUSD ? "USD / PKR" : "PKR / USD";
    updatePrices();
  });
  // initial
  updatePrices();
}

// Basic language toggle for a few labels (EN <-> Urdu)
const langToggle = document.getElementById("lang-toggle");
let useUrdu = false;

if (langToggle) {
  langToggle.addEventListener("click", () => {
    useUrdu = !useUrdu;
    langToggle.textContent = useUrdu ? "اردو / EN" : "EN / اردو";

    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const uspTitle = document.getElementById("usp-title");

    if (useUrdu) {
      if (heroTitle) heroTitle.textContent = "مقامی ٹیلنٹ پہلے";
      if (heroSubtitle)
        heroSubtitle.textContent =
          "پاکستان کے لیے بنایا گیا فری لانس پلیٹ فارم جو مقامی کاروبار اور ہنرمند افراد کو جوڑتا ہے، دوہری کرنسی اور اردو انٹرفیس کے ساتھ۔";
      if (uspTitle) uspTitle.textContent = "کیوں میکرلی؟";
    } else {
      if (heroTitle) heroTitle.textContent = "Local Talent First";
      if (heroSubtitle)
        heroSubtitle.textContent =
          "Pakistan-first freelance marketplace connecting businesses with verified local talent, dual currency support, Urdu interface, and a fair 5% commission.";
      if (uspTitle) uspTitle.textContent = "Why Makerly?";
    }
  });
}


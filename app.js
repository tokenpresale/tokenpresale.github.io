const CONFIG = {
  PRESALE_FACTORY_ADDRESS: "0x171f6cCF6a7740D37495d9032792bBEcE2f48D7C",
  CHAIN_ID: 56,
  CHAIN_NAME: "BNB Smart Chain",
  RPC_URL: "https://bsc-rpc.publicnode.com",
  EXPLORER_URL: "https://bscscan.com",
  PLATFORM_OWNER: "0x4349857549f7eC25f23db6aA8F362030C20c525F",
  LOGO_URL_BASE: "https://presale.cryptoreceh.com/uploads/",
  UPLOAD_ENDPOINT: "https://presale.cryptoreceh.com/api/upload-logo.php",
  UPLOAD_TIMEOUT_MS: 30000,
  MAX_TOAST_COUNT: 5,
  FEE_1_DAY: "100000000000000000",
  FEE_1_WEEK: "500000000000000000",
  FEE_1_MONTH: "5000000000000000000",
  LP_LOCK_OPTIONS: [
    {
      value: 0,
      label: "30 Hari",
      badge: "🔒 30D",
      badgeClass: "badge-lock-30d",
      trusted: false,
    },
    {
      value: 1,
      label: "6 Bulan",
      badge: "🔒 6 Bulan",
      badgeClass: "badge-lock-6m",
      trusted: true,
    },
    {
      value: 2,
      label: "1 Tahun",
      badge: "🔒 1 Tahun",
      badgeClass: "badge-lock-1y",
      trusted: true,
    },
    {
      value: 3,
      label: "Permanen 🔥",
      badge: "🔥 PERMANENT",
      badgeClass: "badge-lock-perm",
      trusted: true,
    },
  ],
  DEFAULT_SLIPPAGE_BPS: 500,
  MIN_DEV_PERCENT: 1,
  MIN_LIQUIDITY_PERCENT: 10,
  MAX_LIQUIDITY_PERCENT: 90,
  MIN_REFERRAL_PERCENT: 1,
  MAX_REFERRAL_PERCENT: 20,
  REQUEST_TIMEOUT_MS: 30000,
  MAX_REFERRAL_LOOP: 100,
};

const FACTORY_ABI = [
  {
    inputs: [],
    name: "presaleCount",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActivePresales",
    outputs: [{ type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "getPresale",
    outputs: [
      {
        components: [
          { name: "creator", type: "address" },
          { name: "tokenContract", type: "address" },
          { name: "tokenName", type: "string" },
          { name: "tokenSymbol", type: "string" },
          { name: "logoIPFSHash", type: "string" },
          { name: "description", type: "string" },
          { name: "totalTokensForSale", type: "uint256" },
          { name: "pricePerToken", type: "uint256" },
          { name: "listingPrice", type: "uint256" },
          { name: "liquidityAllocBps", type: "uint256" },
          { name: "devAllocBps", type: "uint256" },
          { name: "duration", type: "uint8" },
          { name: "startTime", type: "uint256" },
          { name: "endTime", type: "uint256" },
          { name: "referralEnabled", type: "bool" },
          { name: "referralBps", type: "uint256" },
          { name: "lpLockDuration", type: "uint8" },
          {
            components: [
              { name: "website", type: "string" },
              { name: "twitter", type: "string" },
              { name: "telegram", type: "string" },
              { name: "discord", type: "string" },
              { name: "github", type: "string" },
            ],
            name: "socials",
            type: "tuple",
          },
        ],
        name: "config",
        type: "tuple",
      },
      {
        components: [
          { name: "totalRaised", type: "uint256" },
          { name: "tokensSold", type: "uint256" },
          { name: "status", type: "uint8" },
          { name: "liquidityAdded", type: "bool" },
          { name: "feesWithdrawn", type: "bool" },
          { name: "lpTokenAddress", type: "address" },
          { name: "lpTokenAmount", type: "uint256" },
          { name: "lpUnlockAt", type: "uint256" },
          { name: "lpWithdrawn", type: "bool" },
        ],
        name: "state",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }, { type: "address" }],
    name: "getBuyerInfo",
    outputs: [
      { name: "contributed", type: "uint256" },
      { name: "tokensAllocated", type: "uint256" },
      { name: "claimed", type: "bool" },
      { name: "referredBy", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFeesAccumulated",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "address" }],
    name: "getCreatorPresales",
    outputs: [{ type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "address" }],
    name: "getBuyerPresales",
    outputs: [{ type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "isPresaleEnded",
    outputs: [{ type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "getLPLockInfo",
    outputs: [
      { name: "lpToken", type: "address" },
      { name: "lpAmount", type: "uint256" },
      { name: "unlockAt", type: "uint256" },
      { name: "isPermanent", type: "bool" },
      { name: "isUnlocked", type: "bool" },
      { name: "withdrawn", type: "bool" },
      { name: "lockLabel", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "getTokensNeededForLiquidity",
    outputs: [
      { name: "needed", type: "uint256" },
      { name: "available", type: "uint256" },
      { name: "sufficient", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }, { type: "address" }],
    name: "referralEarnings",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { type: "address" },
      { type: "string" },
      { type: "string" },
      { type: "string" },
      { type: "string" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint8" },
      { type: "bool" },
      { type: "uint256" },
      { type: "uint8" },
      {
        components: [
          { name: "website", type: "string" },
          { name: "twitter", type: "string" },
          { name: "telegram", type: "string" },
          { name: "discord", type: "string" },
          { name: "github", type: "string" },
        ],
        type: "tuple",
      },
    ],
    name: "createPresale",
    outputs: [{ type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }, { type: "address" }],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "finalizePresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    name: "addLiquidityToDex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }, { type: "uint256" }],
    name: "depositTokensForLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "withdrawLP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "withdrawUnsoldTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "withdrawDevFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "claimRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "address" }, { type: "uint256" }],
    name: "withdrawPlatformFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "address" }],
    name: "withdrawAllPlatformFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "uint256" }],
    name: "cancelPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const ERC20_ABI = [
  {
    inputs: [{ type: "address" }, { type: "uint256" }],
    name: "approve",
    outputs: [{ type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ type: "address" }],
    name: "balanceOf",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ type: "address" }, { type: "address" }],
    name: "allowance",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

let provider = null;
let signer = null;
let userAddress = null;
let factoryContract = null;
let presaleCache = [];
let currentFilter = "all";
let currentPresaleId = null;
let currentStep = 1;
let selectedDuration = -1;
let selectedLpLock = 0;
let referralEnabled = true;
let logoBase64 = null;
let logoMimeType = null;
let timers = {};
let isWalletConnecting = false;
let currentPage = 1;
const ITEMS_PER_PAGE = 10;
let allFilteredPresales = [];

const buttonTexts = new Map();
let accountsChangedHandler = null;
let chainChangedHandler = null;

function createRpcProvider() {
  let rpcProvider;

  try {
    rpcProvider = new ethers.JsonRpcProvider(CONFIG.RPC_URL, {
      chainId: CONFIG.CHAIN_ID,
      name: CONFIG.CHAIN_NAME,
    });
  } catch (e) {
    rpcProvider = new ethers.JsonRpcProvider(CONFIG.RPC_URL);
  }

  const ensMethods = [
    "resolveName",
    "lookupAddress",
    "getResolver",
    "_getResolver",
    "getAvatar",
    "getText",
    "getEnsAddress",
    "getEnsName",
    "getEnsResolver",
    "getEnsText",
    "getEnsAvatar",
  ];

  ensMethods.forEach((method) => {
    try {
      if (typeof rpcProvider[method] === "function") {
        rpcProvider[method] = async (...args) => {
          console.warn(`ENS method "${method}" disabled for BNB Smart Chain`);
          return null;
        };
      }
    } catch (e) {}
  });

  try {
    Object.defineProperty(rpcProvider, "network", {
      value: { chainId: CONFIG.CHAIN_ID, name: CONFIG.CHAIN_NAME },
      writable: false,
      configurable: false,
    });
  } catch (e) {
    console.warn("Could not set network property:", e);
  }

  return rpcProvider;
}

const rpcProvider = createRpcProvider();
let readOnlyContract = null;

function getReadOnlyContract() {
  if (
    !CONFIG.PRESALE_FACTORY_ADDRESS ||
    !ethers.isAddress(CONFIG.PRESALE_FACTORY_ADDRESS)
  ) {
    console.warn("Invalid contract address");
    return null;
  }

  if (!readOnlyContract) {
    try {
      readOnlyContract = new ethers.Contract(
        CONFIG.PRESALE_FACTORY_ADDRESS,
        FACTORY_ABI,
        rpcProvider,
      );
    } catch (e) {
      console.error("Failed to create contract:", e);
      return null;
    }
  }
  return readOnlyContract;
}

async function getPresaleReferralEarnings(presaleId) {
  if (!userAddress || !factoryContract) return 0;
  try {
    const earnings = await factoryContract.referralEarnings(
      presaleId,
      userAddress,
    );
    return Number(ethers.formatEther(earnings || 0n));
  } catch (e) {
    console.warn("Could not fetch presale referral earnings:", e);
    return 0;
  }
}

async function getTotalReferralEarnings() {
  if (!userAddress || !factoryContract) return 0;
  try {
    const count = await factoryContract.presaleCount();
    const maxLoop = Math.min(Number(count), CONFIG.MAX_REFERRAL_LOOP || 100);
    let totalEarnings = 0;
    for (let i = 0; i < maxLoop; i++) {
      try {
        const earnings = await factoryContract.referralEarnings(i, userAddress);
        if (earnings && earnings > 0) {
          totalEarnings += Number(ethers.formatEther(earnings));
        }
      } catch (e) {}
    }
    return totalEarnings;
  } catch (e) {
    console.warn("Could not fetch total referral earnings:", e);
    return 0;
  }
}

async function uploadLogoToServer(base64, mimeType) {
  if (!CONFIG.UPLOAD_ENDPOINT) return "";

  try {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });

    const formData = new FormData();
    formData.append("logo", blob, `logo_${Date.now()}.png`);

    const response = await fetch(CONFIG.UPLOAD_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.filename) {
      return data.filename;
    }
    return "";
  } catch (e) {
    console.error("Logo upload error:", e);
    return "";
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) loadingScreen.classList.add("hidden");
  }, 2000);

  const contractFooter = document.getElementById("contractAddressFooter");
  if (contractFooter) {
    contractFooter.textContent = `Contract: ${CONFIG.PRESALE_FACTORY_ADDRESS}`;
  }

  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      await initWallet(accounts[0]);
    }
  }

  await loadPresales();

  window.addEventListener("scroll", () => {
    const header = document.getElementById("mainHeader");
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  });

  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get("ref");
  const presaleParam = urlParams.get("presale");

  if (refParam && ethers.isAddress(refParam)) {
    localStorage.setItem("rl_referrer", refParam);
    showToast("🎁 Link referral terdeteksi!", "success");
  }

  if (presaleParam !== null) {
    const pid = parseInt(presaleParam);
    if (!isNaN(pid) && pid >= 0) {
      setTimeout(async () => {
        await openPresaleDetail(pid);
      }, 500);
    }
  }
});

async function connectWallet() {
  if (isWalletConnecting) return;

  if (!window.ethereum) {
    showToast("MetaMask atau wallet Web3 tidak ditemukan!", "error");
    return;
  }

  const btn = document.getElementById("connectWalletBtn");
  if (!btn) return;

  const originalText =
    btn.querySelector("#connectBtnText")?.textContent || "Connect Wallet";
  setLoading("connectWalletBtn", true, "Loading...");
  isWalletConnecting = true;

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    await initWallet(accounts[0]);
    showToast("✅ Wallet terhubung!", "success");
  } catch (e) {
    if (e.code !== 4001) {
      showToast(
        "Koneksi wallet gagal: " + (e.message || "Unknown error"),
        "error",
      );
    } else {
      showToast("Koneksi wallet dibatalkan", "warn");
    }
  } finally {
    setLoading("connectWalletBtn", false, originalText);
    isWalletConnecting = false;
  }
}

async function initWallet(address) {
  userAddress = address;

  if (!window.ethereum) {
    showToast("Wallet tidak ditemukan!", "error");
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();

  factoryContract = new ethers.Contract(
    CONFIG.PRESALE_FACTORY_ADDRESS,
    FACTORY_ABI,
    signer,
  );

  const short = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const connectBtnText = document.getElementById("connectBtnText");
  if (connectBtnText) connectBtnText.textContent = short;

  const adminLink = document.getElementById("adminNavLink");
  if (
    adminLink &&
    address.toLowerCase() === CONFIG.PLATFORM_OWNER.toLowerCase()
  ) {
    adminLink.style.display = "";
    loadAdminData();
  }

  if (accountsChangedHandler && window.ethereum.removeListener) {
    window.ethereum.removeListener("accountsChanged", accountsChangedHandler);
  }
  if (chainChangedHandler && window.ethereum.removeListener) {
    window.ethereum.removeListener("chainChanged", chainChangedHandler);
  }

  accountsChangedHandler = (accs) => {
    if (accs.length === 0) {
      disconnectWallet();
    } else {
      userAddress = accs[0];
      initWallet(accs[0]);
    }
  };

  chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountsChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  await ensureCorrectChain();
  await loadPresales();
}

function disconnectWallet() {
  userAddress = null;
  signer = null;
  factoryContract = null;

  const connectBtnText = document.getElementById("connectBtnText");
  if (connectBtnText) connectBtnText.textContent = "Connect Wallet";

  const adminLink = document.getElementById("adminNavLink");
  if (adminLink) adminLink.style.display = "none";
}

async function ensureCorrectChain() {
  if (!window.ethereum) return;

  try {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const currentChainId = parseInt(chainId, 16);

    if (currentChainId !== CONFIG.CHAIN_ID) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x" + CONFIG.CHAIN_ID.toString(16) }],
        });
      } catch (err) {
        if (err.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x" + CONFIG.CHAIN_ID.toString(16),
                chainName: CONFIG.CHAIN_NAME,
                rpcUrls: [CONFIG.RPC_URL],
                blockExplorerUrls: [CONFIG.EXPLORER_URL],
                nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
              },
            ],
          });
        } else {
          showToast(
            `Silakan ganti ke jaringan ${CONFIG.CHAIN_NAME} secara manual`,
            "warn",
          );
        }
      }
    }
  } catch (e) {
    console.error("Error ensuring correct chain:", e);
  }
}

function navigateTo(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));

  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) targetPage.classList.add("active");

  const navMap = { home: 0, launch: 1, portfolio: 2, admin: 3, detail: 4 };
  const navLinks = document.querySelectorAll(".nav-link");
  const idx = navMap[page];
  if (idx !== undefined && navLinks[idx]) {
    navLinks[idx].classList.add("active");
  }

  const hero = document.getElementById("heroSection");
  if (hero) hero.style.display = page === "home" ? "" : "none";

  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMobileNav();

  if (page === "portfolio" && userAddress) loadPortfolio();
  if (
    page === "admin" &&
    userAddress?.toLowerCase() === CONFIG.PLATFORM_OWNER.toLowerCase()
  )
    loadAdminData();
  if (page === "launch") resetLaunchForm();
}

function resetLaunchForm() {
  currentStep = 1;
  selectedDuration = -1;
  selectedLpLock = 0;
  referralEnabled = true;
  logoBase64 = null;
  logoMimeType = null;

  const inputsToClear = [
    "tokenAddress",
    "tokenName",
    "tokenSymbol",
    "tokenDecimals",
    "tokenDescription",
    "totalTokens",
    "pricePerToken",
    "listingPrice",
    "socialWebsite",
    "socialTwitter",
    "socialTelegram",
    "socialDiscord",
    "socialGithub",
  ];

  inputsToClear.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const nameSymRow = document.getElementById("tokenNameSymbolRow");
  const decRow = document.getElementById("tokenDecimalsRow");
  const infoResult = document.getElementById("tokenInfoResult");
  if (nameSymRow) nameSymRow.style.display = "none";
  if (decRow) decRow.style.display = "none";
  if (infoResult) infoResult.innerHTML = "";

  const selDurEl = document.getElementById("selectedDuration");
  if (selDurEl) selDurEl.value = "-1";

  const selLpEl = document.getElementById("selectedLpLock");
  if (selLpEl) selLpEl.value = "0";

  const durationFeeDisplay = document.getElementById("durationFeeDisplay");
  if (durationFeeDisplay) durationFeeDisplay.style.display = "none";

  const durationSel = document.getElementById("durationSelect");
  if (durationSel) durationSel.value = "-1";

  const lpLockSelect = document.getElementById("lpLockSelect");
  if (lpLockSelect) lpLockSelect.value = "0";

  selectLpLockFromSelect(0);

  const toggle = document.getElementById("referralToggle");
  if (toggle && !toggle.classList.contains("on")) {
    toggle.classList.add("on");
  }

  const refSettings = document.getElementById("referralSettings");
  if (refSettings) {
    refSettings.style.display = "";
  }

  const logoPrev = document.getElementById("logoPreview");
  if (logoPrev) {
    logoPrev.innerHTML =
      '<div class="logo-placeholder">📷<br><small>Klik untuk upload logo<br>(PNG/JPG/SVG, max 2MB)</small></div>';
  }

  const logoFileInput = document.getElementById("logoFileInput");
  if (logoFileInput) logoFileInput.value = "";

  const liqInput = document.getElementById("liquidityAlloc");
  if (liqInput) {
    liqInput.value = "70";
    updateAllocBreakdown();
  }

  const refInput = document.getElementById("referralPct");
  if (refInput) {
    refInput.value = "1";
    updateReferralVal();
  }

  const estBox = document.getElementById("estimateBox");
  if (estBox) estBox.innerHTML = "Isi form di atas untuk melihat estimasi";

  ["1", "2", "3"].forEach((i) => setApStatus(i, "⏳"));

  document
    .querySelectorAll(".step-panel")
    .forEach((p, i) => p.classList.toggle("active", i === 0));
  document.querySelectorAll(".step-item").forEach((item, i) => {
    item.classList.remove("active", "done");
    if (i === 0) item.classList.add("active");
  });
}

function toggleMobileNav() {
  const nav = document.getElementById("mainNav");
  if (nav) nav.classList.toggle("open");
}

function closeMobileNav() {
  const nav = document.getElementById("mainNav");
  if (nav) nav.classList.remove("open");
}

async function loadPresales() {
  try {
    const contract = getReadOnlyContract();
    if (!contract) {
      renderPresaleGrid([]);
      return;
    }

    const activeIds = await Promise.race([
      contract.getActivePresales(),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Timeout")),
          CONFIG.REQUEST_TIMEOUT_MS,
        ),
      ),
    ]).catch((e) => {
      console.warn("Could not fetch active presales:", e.message);
      return [];
    });

    const count = await Promise.race([
      contract.presaleCount(),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Timeout")),
          CONFIG.REQUEST_TIMEOUT_MS,
        ),
      ),
    ]).catch((e) => {
      console.warn("Could not fetch presale count:", e.message);
      return 0n;
    });

    const allIds = [];
    const total = Math.min(Number(count), 50);
    for (let i = Number(count) - 1; i >= Number(count) - total && i >= 0; i--) {
      allIds.push(i);
    }

    if (allIds.length === 0) {
      presaleCache = [];
      updateStats(presaleCache, 0);
      renderPresaleGrid(presaleCache);
      return;
    }

    const results = await Promise.allSettled(
      allIds.map((id) => contract.getPresale(id)),
    );

    presaleCache = results
      .map((r, idx) => {
        if (r.status === "fulfilled" && r.value && r.value[0] && r.value[1]) {
          return { id: allIds[idx], config: r.value[0], state: r.value[1] };
        }
        return null;
      })
      .filter((item) => item !== null);

    updateStats(presaleCache, activeIds.length);
    renderPresaleGrid(presaleCache);
  } catch (e) {
    console.warn("Could not load presales:", e.message);
    renderPresaleGrid([]);
  }
}

function updateStats(presales, activeCount) {
  const statPresales = document.getElementById("statPresales");
  const statActive = document.getElementById("statActive");
  const statRaised = document.getElementById("statRaised");

  if (statPresales) statPresales.textContent = presales.length;
  if (statActive) statActive.textContent = activeCount;

  const totalRaised = presales.reduce(
    (acc, p) => acc + Number(ethers.formatEther(p.state.totalRaised || 0n)),
    0,
  );
  if (statRaised) statRaised.textContent = formatBNB(totalRaised) + " BNB";
}

function renderPresaleGrid(presales) {
  const grid = document.getElementById("presaleGrid");
  const empty = document.getElementById("emptyPresale");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;

  let filtered = presales;
  const now = Math.floor(Date.now() / 1000);

  if (currentFilter === "active") {
    filtered = presales.filter(
      (p) =>
        p && p.state && p.state.status === 0n && BigInt(now) < p.config.endTime,
    );
  }
  if (currentFilter === "ended") {
    filtered = presales.filter(
      (p) =>
        p &&
        p.state &&
        (p.state.status !== 0n || BigInt(now) >= p.config.endTime),
    );
  }

  allFilteredPresales = filtered;

  currentPage = 1;

  grid.querySelectorAll(".presale-card").forEach((c) => c.remove());

  if (filtered.length === 0) {
    if (empty) empty.style.display = "";
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }
  if (empty) empty.style.display = "none";

  const start = 0;
  const end = currentPage * ITEMS_PER_PAGE;
  const presalesToShow = filtered.slice(start, end);

  presalesToShow.forEach((p) => {
    const card = createPresaleCard(p);
    grid.insertBefore(card, empty);
  });

  presalesToShow.forEach((p) => startTimer(p.id, Number(p.config.endTime)));

  if (loadMoreBtn) {
    if (filtered.length > currentPage * ITEMS_PER_PAGE) {
      loadMoreBtn.style.display = "flex";
      const remaining = filtered.length - currentPage * ITEMS_PER_PAGE;
      const span = loadMoreBtn.querySelector("span");
      if (span) span.textContent = `Load More (${remaining} remaining)`;
    } else {
      loadMoreBtn.style.display = "none";
    }
  }
}

function createPresaleCard(p) {
  if (!p || !p.config || !p.state) {
    console.warn("Invalid presale data:", p);
    return document.createElement("div");
  }
  const cfg = p.config;
  const st = p.state;
  const now = Math.floor(Date.now() / 1000);
  const ended = Number(cfg.endTime) <= now || Number(st.status) !== 0;
  const pct =
    cfg.totalTokensForSale > 0n
      ? Math.min(100, Number((st.tokensSold * 100n) / cfg.totalTokensForSale))
      : 0;

  const card = document.createElement("div");
  card.className = "presale-card";
  card.onclick = () => openPresaleDetail(p.id);
  card.id = `card-${p.id}`;

  const logoSrc = cfg.logoIPFSHash
    ? CONFIG.LOGO_URL_BASE + cfg.logoIPFSHash
    : "";
  const logoEl = logoSrc
    ? `<img src="${logoSrc}" class="card-logo" onerror="this.textContent='🪙'" alt="${cfg.tokenName}">`
    : `<div class="card-logo">🪙</div>`;

  const raised = formatBNB(Number(ethers.formatEther(st.totalRaised)));
  const price = formatBNB(Number(ethers.formatEther(cfg.pricePerToken)));

  const lockDur = Number(cfg.lpLockDuration ?? 0);
  const lockOpt = CONFIG.LP_LOCK_OPTIONS[lockDur] || CONFIG.LP_LOCK_OPTIONS[0];
  const lpBadge = `<span class="badge ${lockOpt.badgeClass} badge-card-lp">${lockOpt.badge}</span>`;
  const trustedB = lockOpt.trusted
    ? `<span class="badge badge-trusted badge-card-lp">⭐ Trusted</span>`
    : "";

  card.innerHTML = `
    <div class="card-banner">
      <div class="card-logo-wrap">${logoEl}</div>
      <div class="card-status ${ended ? "status-ended" : "status-active"}">${ended ? "🔴 Selesai" : "🟢 Aktif"}</div>
    </div>
    <div class="card-body">
      <div class="card-name">${escHtml(cfg.tokenName)}</div>
      <div class="card-symbol">${escHtml(cfg.tokenSymbol)}</div>
      <div class="card-badges-row">${lpBadge}${trustedB}</div>
      <div class="card-desc">${escHtml(cfg.description)}</div>
      <div class="card-price-row">
        <div class="card-price">${price} <span>BNB</span></div>
        <div class="card-price">${raised} <span>raised</span></div>
      </div>
      <div class="card-progress">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-labels"><span>${pct}% terjual</span><span>${formatNum(Number(st.tokensSold) / 1e18)} / ${formatNum(Number(cfg.totalTokensForSale) / 1e18)}</span></div>
      </div>
      ${!ended ? `<div class="card-timer"><span class="timer-icon">⏱</span> Berakhir: <span class="timer-val" id="timer-${p.id}">...</span></div>` : '<div class="card-timer">✅ Presale telah selesai</div>'}
    </div>
  `;
  return card;
}

function filterPresales(filter, btn) {
  currentFilter = filter;
  currentPage = 1;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderPresaleGrid(presaleCache);
}

function startTimer(id, endTime) {
  if (timers[id]) clearInterval(timers[id]);

  const el = document.getElementById(`timer-${id}`);
  if (!el) return;

  const update = () => {
    const diff = endTime - Math.floor(Date.now() / 1000);
    if (diff <= 0) {
      el.textContent = "Selesai";
      clearInterval(timers[id]);
      return;
    }
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    el.textContent = d > 0 ? `${d}h ${h}j ${m}m ${s}d` : `${h}j ${m}m ${s}d`;
  };
  update();
  timers[id] = setInterval(update, 1000);
}

async function openPresaleDetail(id) {
  currentPresaleId = id;
  navigateTo("detail");

  const container = document.getElementById("presaleDetailContent");
  if (!container) return;
  container.innerHTML =
    '<div style="text-align:center;padding:3rem;color:var(--text3)">Memuat data...</div>';

  try {
    let data = presaleCache.find((p) => p.id === id);
    if (!data && factoryContract) {
      const rawData = await factoryContract.getPresale(id);
      data = { id: id, config: rawData[0], state: rawData[1] };
    }
    if (!data) throw new Error("Presale not found");

    const cfg = data.config;
    const st = data.state;
    const now = Math.floor(Date.now() / 1000);
    const ended = Number(cfg.endTime) <= now || Number(st.status) !== 0;
    const pct =
      cfg.totalTokensForSale > 0n
        ? Math.min(100, Number((st.tokensSold * 100n) / cfg.totalTokensForSale))
        : 0;

    const logo = cfg.logoIPFSHash
      ? CONFIG.LOGO_URL_BASE + cfg.logoIPFSHash
      : "";
    const logoEl = logo
      ? `<img src="${logo}" class="detail-logo" onerror="this.textContent='🪙'" alt="${cfg.tokenName}">`
      : `<div class="detail-logo">🪙</div>`;
    const price = formatBNB(Number(ethers.formatEther(cfg.pricePerToken)));
    const listing = formatBNB(Number(ethers.formatEther(cfg.listingPrice)));
    const raised = formatBNB(Number(ethers.formatEther(st.totalRaised)));
    const liqBps = Number(cfg.liquidityAllocBps) / 100;
    const devBps = Number(cfg.devAllocBps) / 100;
    const refBps = cfg.referralEnabled ? Number(cfg.referralBps) / 100 : 0;

    const socials = cfg.socials;
    const socialLinks = [
      socials.website
        ? `<a href="${escHtml(socials.website)}" target="_blank" class="social-btn">🌐 Website</a>`
        : "",
      socials.twitter
        ? `<a href="${escHtml(socials.twitter)}" target="_blank" class="social-btn">𝕏 Twitter</a>`
        : "",
      socials.telegram
        ? `<a href="${escHtml(socials.telegram)}" target="_blank" class="social-btn">✈️ Telegram</a>`
        : "",
      socials.discord
        ? `<a href="${escHtml(socials.discord)}" target="_blank" class="social-btn">💬 Discord</a>`
        : "",
      socials.github
        ? `<a href="${escHtml(socials.github)}" target="_blank" class="social-btn">📦 GitHub</a>`
        : "",
    ].join("");

    const durLabel =
      ["1 Hari", "1 Minggu", "1 Bulan"][Number(cfg.duration)] || "—";
    const endDate = new Date(Number(cfg.endTime) * 1000).toLocaleString(
      "id-ID",
    );
    const refPct = cfg.referralEnabled ? `${refBps}%` : "Tidak aktif";
    const myRef = userAddress
      ? `${window.location.origin}${window.location.pathname}?presale=${id}&ref=${userAddress}`
      : null;
    const rawRef = localStorage.getItem("rl_referrer") || "";
    const storedRef =
      ethers.isAddress(rawRef) &&
      rawRef !== ethers.ZeroAddress &&
      rawRef.toLowerCase() !== (userAddress || "").toLowerCase()
        ? rawRef
        : "";

    const buySection = ended
      ? `
      <div class="info-box">
        <div class="info-title">✅ Presale telah selesai</div>
        <p>Kamu bisa klaim token yang sudah kamu beli menggunakan tombol di bawah.</p>
      </div>
      <button class="btn-primary btn-full" onclick="claimTokens(${id})" style="margin-top:1rem">🎁 Klaim Token Saya</button>
      ${Number(st.status) !== 1 ? "" : `<button class="btn-outline btn-full" onclick="finalizeAndLiquidity(${id})" style="margin-top:0.75rem">⚡ Finalisasi & Add Likuiditas</button>`}
    `
      : `
      <div class="buy-input-wrap">
        <label>Jumlah BNB yang ingin diinvestasikan</label>
        <input type="number" class="buy-input" id="buyBnbAmount" placeholder="e.g. 100" min="0" step="0.01" oninput="calcBuyAmount(${id})">
      </div>
      <div class="buy-calc" id="buyCalc">
        <div class="buy-calc-row"><span>Harga per Token</span><span>${price} BNB</span></div>
        <div class="buy-calc-row"><span>Estimasi Token</span><span id="calcTokens">—</span></div>
        ${cfg.referralEnabled ? `<div class="buy-calc-row"><span>Potongan Referral (${refPct})</span><span id="calcRefDisc">—</span></div>` : ""}
        <div class="buy-calc-row"><span>Total Bayar</span><span id="calcTotal">—</span></div>
      </div>
      ${cfg.referralEnabled ? `<div class="ref-input-wrap"><label>Alamat Referral (opsional)</label><input type="text" class="buy-input" id="buyRefAddr" value="${storedRef}" placeholder="0x..."></div>` : ""}
      <button class="btn-primary btn-full" onclick="buyTokens(${id})" id="btnBuy">💰 Beli Token</button>
    `;

    container.innerHTML = `
      <div class="detail-grid">
        <div class="detail-main">
          <div class="detail-header">${logoEl}<div class="detail-title-wrap"><div class="detail-name">${escHtml(cfg.tokenName)}</div><div class="detail-sym">${escHtml(cfg.tokenSymbol)}</div><div class="detail-socials">${socialLinks}</div></div></div>
          <div class="detail-desc">${escHtml(cfg.description)}</div>
          <div class="detail-info-grid">
            <div class="info-tile"><div class="info-tile-label">Harga Presale</div><div class="info-tile-val accent">${price} BNB</div></div>
            <div class="info-tile"><div class="info-tile-label">Harga Listing DEX</div><div class="info-tile-val accent">${listing} BNB</div></div>
            <div class="info-tile"><div class="info-tile-label">Total Dijual</div><div class="info-tile-val">${formatNum(Number(cfg.totalTokensForSale) / 1e18)} ${escHtml(cfg.tokenSymbol)}</div></div>
            <div class="info-tile"><div class="info-tile-label">Terjual</div><div class="info-tile-val">${formatNum(Number(st.tokensSold) / 1e18)} (${pct}%)</div></div>
            <div class="info-tile"><div class="info-tile-label">Total Raised</div><div class="info-tile-val accent">${raised} BNB</div></div>
            <div class="info-tile"><div class="info-tile-label">Durasi</div><div class="info-tile-val">${durLabel}</div></div>
            <div class="info-tile"><div class="info-tile-label">Berakhir</div><div class="info-tile-val">${endDate}</div></div>
            <div class="info-tile"><div class="info-tile-label">Program Referral</div><div class="info-tile-val">${refPct}</div></div>
          </div>
          <div class="alloc-breakdown" style="margin-bottom:1.5rem">
            <div class="alloc-row"><span class="alloc-label">🏊 Likuiditas DEX</span><span class="alloc-val">${liqBps}%</span></div>
            <div class="alloc-row"><span class="alloc-label">🏦 Platform Fee</span><span class="alloc-val platform">5%</span></div>
            <div class="alloc-row"><span class="alloc-label">🎁 Referral</span><span class="alloc-val">${refBps}%</span></div>
            <div class="alloc-row"><span class="alloc-label">👤 Developer</span><span class="alloc-val">${devBps}%</span></div>
          </div>
          <div id="lpLockSectionContainer" style="margin-bottom:1.5rem"><div style="color:var(--text3);font-size:0.8rem">⏳ Memuat info LP lock...</div></div>
          <div class="info-tile" style="margin-bottom:1.5rem"><div class="info-tile-label">Alamat Kontrak Token</div><div class="info-tile-val" style="word-break:break-all;font-size:0.75rem"><a href="${CONFIG.EXPLORER_URL}/address/${cfg.tokenContract}" target="_blank" style="color:var(--accent)">${cfg.tokenContract}</a></div></div>
          <div class="card-progress" style="margin-bottom:1.5rem"><div style="display:flex;justify-content:space-between;margin-bottom:0.5rem"><span>Progress Presale</span><span>${pct}%</span></div><div class="progress-bar" style="height:12px"><div class="progress-fill" style="width:${pct}%"></div></div></div>
          <div class="info-box" style="margin-bottom:1.5rem"><div class="info-title">📣 Bagikan Presale Ini</div><div class="share-buttons" id="shareButtons-${id}"></div></div>
          ${myRef ? `<div class="info-box"><div class="info-title">🔗 Link Referral Kamu</div><div style="display:flex;gap:0.5rem;margin-top:0.5rem;flex-wrap:wrap"><input type="text" value="${myRef}" readonly class="form-input" style="font-size:0.7rem;flex:1"><button class="btn-outline" onclick="copyRef('${myRef}')">Copy</button></div><div class="share-buttons" id="shareRefButtons-${id}"></div></div>` : ""}
          <div id="userPurchaseInfo"></div>
        </div>
        <div class="detail-side"><div class="buy-card"><div class="buy-card-title">${ended ? "📦 Klaim Token" : "💰 Beli Token"}</div>${ended ? "" : `<div style="font-size:0.8rem;margin-bottom:1rem">⏱ <span id="detailTimer">...</span></div>`}${buySection}</div></div>
      </div>
    `;

    if (userAddress && factoryContract && !ended) {
      try {
        const buyerInfo = await factoryContract.getBuyerInfo(id, userAddress);
        const userContributed = Number(
          ethers.formatEther(buyerInfo.contributed),
        );
        const userTokens = Number(
          ethers.formatEther(buyerInfo.tokensAllocated),
        );
        const userClaimed = buyerInfo.claimed;
        const userReferredBy = buyerInfo.referredBy;

        const referralEarnings = await getPresaleReferralEarnings(id);

        let userInfoHtml = "";

        if (userContributed > 0 || referralEarnings > 0) {
          userInfoHtml = `
            <div class="info-box" style="margin-top:1.5rem; background:rgba(59,130,246,0.05); border-color:rgba(59,130,246,0.2);">
              <div class="info-title" style="color:var(--accent); margin-bottom:0.75rem;">📊 Aktivitas Kamu di Presale Ini</div>
              ${
                userContributed > 0
                  ? `
              <div style="margin-bottom:0.75rem; padding-bottom:0.5rem; border-bottom:1px solid rgba(59,130,246,0.1);">
                <div style="font-weight:700; margin-bottom:0.5rem;">💰 Pembelian Token</div>
                <div class="buy-calc-row"><span>Total Kontribusi</span><span>${formatBNB(userContributed)} BNB</span></div>
                <div class="buy-calc-row"><span>Token Diterima</span><span>${formatNum(userTokens)} ${cfg.tokenSymbol}</span></div>
                <div class="buy-calc-row"><span>Status Klaim</span><span>${userClaimed ? "✅ Sudah diklaim" : "⏳ Belum diklaim (klaim setelah presale selesai)"}</span></div>
                ${userReferredBy && userReferredBy !== ethers.ZeroAddress ? `<div class="buy-calc-row"><span>Direfer oleh</span><span>${userReferredBy.slice(0, 6)}...${userReferredBy.slice(-4)}</span></div>` : ""}
              </div>
              `
                  : ""
              }
              ${
                referralEarnings > 0
                  ? `
              <div>
                <div style="font-weight:700; margin-bottom:0.5rem;">🎁 Komisi Referral dari Presale Ini</div>
                <div class="buy-calc-row"><span>Total Komisi</span><span style="color:var(--accent3);">${formatBNB(referralEarnings)} BNB</span></div>
                <div class="field-hint" style="margin-top:0.25rem;">Komisi langsung masuk ke wallet saat pembeli menggunakan link referralmu</div>
              </div>
              `
                  : ""
              }
            </div>
          `;
        }

        const userPurchaseDiv = container.querySelector("#userPurchaseInfo");
        if (userPurchaseDiv && userInfoHtml) {
          userPurchaseDiv.innerHTML = userInfoHtml;
        }
      } catch (e) {
        console.warn("Could not fetch buyer info:", e);
      }
    }

    if (!ended) {
      const dtEl = document.getElementById("detailTimer");
      if (dtEl) {
        const tick = () => {
          const diff = Number(cfg.endTime) - Math.floor(Date.now() / 1000);
          if (diff <= 0) {
            dtEl.textContent = "Presale selesai!";
            return;
          }
          const d = Math.floor(diff / 86400),
            h = Math.floor((diff % 86400) / 3600),
            m = Math.floor((diff % 3600) / 60),
            s = diff % 60;
          dtEl.textContent = `Berakhir dalam: ${d > 0 ? d + " hari " : ""}${h} jam ${m} menit ${s} detik`;
          setTimeout(tick, 1000);
        };
        tick();
      }
    }

    const lpContainer = document.getElementById("lpLockSectionContainer");
    if (lpContainer && factoryContract) {
      renderLpLockSection(id, cfg, st).then((html) => {
        if (lpContainer) lpContainer.innerHTML = html;
      });
    }

    const shareUrl = `${window.location.origin}${window.location.pathname}?presale=${id}`;
    const shareText = `🚀 Cek presale token ${escHtml(cfg.tokenName)} di RecehLaunch! Harga: ${price} BNB`;
    injectShareButtons(`shareButtons-${id}`, shareText, shareUrl);
    if (myRef)
      injectShareButtons(
        `shareRefButtons-${id}`,
        `🎁 Gunakan link referral saya untuk beli token ${escHtml(cfg.tokenName)}!`,
        `${window.location.origin}${window.location.pathname}?presale=${id}&ref=${userAddress}`,
      );
  } catch (e) {
    console.error(e);
    container.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--danger)">Gagal memuat data: ${e.message}</div>`;
  }
}

function copyRef(url) {
  navigator.clipboard
    .writeText(url)
    .then(() => showToast("✅ Link referral disalin!", "success"))
    .catch(() => {
      const el = document.createElement("textarea");
      el.value = url;
      el.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      showToast("✅ Link disalin!", "success");
    });
}

function injectShareButtons(containerId, text, url) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const enc = encodeURIComponent;
  el.innerHTML = `
    <a href="https://www.facebook.com/sharer/sharer.php?u=${enc(url)}" target="_blank" class="share-btn fb"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook</a>
    <a href="https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}" target="_blank" class="share-btn tw"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg> Twitter/X</a>
    <a href="https://t.me/share/url?url=${enc(url)}&text=${enc(text)}" target="_blank" class="share-btn tg"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> Telegram</a>
    <a href="https://api.whatsapp.com/send?text=${enc(text + " " + url)}" target="_blank" class="share-btn wa"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg> WhatsApp</a>
  `;
}

function calcBuyAmount(presaleId) {
  const p = presaleCache.find((p) => p.id === presaleId);
  if (!p) return;

  const amtStr = document.getElementById("buyBnbAmount")?.value;
  const amt = parseFloat(amtStr);
  if (isNaN(amt) || amt <= 0) {
    const ct = document.getElementById("calcTokens");
    const cr = document.getElementById("calcRefDisc");
    const ctot = document.getElementById("calcTotal");
    if (ct) ct.textContent = "—";
    if (cr) cr.textContent = "—";
    if (ctot) ctot.textContent = "—";
    return;
  }

  const price = Number(ethers.formatEther(p.config.pricePerToken));
  const refBps = Number(p.config.referralBps);
  const tokens = amt / price;
  const refDisc = (amt * refBps) / 10000;

  const ct = document.getElementById("calcTokens");
  const cr = document.getElementById("calcRefDisc");
  const ctot = document.getElementById("calcTotal");
  if (ct) ct.textContent = `${formatNum(tokens)} ${p.config.tokenSymbol}`;
  if (cr && p.config.referralEnabled)
    cr.textContent = `${formatBNB(refDisc)} BNB`;
  if (ctot) ctot.textContent = `${formatBNB(amt)} BNB`;
}

async function buyTokens(presaleId) {
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }

  const amtEl = document.getElementById("buyBnbAmount");
  const amt = parseFloat(amtEl?.value || "0");
  if (isNaN(amt) || amt <= 0) {
    showToast("Masukkan jumlah BNB yang valid", "warn");
    return;
  }

  const refEl = document.getElementById("buyRefAddr");
  let refAdr = refEl?.value?.trim() || "";
  if (!ethers.isAddress(refAdr) || refAdr === ethers.ZeroAddress) {
    refAdr = ethers.ZeroAddress;
  } else if (refAdr.toLowerCase() === userAddress.toLowerCase()) {
    showToast("⚠️ Kamu tidak bisa merujuk dirimu sendiri", "warn");
    refAdr = ethers.ZeroAddress;
  }

  const amtWei = ethers.parseEther(amt.toString());
  const originalText =
    document.getElementById("btnBuy")?.textContent || "💰 Beli Token";
  setLoading("btnBuy", true, "⏳ Memproses...");

  try {
    const balance = await provider.getBalance(userAddress);
    if (balance < amtWei) {
      showToast(
        `❌ Saldo BNB tidak cukup. Kamu punya ${formatBNB(Number(ethers.formatEther(balance)))} BNB`,
        "error",
      );
      return;
    }

    showToast("⏳ Konfirmasi di wallet...", "info");
    const tx = await factoryContract.buyTokens(presaleId, refAdr, {
      value: amtWei,
    });
    showToast("⏳ Transaksi dikirim, menunggu konfirmasi...", "info");
    await tx.wait();

    localStorage.removeItem("rl_referrer");
    showToast("✅ Berhasil! Token sudah dialokasikan.", "success");
    if (amtEl) amtEl.value = "";
    await loadPresales();
    await openPresaleDetail(presaleId);
  } catch (e) {
    showToast(`❌ ${e.reason || e.message || "Transaksi gagal"}`, "error");
  } finally {
    setLoading("btnBuy", false, originalText);
  }
}

async function claimTokens(presaleId) {
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }
  try {
    showToast("⏳ Mengklaim token...", "info");
    const tx = await factoryContract.claimTokens(presaleId);
    await tx.wait();
    showToast("✅ Token berhasil diklaim!", "success");
    await loadPresales();
    await openPresaleDetail(presaleId);
  } catch (e) {
    showToast(`❌ ${e.reason || e.message}`, "error");
  }
}

async function finalizeAndLiquidity(presaleId) {
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }

  const btn = document.activeElement;
  let originalText = "Finalize";
  if (btn && btn.textContent) {
    originalText = btn.textContent;
    btn.disabled = true;
  }

  try {
    const data = await factoryContract.getPresale(presaleId);
    const cfg = data.config;
    const st = data.state;

    const totalRaisedNum = Number(ethers.formatEther(st.totalRaised || 0n));

    if (totalRaisedNum === 0) {
      showToast(
        "⚠️ Tidak ada dana yang terkumpul, tidak perlu finalisasi",
        "warn",
      );
      if (btn) btn.disabled = false;
      return;
    }

    const bnbForLiquidity =
      totalRaisedNum * (Number(cfg.liquidityAllocBps) / 10000);

    const tokensNeededForLiquidity =
      bnbForLiquidity / Number(ethers.formatEther(cfg.listingPrice));

    const totalTokensInContract = Number(
      ethers.formatEther(cfg.totalTokensForSale),
    );
    const tokensSoldNum = Number(ethers.formatEther(st.tokensSold));
    const unsoldTokens = totalTokensInContract - tokensSoldNum;

    console.log("=== Detail Perhitungan ===");
    console.log("Total raised:", totalRaisedNum, "BNB");
    console.log("BNB untuk likuiditas:", bnbForLiquidity, "BNB");
    console.log(
      "Harga listing:",
      Number(ethers.formatEther(cfg.listingPrice)),
      "BNB",
    );
    console.log("Token dibutuhkan untuk likuiditas:", tokensNeededForLiquidity);
    console.log("Total token di kontrak:", totalTokensInContract);
    console.log("Token terjual:", tokensSoldNum);
    console.log("Token sisa (belum laku):", unsoldTokens);

    if (unsoldTokens < tokensNeededForLiquidity) {
      const shortfall = tokensNeededForLiquidity - unsoldTokens;

      const doTopUp = confirm(
        `⚠️ TOKEN TIDAK CUKUP UNTUK LIKUIDITAS!\n\n` +
          `📊 Status Presale:\n` +
          `• Token terjual: ${tokensSoldNum.toFixed(2)} token\n` +
          `• Token sisa di kontrak: ${unsoldTokens.toFixed(2)} token\n` +
          `• Token dibutuhkan untuk likuiditas: ${tokensNeededForLiquidity.toFixed(2)} token\n\n` +
          `💰 Kekurangan: ${shortfall.toFixed(2)} token\n\n` +
          `Klik OK untuk menambah token dari wallet Anda ke kontrak.\n` +
          `Klik Cancel jika ingin membatalkan.`,
      );

      if (!doTopUp) {
        if (btn) btn.disabled = false;
        return;
      }

      const shortfallWei = ethers.parseEther(Math.ceil(shortfall).toString());
      const tokenErc20 = new ethers.Contract(
        cfg.tokenContract,
        ERC20_ABI,
        signer,
      );

      const creatorBalance = await tokenErc20.balanceOf(userAddress);
      if (creatorBalance < shortfallWei) {
        showToast(
          `❌ Saldo token Anda tidak cukup. Butuh minimal ${shortfall.toFixed(2)} token`,
          "error",
        );
        if (btn) btn.disabled = false;
        return;
      }

      showToast("⏳ Menyetujui transfer token...", "info");
      const approveTx = await tokenErc20.approve(
        CONFIG.PRESALE_FACTORY_ADDRESS,
        shortfallWei,
      );
      await approveTx.wait();

      showToast("⏳ Menambah token ke kontrak presale...", "info");
      const depositTx = await factoryContract.depositTokensForLiquidity(
        presaleId,
        shortfallWei,
      );
      await depositTx.wait();
      showToast("✅ Token berhasil ditambahkan!", "success");
    }

    showToast("⏳ Memfinalisasi presale...", "info");
    const tx1 = await factoryContract.finalizePresale(presaleId);
    await tx1.wait();
    showToast("✅ Presale berhasil difinalisasi!", "success");

    const freshData = await factoryContract.getPresale(presaleId);
    const freshSt = freshData.state;
    const freshTotalRaised = Number(
      ethers.formatEther(freshSt.totalRaised || 0n),
    );

    const finalBnbForLiquidity =
      freshTotalRaised * (Number(cfg.liquidityAllocBps) / 10000);

    const finalTokensForLiquidity =
      finalBnbForLiquidity / Number(ethers.formatEther(cfg.listingPrice));

    const slippageBps = CONFIG.DEFAULT_SLIPPAGE_BPS;
    const amountTokenMin = ethers.parseEther(
      ((finalTokensForLiquidity * (10000 - slippageBps)) / 10000).toString(),
    );
    const amountETHMin = ethers.parseEther(
      ((finalBnbForLiquidity * (10000 - slippageBps)) / 10000).toString(),
    );

    showToast("⏳ Menambah likuiditas ke DEX...", "info");
    const tx2 = await factoryContract.addLiquidityToDex(
      presaleId,
      amountTokenMin,
      amountETHMin,
    );
    await tx2.wait();

    showToast(
      "✅ Presale selesai! Likuiditas berhasil ditambahkan!",
      "success",
    );
    await loadPresales();
    await openPresaleDetail(presaleId);
  } catch (e) {
    console.error("Finalize error:", e);
    let errorMsg = e.reason || e.message;

    if (errorMsg.includes("Insufficient tokens for liquidity")) {
      errorMsg =
        "Token tidak cukup untuk likuiditas. Pastikan Anda sudah menambah token sisa ke kontrak.";
    } else if (errorMsg.includes("Not ended")) {
      errorMsg = "Presale belum selesai. Tunggu hingga waktu berakhir.";
    } else if (errorMsg.includes("user rejected")) {
      errorMsg = "Transaksi dibatalkan di wallet.";
    }

    showToast(`❌ ${errorMsg}`, "error");
  } finally {
    if (btn) btn.disabled = false;
  }
}

function goToStep(step) {
  if (step > currentStep && !validateStep(currentStep)) return;
  currentStep = step;
  document
    .querySelectorAll(".step-panel")
    .forEach((p, i) => p.classList.toggle("active", i + 1 === step));
  document.querySelectorAll(".step-item").forEach((item, i) => {
    item.classList.remove("active", "done");
    if (i + 1 === step) item.classList.add("active");
    if (i + 1 < step) item.classList.add("done");
  });
  if (step === 4) buildConfirmCard();
}

function validateStep(step) {
  if (step === 1) {
    const addr = document.getElementById("tokenAddress")?.value || "";
    const name = document.getElementById("tokenName")?.value || "";
    const desc = document.getElementById("tokenDescription")?.value || "";
    if (!ethers.isAddress(addr)) {
      showToast("Alamat kontrak token tidak valid", "warn");
      return false;
    }
    if (!name) {
      showToast("Nama token belum terdeteksi", "warn");
      return false;
    }
    if (!desc.trim()) {
      showToast("Deskripsi proyek wajib diisi", "warn");
      return false;
    }
  }
  if (step === 2) {
    const tokens = parseFloat(
      document.getElementById("totalTokens")?.value || "0",
    );
    const price = parseFloat(
      document.getElementById("pricePerToken")?.value || "0",
    );
    const listing = parseFloat(
      document.getElementById("listingPrice")?.value || "0",
    );
    const dur = parseInt(
      document.getElementById("selectedDuration")?.value || "-1",
    );
    const lpLock = parseInt(
      document.getElementById("selectedLpLock")?.value || "0",
    );
    const decimals = parseInt(
      document.getElementById("tokenDecimals")?.value || "18",
    );

    if (!tokens || tokens <= 0) {
      showToast("Jumlah token harus lebih dari 0", "warn");
      return false;
    }
    if (!price || price <= 0) {
      showToast("Harga per token harus diisi", "warn");
      return false;
    }
    if (!listing || listing <= 0) {
      showToast("Harga listing harus diisi", "warn");
      return false;
    }
    if (dur < 0) {
      showToast("Pilih durasi presale", "warn");
      return false;
    }
    if (lpLock < 0 || lpLock > 3) {
      showToast("Pilih durasi LP Lock", "warn");
      return false;
    }

    try {
      const tokenUnits = tokens.toString();
      if (tokenUnits.includes(".") && decimals === 0) {
        showToast(
          "Token dengan desimal 0 hanya bisa menggunakan jumlah bulat.",
          "warn",
        );
        return false;
      }
      ethers.parseUnits(tokenUnits, decimals);
    } catch (e) {
      showToast(
        `Jumlah token tidak sesuai dengan desimal token (${decimals}).`,
        "warn",
      );
      return false;
    }
  }
  return true;
}

function onTokenAddressInput() {
  const resultEl = document.getElementById("tokenInfoResult");
  if (resultEl) resultEl.innerHTML = "";
  const nameSymRow = document.getElementById("tokenNameSymbolRow");
  const decRow = document.getElementById("tokenDecimalsRow");
  if (nameSymRow) nameSymRow.style.display = "none";
  if (decRow) decRow.style.display = "none";
  const tn = document.getElementById("tokenName");
  const ts = document.getElementById("tokenSymbol");
  const td = document.getElementById("tokenDecimals");
  if (tn) tn.value = "";
  if (ts) ts.value = "";
  if (td) td.value = "";
}

async function fetchTokenInfo() {
  const addr = document.getElementById("tokenAddress")?.value?.trim() || "";
  const resultEl = document.getElementById("tokenInfoResult");
  if (!resultEl) return;

  if (!ethers.isAddress(addr)) {
    resultEl.innerHTML = "";
    const nameSymRow = document.getElementById("tokenNameSymbolRow");
    const decRow = document.getElementById("tokenDecimalsRow");
    if (nameSymRow) nameSymRow.style.display = "none";
    if (decRow) decRow.style.display = "none";
    return;
  }

  resultEl.innerHTML =
    '<div class="token-info-result loading">⏳ Mengambil info token...</div>';

  try {
    const token = new ethers.Contract(addr, ERC20_ABI, rpcProvider);
    const [name, symbol, decimals, totalSupply] = await Promise.all([
      token.name().catch(() => "Unknown"),
      token.symbol().catch(() => "Unknown"),
      token.decimals().catch(() => 18),
      token.totalSupply().catch(() => 0n),
    ]);

    const tn = document.getElementById("tokenName");
    const ts = document.getElementById("tokenSymbol");
    const td = document.getElementById("tokenDecimals");
    if (tn) tn.value = name;
    if (ts) ts.value = symbol;
    if (td) td.value = decimals.toString();

    resultEl.innerHTML = `<div class="token-info-result">✅ Token valid — Supply: <strong>${formatNum(Number(ethers.formatUnits(totalSupply, decimals)))} ${escHtml(symbol)}</strong></div>`;
    const nameSymRow = document.getElementById("tokenNameSymbolRow");
    const decRow = document.getElementById("tokenDecimalsRow");
    if (nameSymRow) nameSymRow.style.display = "";
    if (decRow) decRow.style.display = "";
  } catch (e) {
    resultEl.innerHTML = `<div class="token-info-result error">❌ Gagal mengambil info token: ${e.message}</div>`;
    const nameSymRow = document.getElementById("tokenNameSymbolRow");
    const decRow = document.getElementById("tokenDecimalsRow");
    if (nameSymRow) nameSymRow.style.display = "none";
    if (decRow) decRow.style.display = "none";
  }
}

function previewLogo(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    showToast("Ukuran file maks 2MB", "warn");
    return;
  }
  logoMimeType = file.type;
  const reader = new FileReader();
  reader.onload = (e) => {
    logoBase64 = e.target.result.split(",")[1];
    const lp = document.getElementById("logoPreview");
    if (lp)
      lp.innerHTML = `<img src="${e.target.result}" style="width:80px;height:80px;border-radius:50%;object-fit:cover">`;
  };
  reader.readAsDataURL(file);
}

function selectLpLockFromSelect(val) {
  selectedLpLock = parseInt(val);

  const hiddenEl = document.getElementById("selectedLpLock");
  if (hiddenEl) hiddenEl.value = selectedLpLock;

  const previewEl = document.getElementById("lpLockBadgePreview");
  if (previewEl) {
    previewEl.innerHTML = getLpLockBadgeHtml(selectedLpLock);
  }

  const reminderEl = document.getElementById("lpLockReminder");
  if (reminderEl) {
    if (selectedLpLock === 3) {
      reminderEl.innerHTML =
        "🔥 <strong>PERMANENT</strong> — LP tidak bisa ditarik selamanya. Mendapat badge Trusted tertinggi.";
      reminderEl.style.color = "var(--accent)";
    } else if (selectedLpLock === 0) {
      reminderEl.innerHTML =
        "⚠️ Minimal 30 hari. Tidak mendapat badge Trusted.";
      reminderEl.style.color = "var(--text3)";
    } else {
      const labels = ["", "6 bulan", "1 tahun", ""];
      reminderEl.innerHTML = `✅ LP terkunci ${labels[selectedLpLock]}. Mendapat badge <strong>Trusted</strong>.`;
      reminderEl.style.color = "var(--success)";
    }
  }

  recalcAlloc();
}

function selectLpLock(val) {
  selectLpLockFromSelect(val);
  const dropdown = document.getElementById("lpLockSelect");
  if (dropdown) dropdown.value = val;
}

function getLpLockBadgeHtml(lockDur) {
  const opt = CONFIG.LP_LOCK_OPTIONS[lockDur] || CONFIG.LP_LOCK_OPTIONS[0];
  const trusted = opt.trusted
    ? `<span class="badge badge-trusted">⭐ Trusted</span>`
    : "";
  return `<span class="badge ${opt.badgeClass}">${opt.badge}</span>${trusted}`;
}

async function renderLpLockSection(presaleId, cfg, st) {
  const lockDur = Number(cfg.lpLockDuration);
  const badgeHtml = getLpLockBadgeHtml(lockDur);
  let detailHtml = "";

  if (st.liquidityAdded && factoryContract) {
    try {
      const info = await factoryContract.getLPLockInfo(presaleId);
      const unlockAt = Number(info.unlockAt);
      const now = Math.floor(Date.now() / 1000);
      const isUnlocked = info.isUnlocked;
      const lpToken = info.lpToken;

      if (lockDur === 3) {
        detailHtml = `<div class="lp-lock-detail perm">🔥 LP Token terkunci <strong>SELAMANYA</strong> di kontrak.</div>`;
      } else if (isUnlocked && !info.withdrawn) {
        detailHtml = `<div class="lp-lock-detail unlocked">🔓 LP sudah bisa ditarik sejak ${new Date(unlockAt * 1000).toLocaleDateString("id-ID")}.<button class="btn-outline" style="margin-top:0.5rem" onclick="withdrawLP(${presaleId})">Tarik LP Token</button></div>`;
      } else if (isUnlocked && info.withdrawn) {
        detailHtml = `<div class="lp-lock-detail">✅ LP sudah ditarik.</div>`;
      } else if (unlockAt > 0 && unlockAt < Number.MAX_SAFE_INTEGER) {
        const remaining = unlockAt - now;
        const days = Math.floor(remaining / 86400);
        const hrs = Math.floor((remaining % 86400) / 3600);
        detailHtml = `<div class="lp-lock-detail locked">🔒 LP terkunci sampai ${new Date(unlockAt * 1000).toLocaleDateString("id-ID")} (${days}h ${hrs}j lagi)</div>`;
      }
    } catch (e) {
      detailHtml = "";
    }
  } else {
    const labels = ["30 hari", "6 bulan", "1 tahun", "PERMANEN"];
    detailHtml = `<div class="lp-lock-detail info">⏳ LP akan dikunci selama <strong>${labels[lockDur]}</strong> setelah likuiditas ditambahkan.</div>`;
  }

  return `<div class="lp-lock-section"><div class="lp-lock-header"><span class="lp-lock-title">🔐 LP Lock</span><div class="lp-lock-badges">${badgeHtml}</div></div>${detailHtml}</div>`;
}

function selectDurationFromSelect(val) {
  const idx = parseInt(val);
  selectedDuration = idx;
  const selDur = document.getElementById("selectedDuration");
  if (selDur) selDur.value = idx;
  const feeDisplay = document.getElementById("durationFeeDisplay");
  const feeText = document.getElementById("durationFeeText");
  if (idx >= 0 && feeDisplay && feeText) {
    feeText.textContent = `Biaya listing: ${["0.0005 BNB (1 Hari)", "0.001 BNB (1 Minggu)", "0.005 BNB (1 Bulan)"][idx]}`;
    feeDisplay.style.display = "";
  } else if (feeDisplay) feeDisplay.style.display = "none";
  recalcAlloc();
}

function recalcAlloc() {
  const tokens = parseFloat(
    document.getElementById("totalTokens")?.value || "0",
  );
  const price = parseFloat(
    document.getElementById("pricePerToken")?.value || "0",
  );
  const listing = parseFloat(
    document.getElementById("listingPrice")?.value || "0",
  );
  const liq = parseInt(
    document.getElementById("liquidityAlloc")?.value || "70",
  );
  const ref = referralEnabled
    ? parseInt(document.getElementById("referralPct")?.value || "0")
    : 0;
  const platform = 5;
  const dev = 100 - liq - platform - ref;

  const box = document.getElementById("estimateBox");
  if (box && tokens > 0 && price > 0) {
    box.innerHTML = `<div>Maksimal Raise: <strong style="color:var(--accent)">${formatBNB(tokens * price)} BNB</strong></div>
      <div>Harga Presale: <strong>${price} BNB</strong></div>
      ${listing > 0 ? `<div>Harga Listing: <strong>${listing} BNB</strong> (${((listing / price - 1) * 100).toFixed(1)}%)</div>` : ""}
      <div style="margin-top:0.5rem;font-size:0.75rem">Alokasi: Likuiditas ${liq}% | Referral ${ref}% | Dev ${dev >= 0 ? dev : 0}%</div>`;
  }
}

function updateAllocBreakdown() {
  let liq = parseInt(document.getElementById("liquidityAlloc")?.value || "70");
  let ref = referralEnabled
    ? parseInt(document.getElementById("referralPct")?.value || "0")
    : 0;
  const platform = 5;

  if (liq < CONFIG.MIN_LIQUIDITY_PERCENT) {
    liq = CONFIG.MIN_LIQUIDITY_PERCENT;
    const liqInput = document.getElementById("liquidityAlloc");
    if (liqInput) liqInput.value = liq;
    showToast(
      `Alokasi likuiditas minimal ${CONFIG.MIN_LIQUIDITY_PERCENT}%`,
      "warn",
    );
  }
  if (liq > CONFIG.MAX_LIQUIDITY_PERCENT) {
    liq = CONFIG.MAX_LIQUIDITY_PERCENT;
    const liqInput = document.getElementById("liquidityAlloc");
    if (liqInput) liqInput.value = liq;
    showToast(
      `Alokasi likuiditas maksimal ${CONFIG.MAX_LIQUIDITY_PERCENT}%`,
      "warn",
    );
  }

  if (ref < CONFIG.MIN_REFERRAL_PERCENT) {
    ref = CONFIG.MIN_REFERRAL_PERCENT;
    const refInput = document.getElementById("referralPct");
    if (refInput) refInput.value = ref;
    showToast(
      `Persentase referral minimal ${CONFIG.MIN_REFERRAL_PERCENT}%`,
      "warn",
    );
  }
  if (ref > CONFIG.MAX_REFERRAL_PERCENT) {
    ref = CONFIG.MAX_REFERRAL_PERCENT;
    const refInput = document.getElementById("referralPct");
    if (refInput) refInput.value = ref;
    showToast(
      `Persentase referral maksimal ${CONFIG.MAX_REFERRAL_PERCENT}%`,
      "warn",
    );
  }

  let dev = 100 - liq - platform - ref;

  if (dev < CONFIG.MIN_DEV_PERCENT) {
    const maxAllowedRef = 100 - platform - liq - CONFIG.MIN_DEV_PERCENT;
    if (maxAllowedRef >= CONFIG.MIN_REFERRAL_PERCENT) {
      ref = maxAllowedRef;
      const refInput = document.getElementById("referralPct");
      if (refInput) refInput.value = ref;
      showToast(
        `Alokasi referral disesuaikan menjadi ${ref}% agar developer mendapat minimal ${CONFIG.MIN_DEV_PERCENT}%`,
        "warn",
      );
    } else {
      liq =
        100 - platform - CONFIG.MIN_REFERRAL_PERCENT - CONFIG.MIN_DEV_PERCENT;
      const liqInput = document.getElementById("liquidityAlloc");
      if (liqInput) liqInput.value = liq;
      showToast(
        `Alokasi likuiditas disesuaikan menjadi ${liq}% agar developer mendapat minimal ${CONFIG.MIN_DEV_PERCENT}%`,
        "warn",
      );
    }
    dev = CONFIG.MIN_DEV_PERCENT;
  }

  const liqVal = document.getElementById("liquidityAllocVal");
  const abLiq = document.getElementById("ab-liquidity");
  const abDev = document.getElementById("ab-dev");
  const abRef = document.getElementById("ab-referral");

  if (liqVal) liqVal.textContent = `${liq}%`;
  if (abLiq) abLiq.textContent = `${liq}%`;
  if (abDev) abDev.textContent = `${dev >= 0 ? dev : 0}%`;
  if (abRef) abRef.textContent = `${ref}%`;
}

function toggleReferral() {
  referralEnabled = !referralEnabled;
  const toggle = document.getElementById("referralToggle");
  if (toggle) toggle.classList.toggle("on", referralEnabled);
  const refSettings = document.getElementById("referralSettings");
  if (refSettings) refSettings.style.display = referralEnabled ? "" : "none";

  if (!referralEnabled) {
    updateAllocBreakdown();
    recalcAlloc();
  } else {
    let refVal = parseInt(document.getElementById("referralPct")?.value || "1");
    if (refVal < 1) {
      const refInput = document.getElementById("referralPct");
      if (refInput) refInput.value = "1";
      updateReferralVal();
    }
    updateAllocBreakdown();
    recalcAlloc();
  }
}

function updateReferralVal() {
  let val = parseInt(document.getElementById("referralPct")?.value || "0");

  if (val < CONFIG.MIN_REFERRAL_PERCENT) val = CONFIG.MIN_REFERRAL_PERCENT;
  if (val > CONFIG.MAX_REFERRAL_PERCENT) val = CONFIG.MAX_REFERRAL_PERCENT;

  const refInput = document.getElementById("referralPct");
  if (refInput) refInput.value = val;

  const pctVal = document.getElementById("referralPctVal");
  const pctDisplay = document.getElementById("refPctDisplay");
  if (pctVal) pctVal.textContent = `${val}%`;
  if (pctDisplay) pctDisplay.textContent = `${val}%`;

  updateAllocBreakdown();
  recalcAlloc();
}

function updateLiquidityVal() {
  let val = parseInt(document.getElementById("liquidityAlloc")?.value || "70");

  if (val < CONFIG.MIN_LIQUIDITY_PERCENT) val = CONFIG.MIN_LIQUIDITY_PERCENT;
  if (val > CONFIG.MAX_LIQUIDITY_PERCENT) val = CONFIG.MAX_LIQUIDITY_PERCENT;

  const liqInput = document.getElementById("liquidityAlloc");
  if (liqInput) liqInput.value = val;

  updateAllocBreakdown();
  recalcAlloc();
}

function buildConfirmCard() {
  const name = document.getElementById("tokenName")?.value || "";
  const symbol = document.getElementById("tokenSymbol")?.value || "";
  const addr = document.getElementById("tokenAddress")?.value || "";
  const tokens = document.getElementById("totalTokens")?.value || "0";
  const price = document.getElementById("pricePerToken")?.value || "0";
  const listing = document.getElementById("listingPrice")?.value || "0";
  const dur = parseInt(
    document.getElementById("selectedDuration")?.value || "-1",
  );
  const liq = parseInt(
    document.getElementById("liquidityAlloc")?.value || "70",
  );
  const refOn = referralEnabled;
  const refPct = referralEnabled
    ? parseInt(document.getElementById("referralPct")?.value || "0")
    : 0;
  const platform = 5;
  const dev = 100 - liq - platform - refPct;
  const lpLock = selectedLpLock;
  const lpOpt = CONFIG.LP_LOCK_OPTIONS[lpLock];
  const feeLabels = [
    "0.0005 BNB (1 Hari)",
    "0.001 BNB (1 Minggu)",
    "0.005 BNB (1 Bulan)",
  ];
  const maxRaise = parseFloat(tokens) * parseFloat(price);
  const trustedBadge = lpOpt.trusted
    ? `<span class="badge badge-trusted" style="margin-left:0.4rem">⭐ Trusted</span>`
    : "";

  const confirmCard = document.getElementById("confirmCard");
  if (!confirmCard) return;

  confirmCard.innerHTML = `
    <div class="confirm-row"><span class="confirm-label">Token</span><span class="confirm-val">${escHtml(name)} (${escHtml(symbol)})</span></div>
    <div class="confirm-row"><span class="confirm-label">Kontrak</span><span class="confirm-val" style="font-size:0.7rem">${addr}</span></div>
    <div class="confirm-row"><span class="confirm-label">Jumlah Token</span><span class="confirm-val">${formatNum(parseFloat(tokens))} ${escHtml(symbol)}</span></div>
    <div class="confirm-row"><span class="confirm-label">Harga Presale</span><span class="confirm-val accent">${price} BNB</span></div>
    <div class="confirm-row"><span class="confirm-label">Harga Listing</span><span class="confirm-val accent">${listing} BNB</span></div>
    <div class="confirm-row"><span class="confirm-label">Max Raise</span><span class="confirm-val accent">${formatBNB(maxRaise)} BNB</span></div>
    <div class="confirm-row"><span class="confirm-label">Durasi & Fee</span><span class="confirm-val">${dur >= 0 ? feeLabels[dur] : "-"}</span></div>
    <div class="confirm-row"><span class="confirm-label">Alokasi Likuiditas</span><span class="confirm-val">${liq}%</span></div>
    <div class="confirm-row"><span class="confirm-label">Platform Fee</span><span class="confirm-val">${platform}%</span></div>
    <div class="confirm-row"><span class="confirm-label">Program Referral</span><span class="confirm-val">${refOn ? `Aktif (${refPct}%)` : "Tidak aktif"}</span></div>
    <div class="confirm-row"><span class="confirm-label">Alokasi Developer</span><span class="confirm-val">${dev >= 0 ? dev : 0}%</span></div>
    <div class="confirm-row"><span class="confirm-label">LP Lock</span><span class="confirm-val"><span class="badge ${lpOpt.badgeClass}">${lpOpt.badge}</span>${trustedBadge}</span></div>
    ${dev < 0 ? `<div class="confirm-row-warn">⚠️ Alokasi developer negatif! Kurangi referral atau likuiditas.</div>` : ""}
    ${lpLock === 3 ? `<div class="confirm-row-warn">⚠️ LP Lock PERMANEN tidak bisa dibatalkan.</div>` : ""}
  `;
}

async function launchPresale() {
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }

  const tokenAddr = document.getElementById("tokenAddress")?.value || "";
  const tokenName = document.getElementById("tokenName")?.value || "";
  const tokenSymbol = document.getElementById("tokenSymbol")?.value || "";
  const description = document.getElementById("tokenDescription")?.value || "";
  const totalTokens = document.getElementById("totalTokens")?.value || "0";
  const priceWei = document.getElementById("pricePerToken")?.value || "0";
  const listingWei = document.getElementById("listingPrice")?.value || "0";
  const liqBps =
    parseInt(document.getElementById("liquidityAlloc")?.value || "70") * 100;
  const dur = parseInt(
    document.getElementById("selectedDuration")?.value || "-1",
  );
  const refPct = referralEnabled
    ? parseInt(document.getElementById("referralPct")?.value || "0") * 100
    : 0;
  const lpLock = selectedLpLock;
  const website = document.getElementById("socialWebsite")?.value || "";
  const twitter = document.getElementById("socialTwitter")?.value || "";
  const telegram = document.getElementById("socialTelegram")?.value || "";
  const discord = document.getElementById("socialDiscord")?.value || "";
  const github = document.getElementById("socialGithub")?.value || "";

  const decimalsEl = document.getElementById("tokenDecimals");
  const tokenDecimals =
    decimalsEl && decimalsEl.value ? parseInt(decimalsEl.value) : 18;
  const fees = [CONFIG.FEE_1_DAY, CONFIG.FEE_1_WEEK, CONFIG.FEE_1_MONTH];
  const feeWei = BigInt(fees[dur]);

  let totalTokensWei;
  try {
    totalTokensWei = ethers.parseUnits(totalTokens.toString(), tokenDecimals);
  } catch (e) {
    showToast(
      `❌ Jumlah token tidak valid untuk desimal ${tokenDecimals}`,
      "error",
    );
    return;
  }

  const pricePerTokenWei = ethers.parseEther(priceWei.toString());
  const listingPriceWei = ethers.parseEther(listingWei.toString());

  let logoHash = "";
  if (logoBase64) logoHash = await uploadLogoToServer(logoBase64, logoMimeType);

  const btn = document.getElementById("btnLaunch");
  const originalText = btn?.textContent || "🚀 Launch Presale";
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Memproses...";
  }

  try {
    setApStatus(1, "⏳");
    const tokenContract = new ethers.Contract(tokenAddr, ERC20_ABI, signer);
    const tokAllowance = await tokenContract.allowance(
      userAddress,
      CONFIG.PRESALE_FACTORY_ADDRESS,
    );
    if (tokAllowance < totalTokensWei) {
      showToast("⏳ Menyetujui transfer token...", "info");
      const tx = await tokenContract.approve(
        CONFIG.PRESALE_FACTORY_ADDRESS,
        totalTokensWei,
      );
      await tx.wait();
    }
    setApStatus(1, "✅");

    setApStatus(2, "⏳");
    const bnbBalance = await provider.getBalance(userAddress);
    if (bnbBalance < feeWei) {
      showToast(
        `❌ Saldo BNB tidak cukup untuk listing fee ${["0.0005 BNB", "0.001 BNB", "0.005 BNB"][dur]}`,
        "error",
      );
      setApStatus(2, "❌");
      return;
    }
    setApStatus(2, "✅");

    setApStatus(3, "⏳");
    showToast("⏳ Meluncurkan presale...", "info");

    const tx3 = await factoryContract.createPresale(
      tokenAddr,
      tokenName,
      tokenSymbol,
      logoHash,
      description,
      totalTokensWei,
      pricePerTokenWei,
      listingPriceWei,
      liqBps,
      dur,
      referralEnabled,
      refPct,
      lpLock,
      { website, twitter, telegram, discord, github },
      { value: feeWei },
    );
    await tx3.wait();
    setApStatus(3, "✅");

    showToast("🚀 Presale berhasil diluncurkan!", "success");
    await loadPresales();
    resetLaunchForm();
    setTimeout(() => navigateTo("home"), 1500);
  } catch (e) {
    showToast(`❌ ${e.reason || e.message || "Launch gagal"}`, "error");
    ["1", "2", "3"].forEach((i) => setApStatus(i, "⏳"));
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }
}

function setApStatus(num, icon) {
  const el = document.getElementById(`apStatus${num}`);
  if (el) el.textContent = icon;
}

async function loadPortfolio() {
  if (!userAddress) {
    const boughtEl = document.getElementById("boughtList");
    const createdEl = document.getElementById("createdList");
    if (boughtEl)
      boughtEl.innerHTML =
        '<div style="color:var(--text3);text-align:center;padding:2rem">Hubungkan wallet dulu</div>';
    if (createdEl)
      createdEl.innerHTML =
        '<div style="color:var(--text3);text-align:center;padding:2rem">Hubungkan wallet dulu</div>';
    return;
  }

  const contractToUse = factoryContract || getReadOnlyContract();
  if (!contractToUse) {
    const errMsg =
      '<div style="color:var(--danger);text-align:center;padding:2rem">Kontrak tidak ditemukan</div>';
    const boughtEl = document.getElementById("boughtList");
    const createdEl = document.getElementById("createdList");
    if (boughtEl) boughtEl.innerHTML = errMsg;
    if (createdEl) createdEl.innerHTML = errMsg;
    return;
  }

  const oldSummary = document.getElementById("portfolioReferralSummary");
  if (oldSummary) oldSummary.remove();

  try {
    const totalReferralEarnings = await getTotalReferralEarnings();

    if (totalReferralEarnings > 0) {
      const refSummary = document.createElement("div");
      refSummary.id = "portfolioReferralSummary";
      refSummary.className = "info-box";
      refSummary.style.marginBottom = "1.5rem";
      refSummary.style.background = "rgba(16,185,129,0.05)";
      refSummary.style.borderColor = "rgba(16,185,129,0.2)";

      refSummary.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <div class="info-title" style="color:var(--accent3); margin-bottom:0.25rem;">🎁 Total Komisi Referral</div>
            <div style="font-size:0.75rem; color:var(--text3);">Komisi dari semua presale yang kamu referensikan</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.5rem; font-weight:800; color:var(--accent3);">${formatBNB(totalReferralEarnings)} BNB</div>
            <div style="font-size:0.7rem; color:var(--text3);">Sudah masuk ke wallet kamu</div>
          </div>
        </div>
      `;

      const portfolioHeader = document.querySelector(".portfolio-tabs");
      if (portfolioHeader) {
        portfolioHeader.parentNode.insertBefore(
          refSummary,
          portfolioHeader.nextSibling,
        );
      }
    }
  } catch (e) {
    console.warn("Could not fetch total referral earnings:", e);
  }

  const boughtEl = document.getElementById("boughtList");
  if (boughtEl)
    boughtEl.innerHTML =
      '<div style="color:var(--text3);text-align:center;padding:2rem">Memuat...</div>';

  try {
    const buyerIds = await Promise.race([
      contractToUse.getBuyerPresales(userAddress),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Timeout")),
          CONFIG.REQUEST_TIMEOUT_MS,
        ),
      ),
    ]).catch((e) => []);

    if (buyerIds.length === 0) {
      if (boughtEl)
        boughtEl.innerHTML =
          '<div style="color:var(--text3);text-align:center;padding:2rem">Kamu belum membeli token apapun.</div>';
    } else {
      const items = await Promise.allSettled(
        buyerIds.map((id) => buildPortfolioBuyCard(Number(id))),
      );
      if (boughtEl)
        boughtEl.innerHTML = items
          .map((r) => (r.status === "fulfilled" ? r.value : ""))
          .join("");
    }
  } catch (e) {
    if (boughtEl)
      boughtEl.innerHTML = `<div style="color:var(--danger);text-align:center;padding:2rem">Error: ${e.message}</div>`;
  }

  const createdEl = document.getElementById("createdList");
  if (createdEl)
    createdEl.innerHTML =
      '<div style="color:var(--text3);text-align:center;padding:2rem">Memuat...</div>';

  try {
    const creatorIds = await Promise.race([
      contractToUse.getCreatorPresales(userAddress),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Timeout")),
          CONFIG.REQUEST_TIMEOUT_MS,
        ),
      ),
    ]).catch((e) => []);

    if (creatorIds.length === 0) {
      if (createdEl)
        createdEl.innerHTML =
          '<div style="color:var(--text3);text-align:center;padding:2rem">Kamu belum membuat presale. <button class="btn-primary" onclick="navigateTo(\'launch\')">Launch Sekarang</button></div>';
    } else {
      const items = await Promise.allSettled(
        creatorIds.map((id) => buildCreatorCard(Number(id))),
      );
      if (createdEl)
        createdEl.innerHTML = items
          .map((r) => (r.status === "fulfilled" ? r.value : ""))
          .join("");
    }
  } catch (e) {
    if (createdEl)
      createdEl.innerHTML = `<div style="color:var(--danger);text-align:center;padding:2rem">Error: ${e.message}</div>`;
  }
}

async function buildPortfolioBuyCard(id) {
  const contract = getReadOnlyContract();
  if (!contract) return "";
  const data = await contract.getPresale(id);
  const info = await contract.getBuyerInfo(id, userAddress);
  const cfg = data.config;
  const st = data.state;
  const ended =
    Number(st.status) !== 0 ||
    Number(cfg.endTime) <= Math.floor(Date.now() / 1000);
  const contributed = formatBNB(Number(ethers.formatEther(info.contributed)));
  const allocated = formatNum(Number(ethers.formatEther(info.tokensAllocated)));
  const claimed = info.claimed;
  const statusBadge = claimed
    ? '<span class="badge badge-success">Diklaim</span>'
    : ended
      ? '<span class="badge badge-warn">Siap Klaim</span>'
      : '<span class="badge badge-info">Aktif</span>';

  return `<div class="portfolio-card"><div class="portfolio-logo">🪙</div><div class="portfolio-info"><div class="portfolio-name">${escHtml(cfg.tokenName)} (${escHtml(cfg.tokenSymbol)})</div><div class="portfolio-meta">Dibeli: ${contributed} BNB | ${allocated} ${escHtml(cfg.tokenSymbol)}</div></div><div class="portfolio-actions">${statusBadge}${!claimed && ended && signer ? `<button class="btn-primary" onclick="claimTokens(${id})" style="font-size:0.8rem">Klaim</button>` : ""}<button class="btn-outline" onclick="openPresaleDetail(${id});navigateTo('detail')">Detail</button></div></div>`;
}

async function buildCreatorCard(id) {
  const contract = getReadOnlyContract();
  if (!contract) return "";
  const data = await contract.getPresale(id);
  const cfg = data.config;
  const st = data.state;
  const ended =
    Number(st.status) !== 0 ||
    Number(cfg.endTime) <= Math.floor(Date.now() / 1000);
  const raised = formatBNB(Number(ethers.formatEther(st.totalRaised)));
  const sold = formatNum(Number(ethers.formatEther(st.tokensSold)));
  const statusLabel = ended
    ? '<span class="badge badge-warn">Selesai</span>'
    : '<span class="badge badge-success">Aktif</span>';
  const lockDur = Number(cfg.lpLockDuration);
  const lockOpt = CONFIG.LP_LOCK_OPTIONS[lockDur] || CONFIG.LP_LOCK_OPTIONS[0];
  const lpBadge = `<span class="badge ${lockOpt.badgeClass}">${lockOpt.badge}</span>`;
  const trustedB = lockOpt.trusted
    ? `<span class="badge badge-trusted">⭐ Trusted</span>`
    : "";

  let lpStatusHtml = "";
  if (st.liquidityAdded) {
    try {
      const lpInfo = await contract.getLPLockInfo(id);
      if (lpInfo.isPermanent)
        lpStatusHtml = `<span style="color:var(--accent);font-size:0.75rem">🔥 Permanent</span>`;
      else if (lpInfo.isUnlocked && !lpInfo.withdrawn)
        lpStatusHtml = signer
          ? `<button class="btn-primary" onclick="withdrawLP(${id})" style="font-size:0.75rem">🔓 Tarik LP</button>`
          : `<span>🔓 LP siap ditarik</span>`;
      else if (lpInfo.isUnlocked && lpInfo.withdrawn)
        lpStatusHtml = `<span>LP sudah ditarik</span>`;
      else if (Number(lpInfo.unlockAt) > 0)
        lpStatusHtml = `<span>🔒 Unlock: ${new Date(Number(lpInfo.unlockAt) * 1000).toLocaleDateString()}</span>`;
    } catch (e) {}
  }

  const totalTokensNum = Number(ethers.formatEther(cfg.totalTokensForSale));
  const tokensSoldNum = Number(ethers.formatEther(st.tokensSold));
  const unsoldTokens = totalTokensNum - tokensSoldNum;

  const totalRaisedNum = Number(ethers.formatEther(st.totalRaised));
  const needsLiquidity = totalRaisedNum > 0;
  const liquidityAdded = st.liquidityAdded;
  const isFinalized = Number(st.status) === 1;

  const isZeroRaised = totalRaisedNum === 0 && !isFinalized && ended;

  const showFinalizeBtn = ended && !isFinalized && needsLiquidity && signer;

  const showFinalizeAndWithdrawBtn = isZeroRaised && unsoldTokens > 0 && signer;

  const showWithdrawUnsoldBtn =
    signer && isFinalized && liquidityAdded && unsoldTokens > 0;

  const showWithdrawDevBtn =
    ended && liquidityAdded && !st.feesWithdrawn && signer && needsLiquidity;

  const zeroRaisedWarning = isZeroRaised
    ? `<div class="portfolio-meta" style="color:var(--warn);font-size:0.7rem">⚠️ Presale tanpa dana. Klik tombol di bawah untuk finalisasi dan tarik token.</div>`
    : "";

  return `<div class="portfolio-card"><div class="portfolio-logo">🚀</div><div class="portfolio-info"><div class="portfolio-name">${escHtml(cfg.tokenName)} ${statusLabel}</div><div class="portfolio-meta">Raised: ${raised} BNB | Terjual: ${sold} ${escHtml(cfg.tokenSymbol)}</div><div class="portfolio-meta">${lpBadge} ${trustedB} ${lpStatusHtml}</div><div class="portfolio-meta" style="color:var(--text3);font-size:0.7rem">Token tersisa di kontrak: ${unsoldTokens.toFixed(2)} ${escHtml(cfg.tokenSymbol)}</div>${zeroRaisedWarning}</div><div class="portfolio-actions">
    ${showFinalizeBtn ? `<button class="btn-primary" onclick="finalizeAndLiquidity(${id})">⚡ Finalisasi & Add Likuiditas</button>` : ""}
    ${showFinalizeAndWithdrawBtn ? `<button class="btn-primary" onclick="finalizeAndWithdrawZeroRaised(${id})" style="background:rgba(255,140,0,0.1);border-color:var(--warn);">📤 Finalisasi & Tarik Token Sisa (${unsoldTokens.toFixed(2)} token)</button>` : ""}
    ${showWithdrawUnsoldBtn ? `<button class="btn-outline" onclick="withdrawUnsoldTokens(${id})" style="border-color:var(--warning);">📤 Tarik Token Sisa (${unsoldTokens.toFixed(2)} ${escHtml(cfg.tokenSymbol)})</button>` : ""}
    ${showWithdrawDevBtn ? `<button class="btn-primary" onclick="withdrawDevFunds(${id})">💰 Tarik Dana Developer</button>` : ""}
    <button class="btn-outline" onclick="openPresaleDetail(${id});navigateTo('detail')">Detail</button>
</div></div>`;
}

async function withdrawDevFunds(presaleId) {
  if (!signer) return;
  try {
    showToast("⏳ Menarik dana developer...", "info");
    const tx = await factoryContract.withdrawDevFunds(presaleId);
    await tx.wait();
    showToast("✅ Dana berhasil ditarik!", "success");
    loadPortfolio();
  } catch (e) {
    showToast(`❌ ${e.reason || e.message}`, "error");
  }
}

async function withdrawLP(presaleId) {
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }

  const data = await factoryContract.getPresale(presaleId);
  const cfg = data.config;
  const st = data.state;

  if (cfg.creator.toLowerCase() !== userAddress.toLowerCase()) {
    showToast("❌ Hanya pembuat presale yang bisa menarik LP token", "error");
    return;
  }

  if (!st.liquidityAdded) {
    showToast("❌ Likuiditas belum ditambahkan ke DEX", "error");
    return;
  }

  const lpInfo = await factoryContract.getLPLockInfo(presaleId);
  if (!lpInfo.isUnlocked && !lpInfo.isPermanent) {
    const unlockDate = new Date(
      Number(lpInfo.unlockAt) * 1000,
    ).toLocaleDateString("id-ID");
    showToast(`🔒 LP masih terkunci sampai ${unlockDate}`, "warn");
    return;
  }

  if (lpInfo.isPermanent) {
    showToast("🔥 LP Lock PERMANEN tidak bisa ditarik!", "error");
    return;
  }

  if (lpInfo.withdrawn) {
    showToast("✅ LP sudah pernah ditarik sebelumnya", "info");
    return;
  }

  const btn = document.activeElement;
  let originalText = "Tarik LP";
  if (btn && btn.textContent) {
    originalText = btn.textContent;
    btn.disabled = true;
  }

  try {
    showToast("⏳ Menarik LP token...", "info");
    const tx = await factoryContract.withdrawLP(presaleId);
    await tx.wait();
    showToast("✅ LP token berhasil ditarik!", "success");
    await loadPortfolio();
    if (currentPresaleId === presaleId) await openPresaleDetail(presaleId);
  } catch (e) {
    console.error("Withdraw LP error:", e);
    let errorMsg = e.reason || e.message;

    if (errorMsg.includes("LP still locked")) {
      errorMsg = "LP masih terkunci, belum waktunya ditarik.";
    } else if (errorMsg.includes("LP already withdrawn")) {
      errorMsg = "LP sudah pernah ditarik sebelumnya.";
    } else if (errorMsg.includes("Liquidity not added")) {
      errorMsg = "Likuiditas belum ditambahkan ke DEX.";
    } else if (errorMsg.includes("Not creator")) {
      errorMsg = "Hanya pembuat presale yang bisa menarik LP.";
    } else if (errorMsg.includes("Permanently locked")) {
      errorMsg = "LP Lock PERMANEN tidak bisa ditarik.";
    }

    showToast(`❌ ${errorMsg}`, "error");
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function withdrawUnsoldTokens(presaleId) {
  if (!factoryContract) {
    showToast("Kontrak tidak terhubung. Coba refresh halaman.", "error");
    return;
  }
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }

  const data = await factoryContract.getPresale(presaleId);
  const st = data.state;
  const totalRaisedNum = Number(ethers.formatEther(st.totalRaised || 0n));
  const liquidityAdded = st.liquidityAdded;
  const isFinalized = Number(st.status) === 1;

  if (totalRaisedNum > 0 && !liquidityAdded) {
    const doAnyway = confirm(
      `⚠️ PERINGATAN PENTING!\n\n` +
        `Presale ini memiliki dana terkumpul sebesar ${totalRaisedNum} BNB.\n\n` +
        `Anda HARUS melakukan Finalisasi & Add Likuiditas TERLEBIH DAHULU sebelum menarik token sisa.\n\n` +
        `Jika Anda menarik token sisa sekarang, likuiditas tidak akan bisa ditambahkan dan pembeli tidak bisa mengklaim token mereka!\n\n` +
        `Apakah Anda yakin ingin tetap menarik token sisa? (TIDAK DISARANKAN)`,
    );
    if (!doAnyway) return;
  }

  if (
    !confirm(
      "Tarik token yang tidak laku?\n\n" +
        "Pastikan:\n" +
        "✓ Presale sudah selesai\n" +
        "✓ Jika ada dana terkumpul, likuiditas sudah ditambahkan\n" +
        "Token akan dikirim ke wallet Anda.",
    )
  ) {
    return;
  }

  try {
    showToast("⏳ Menarik token sisa...", "info");
    const tx = await factoryContract.withdrawUnsoldTokens(presaleId);
    await tx.wait();
    showToast("✅ Token sisa berhasil ditarik!", "success");
    await loadPortfolio();
    if (currentPresaleId === presaleId) await openPresaleDetail(presaleId);
  } catch (error) {
    console.error("Error withdrawing unsold tokens:", error);
    let errorMessage = error.reason || error.message || "Gagal menarik token.";

    if (errorMessage.includes("Not ended")) {
      errorMessage = "Presale belum selesai. Tunggu hingga waktu berakhir.";
    } else if (errorMessage.includes("No unsold tokens")) {
      errorMessage = "Tidak ada token sisa. Semua token sudah terjual.";
    } else if (errorMessage.includes("Only creator")) {
      errorMessage = "Hanya pembuat presale yang bisa melakukan ini.";
    }

    showToast(`❌ ${errorMessage}`, "error");
  }
}

async function finalizeAndWithdrawZeroRaised(presaleId) {
  if (!signer) {
    showToast("Hubungkan wallet dulu!", "warn");
    return;
  }

  const btn = document.activeElement;
  let originalText = "Finalize & Withdraw";
  if (btn && btn.textContent) {
    originalText = btn.textContent;
    btn.disabled = true;
  }

  try {
    const data = await factoryContract.getPresale(presaleId);
    const cfg = data.config;
    const st = data.state;
    const totalRaisedNum = Number(ethers.formatEther(st.totalRaised || 0n));

    if (totalRaisedNum > 0) {
      showToast(
        "❌ Presale ini memiliki dana. Gunakan tombol Finalisasi biasa.",
        "error",
      );
      if (btn) btn.disabled = false;
      return;
    }

    const totalTokensNum = Number(ethers.formatEther(cfg.totalTokensForSale));
    const tokensSoldNum = Number(ethers.formatEther(st.tokensSold));
    const unsoldTokens = totalTokensNum - tokensSoldNum;

    if (unsoldTokens <= 0) {
      showToast("❌ Tidak ada token sisa untuk ditarik", "warn");
      if (btn) btn.disabled = false;
      return;
    }

    showToast("⏳ Memfinalisasi presale...", "info");
    const tx1 = await factoryContract.finalizePresale(presaleId);
    await tx1.wait();
    showToast("✅ Presale berhasil difinalisasi!", "success");

    showToast("⏳ Menarik token sisa...", "info");
    const tx2 = await factoryContract.withdrawUnsoldTokens(presaleId);
    await tx2.wait();

    showToast("✅ Token sisa berhasil ditarik!", "success");
    await loadPortfolio();
    if (currentPresaleId === presaleId) await openPresaleDetail(presaleId);
  } catch (e) {
    console.error("Finalize & withdraw error:", e);
    let errorMsg = e.reason || e.message;

    if (errorMsg.includes("Not ended")) {
      errorMsg = "Gagal finalisasi presale.";
    } else if (errorMsg.includes("No unsold tokens")) {
      errorMsg = "Tidak ada token sisa.";
    } else if (errorMsg.includes("user rejected")) {
      errorMsg = "Transaksi dibatalkan di wallet.";
    }

    showToast(`❌ ${errorMsg}`, "error");
  } finally {
    if (btn) btn.disabled = false;
  }
}

function switchPortfolioTab(tab, event) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  if (event && event.target) event.target.classList.add("active");
  document
    .querySelectorAll(".portfolio-panel")
    .forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(
    `portfolio${tab.charAt(0).toUpperCase() + tab.slice(1)}`,
  );
  if (target) target.classList.add("active");
}

async function loadAdminData() {
  if (!factoryContract || !userAddress) return;
  try {
    const fees = await factoryContract.platformFeesAccumulated();
    const count = await factoryContract.presaleCount();
    const feeVal = document.getElementById("adminFeeVal");
    const stats = document.getElementById("adminStats");
    if (feeVal)
      feeVal.textContent = `${formatBNB(Number(ethers.formatEther(fees)))} BNB`;
    if (stats)
      stats.innerHTML = `<div class="admin-stat-row"><span>Total Presale</span><span>${Number(count)}</span></div><div class="admin-stat-row"><span>Fee Terkumpul</span><span>${formatBNB(Number(ethers.formatEther(fees)))} BNB</span></div>`;

    const listEl = document.getElementById("adminPresaleList");
    if (!listEl) return;
    const items = [];
    for (let i = Number(count) - 1; i >= 0 && i >= Number(count) - 20; i--) {
      const d = await factoryContract.getPresale(i);
      items.push(
        `<div class="portfolio-card"><div class="portfolio-logo">🪙</div><div class="portfolio-info"><div class="portfolio-name">#${i} ${escHtml(d.config.tokenName)} (${escHtml(d.config.tokenSymbol)})</div><div class="portfolio-meta">Raised: ${formatBNB(Number(ethers.formatEther(d.state.totalRaised)))} BNB | Status: ${["Aktif", "Selesai", "Dibatalkan"][Number(d.state.status)]}</div></div><div class="portfolio-actions">${Number(d.state.status) === 0 ? `<button class="btn-danger" onclick="adminCancelPresale(${i})">Cancel</button>` : ""}<button class="btn-outline" onclick="openPresaleDetail(${i});navigateTo('detail')">Detail</button></div></div>`,
      );
    }
    listEl.innerHTML =
      items.join("") ||
      '<div style="text-align:center;padding:2rem">Tidak ada presale</div>';
  } catch (e) {
    console.error(e);
  }
}

async function withdrawPlatformFees() {
  if (!signer) return;
  try {
    showToast("⏳ Menarik fee platform...", "info");
    const tx = await factoryContract.withdrawAllPlatformFees(userAddress);
    await tx.wait();
    showToast("✅ Fee berhasil ditarik!", "success");
    loadAdminData();
  } catch (e) {
    showToast(`❌ ${e.reason || e.message}`, "error");
  }
}

async function pauseContract() {
  if (!signer) return;
  try {
    const tx = await factoryContract.pause();
    await tx.wait();
    showToast("⚠️ Kontrak di-pause", "warn");
  } catch (e) {
    showToast(`❌ ${e.reason || e.message}`, "error");
  }
}

async function unpauseContract() {
  if (!signer) return;
  try {
    const tx = await factoryContract.unpause();
    await tx.wait();
    showToast("✅ Kontrak aktif kembali", "success");
  } catch (e) {
    showToast(`❌ ${e.reason || e.message}`, "error");
  }
}

async function adminCancelPresale(id) {
  if (!signer) return;
  if (!confirm(`Yakin batalkan presale #${id}?`)) return;
  try {
    const tx = await factoryContract.cancelPresale(id);
    await tx.wait();
    showToast(`✅ Presale #${id} dibatalkan`, "success");
    loadAdminData();
  } catch (e) {
    showToast(`❌ ${e.reason || e.message}`, "error");
  }
}

function openModal() {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("buyModal");
  if (overlay) overlay.classList.add("open");
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("buyModal");
  if (overlay) overlay.classList.remove("open");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function animateHeroStats() {}

function showToast(msg, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  while (container.children.length >= (CONFIG.MAX_TOAST_COUNT || 5)) {
    container.removeChild(container.firstChild);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = msg;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 4000);
}

function formatBNB(num) {
  if (isNaN(num)) return "0";
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
  return num.toFixed(4);
}

function formatNum(num) {
  if (isNaN(num)) return "0";
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
  return num.toLocaleString("id-ID");
}

function escHtml(str) {
  if (!str) return "";
  return str.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el && val !== null) el.textContent = val;
}

function setLoading(id, loading, text) {
  const el = document.getElementById(id);
  if (!el) return;
  if (loading) {
    if (!buttonTexts.has(id)) buttonTexts.set(id, el.textContent);
    el.disabled = true;
    el.textContent = text;
  } else {
    el.disabled = false;
    const original = buttonTexts.get(id);
    if (original) {
      el.textContent = original;
      buttonTexts.delete(id);
    } else if (text) {
      el.textContent = text;
    }
  }
}

function loadMorePresales() {
  const grid = document.getElementById("presaleGrid");
  const empty = document.getElementById("emptyPresale");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (!grid || !allFilteredPresales.length) return;

  currentPage++;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage * ITEMS_PER_PAGE;
  const morePresales = allFilteredPresales.slice(start, end);

  if (morePresales.length === 0) {
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  if (loadMoreBtn) {
    loadMoreBtn.disabled = true;
    const span = loadMoreBtn.querySelector("span");
    if (span) span.textContent = "Loading...";
  }

  setTimeout(() => {
    morePresales.forEach((p) => {
      const card = createPresaleCard(p);
      grid.insertBefore(card, empty);
      startTimer(p.id, Number(p.config.endTime));
    });

    if (loadMoreBtn) {
      loadMoreBtn.disabled = false;
      if (allFilteredPresales.length > currentPage * ITEMS_PER_PAGE) {
        const remaining =
          allFilteredPresales.length - currentPage * ITEMS_PER_PAGE;
        const span = loadMoreBtn.querySelector("span");
        if (span) span.textContent = `Load More (${remaining} remaining)`;
      } else {
        loadMoreBtn.style.display = "none";
      }
    }

    showToast(`Memuat ${morePresales.length} presale lagi`, "info");
  }, 100);
}

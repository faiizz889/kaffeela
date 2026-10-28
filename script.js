/**
 * KAAFFEELLA — ROBUST PRELOADER, STICKY FOOTER ENGINE, TASTING TRAY & MENU UI
 */

const MENU_DATA = [
  {
    id: "sandwich",
    group: "sandwiches",
    title: "Sandwich",
    spanWide: false,
    items: [
      { name: "Bread Butter", weight: "160gm", price: 59 },
      { name: "Vegetable Sandwich", weight: "200gm", price: 89 },
      { name: "Cheese Sandwich", weight: "170gm", price: 99 },
      { name: "Cheese Chatni", weight: "170gm", price: 99 }
    ]
  },
  {
    id: "grilled-sandwich",
    group: "sandwiches",
    title: "Grilled Sandwich",
    spanWide: true,
    items: [
      { name: "Cheese Chilli", weight: "210gm", price: 129 },
      { name: "Cheese Chilli Corn", weight: "210gm", price: 129 },
      { name: "Mexican Cheese", weight: "210gm", price: 129 },
      { name: "Schezwan Cheese", weight: "210gm", price: 129 },
      { name: "Tandoori Paneer", weight: "210gm", price: 129 },
      { name: "Spicy Paneer", weight: "210gm", price: 129 },
      { name: "Cheese Burst", weight: "210gm", price: 159 }
    ]
  },
  {
    id: "club-sandwich",
    group: "sandwiches",
    title: "Club Sandwich",
    spanWide: false,
    items: [
      { name: "Vegetable Sandwich", weight: "350gm", price: 189 },
      { name: "Mexican Cheese", weight: "350gm", price: 189 },
      { name: "Tandoori Paneer", weight: "350gm", price: 189 },
      { name: "Ghughara Sandwich", weight: "350gm", price: 189 }
    ]
  },
  {
    id: "burgers",
    group: "burgers-fries",
    title: "Burgers",
    spanWide: false,
    items: [
      { name: "Classic Veg", weight: "", price: 79 },
      { name: "Mexican Burger", weight: "", price: 79 },
      { name: "Tandoori Burger", weight: "", price: 79 },
      { name: "Schezwan Burger", weight: "", price: 79 }
    ]
  },
  {
    id: "french-fries",
    group: "burgers-fries",
    title: "French Fries",
    spanWide: false,
    items: [
      { name: "Classic Salted", weight: "100gm", price: 99 },
      { name: "Masala", weight: "100gm", price: 99 },
      { name: "Indi Spicy", weight: "100gm", price: 109 },
      { name: "Peri Peri", weight: "100gm", price: 119 },
      { name: "Cheesy Fries", weight: "130gm", price: 149 },
      { name: "Cheese Ball", weight: "6 Pcs", price: 149 }
    ]
  },
  {
    id: "pizza",
    group: "pizzas-toasts",
    title: "Pizza",
    spanWide: false,
    addon: "Add Mozrella @ ₹30",
    items: [
      { name: "Margerita Pizza", weight: "200gm", price: 149 },
      { name: "Italian Pizza", weight: "210gm", price: 169 },
      { name: "Tandoori Paneer", weight: "230gm", price: 169 }
    ]
  },
  {
    id: "open-toast",
    group: "pizzas-toasts",
    title: "Open Toast",
    spanWide: false,
    items: [
      { name: "Cheese Chilli Toast", weight: "", price: 109 },
      { name: "Mexican Toast", weight: "", price: 109 },
      { name: "Paneer Chat Pata Toast", weight: "", price: 109 }
    ]
  },
  {
    id: "puff",
    group: "puffs-garlic",
    title: "Puff",
    spanWide: false,
    items: [
      { name: "Aloo Puff", weight: "100gm", price: 40 },
      { name: "Cheese Puff", weight: "125gm", price: 79 },
      { name: "Schezwan Puff", weight: "140gm", price: 79 },
      { name: "Mexican Puff", weight: "140gm", price: 79 },
      { name: "Tandoori Puff", weight: "140gm", price: 79 }
    ]
  },
  {
    id: "garlic-bread",
    group: "puffs-garlic",
    title: "Garlic Bread",
    spanWide: false,
    items: [
      { name: "Garlic Bread (3 pcs)", weight: "150gm", price: 109 },
      { name: "Cheese Garlic Bread (3 pcs)", weight: "150gm", price: 139 },
      { name: "Corn Cheese Garlic Bread", weight: "180gm", price: 149 },
      { name: "Loaded Cheese Garlic Bread", weight: "180gm", price: 169 }
    ]
  },
  {
    id: "bun-with-fun",
    group: "buns-bites",
    title: "Bun With Fun",
    spanWide: false,
    items: [
      { name: "Maska Bun", weight: "100gm", price: 50 },
      { name: "Jam Bun", weight: "120gm", price: 60 },
      { name: "Chocolate Bun", weight: "130gm", price: 70 },
      { name: "Spicy Bun with Cheese", weight: "120gm", price: 80 }
    ]
  },
  {
    id: "quick-bite",
    group: "buns-bites",
    title: "Quick Bite",
    spanWide: false,
    items: [
      { name: "Chocolate Cookies", weight: "2 Pcs", price: 30 },
      { name: "Salty Jeera Cookies", weight: "2 Pcs", price: 30 },
      { name: "Jeera Khari", weight: "4 Pcs", price: 40 },
      { name: "Cake Rusk Toast", weight: "4 Pcs", price: 40 },
      { name: "Masala Puri", weight: "1 Pkt", price: 30 },
      { name: "Methi Puri", weight: "1 Pkt", price: 30 },
      { name: "Farsi Puri", weight: "1 Pkt", price: 30 }
    ]
  },
  {
    id: "noodles-maggie",
    group: "noodles",
    title: "Noodles - Maggie",
    spanWide: false,
    items: [
      { name: "Plain Masala", weight: "200gm", price: 49 },
      { name: "Vegetable Masala", weight: "220gm", price: 69 },
      { name: "Creamy Italiano", weight: "220gm", price: 89 },
      { name: "Spicy Peri Peri", weight: "220gm", price: 89 }
    ]
  },
  {
    id: "garam-nasta",
    group: "garam-nasta",
    title: "गरम Nasta",
    spanWide: false,
    items: [
      { name: "Poha", weight: "", price: 35 },
      { name: "Vegetable Poha", weight: "", price: 45 },
      { name: "Peri Peri Poha", weight: "", price: 59 },
      { name: "Thepla", weight: "4 Pcs", price: 59 },
      { name: "Samosa", weight: "2 Pcs", price: 70 },
      { name: "Handvo", weight: "", price: 99 }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
 // 1. Split-Shutter Editorial Preloader Controller (index.html only)
  const preloader = document.getElementById("preloader");
  const preloaderFill = document.getElementById("preloaderFill");
  const preloaderCount = document.getElementById("preloaderCount");
  const preloaderStatus = document.getElementById("preloaderStatus");

  if (preloader) {
    const statusMessages = [
      "FIRING THE GRILL PRESS",
      "LAYERING FRESH CHUTNEY & DAIRY",
      "BREWING GOLDEN MOOD",
      "WELCOME TO KAAFFEELLA"
    ];

    let progress = 8;
    let isWindowLoaded = document.readyState === "complete";

    window.addEventListener("load", () => {
      isWindowLoaded = true;
    });

    function renderPreloaderProgress(val) {
      const clamped = Math.min(100, Math.max(0, val));
      if (preloaderFill) {
        preloaderFill.style.transform = `scaleX(${clamped / 100})`;
      }
      if (preloaderCount) {
        preloaderCount.textContent = clamped < 10 ? `0${clamped}` : `${clamped}`;
      }
      if (preloaderStatus) {
        const msgIndex = Math.min(
          statusMessages.length - 1,
          Math.floor((clamped / 100) * statusMessages.length)
        );
        preloaderStatus.textContent = statusMessages[msgIndex];
      }
    }

    renderPreloaderProgress(progress);

    const timer = setInterval(() => {
      const step = isWindowLoaded ? 16 : 9;
      progress += Math.floor(Math.random() * step) + 6;

      if (!isWindowLoaded && progress >= 92) {
        progress = 92;
      }

      if (progress >= 100) {
        progress = 100;
        renderPreloaderProgress(100);
        clearInterval(timer);

        setTimeout(() => {
          preloader.classList.add("preloader-hidden");
          setTimeout(() => {
            preloader.style.display = "none";
          }, 1100);
        }, 260);
      } else {
        renderPreloaderProgress(progress);
      }
    }, 65);
  }

  // 2. Dynamic Year
  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // 3. Responsive Sticky Reveal Footer Engine
  const pageSurface = document.querySelector(".page-surface");
  const stickyFooter = document.getElementById("stickyFooter");

  function syncStickyFooter() {
    if (!pageSurface || !stickyFooter) return;
    const footerHeight = stickyFooter.offsetHeight;
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop && footerHeight < window.innerHeight * 0.85) {
      stickyFooter.classList.add("sticky-enabled");
      pageSurface.style.marginBottom = `${footerHeight}px`;
    } else {
      stickyFooter.classList.remove("sticky-enabled");
      pageSurface.style.marginBottom = "0px";
    }
  }

  syncStickyFooter();
  window.addEventListener("resize", syncStickyFooter);

  // 4. Mobile Drawer Navigation
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.classList.toggle("open", isOpen);
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggle.classList.remove("open");
      });
    });
  }

  // 5. Interactive Radial Spotlight on Cards
  function bindCardSpotlight() {
    document.querySelectorAll(".menu-category-card, .spotlight-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    });
  }
  bindCardSpotlight();

  // 6. Subtle Magnetic Button Pull on Desktop
  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 1024) return;
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  // 7. Interactive Menu & Tasting Tray (index.html)
  const menuGrid = document.getElementById("menuGrid");
  const categoryTabs = document.getElementById("categoryTabs");
  const menuSearch = document.getElementById("menuSearch");
  const tastingTray = document.getElementById("tastingTray");
  const trayCount = document.getElementById("trayCount");
  const trayTotal = document.getElementById("trayTotal");
  const traySummary = document.getElementById("traySummary");
  const trayClear = document.getElementById("trayClear");

  let selectedTray = [];

  function updateTastingTray() {
    if (!tastingTray) return;
    if (selectedTray.length === 0) {
      tastingTray.classList.remove("active");
      return;
    }
    const total = selectedTray.reduce((sum, item) => sum + item.price, 0);
    trayCount.textContent = selectedTray.length;
    trayTotal.textContent = `₹${total} Estimated`;
    traySummary.textContent = selectedTray.map((i) => i.name).join(", ");
    tastingTray.classList.add("active");
  }

  if (trayClear) {
    trayClear.addEventListener("click", () => {
      selectedTray = [];
      document.querySelectorAll(".menu-item-row.selected").forEach((el) => {
        el.classList.remove("selected");
        const badge = el.querySelector(".item-add-indicator");
        if (badge) badge.textContent = "+";
      });
      updateTastingTray();
    });
  }

  if (menuGrid && categoryTabs && menuSearch) {
    let activeCategory = "all";
    let searchQuery = "";

    function renderMenu() {
      menuGrid.innerHTML = "";

      const filteredCategories = MENU_DATA.map((cat) => {
        const matchesGroup = activeCategory === "all" || cat.group === activeCategory;
        if (!matchesGroup) return null;

        const filteredItems = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredItems.length === 0) return null;
        return { ...cat, items: filteredItems };
      }).filter(Boolean);

      if (filteredCategories.length === 0) {
        menuGrid.innerHTML = `
          <div class="empty-state">
            <p>No dishes found matching "<strong>${searchQuery}</strong>". Try another keyword.</p>
          </div>
        `;
        syncStickyFooter();
        return;
      }

      filteredCategories.forEach((category, index) => {
        const card = document.createElement("article");
        card.className = `menu-category-card reveal-up ${
          category.spanWide && activeCategory === "all" && !searchQuery ? "span-2" : ""
        }`;
        card.style.transitionDelay = `${(index % 6) * 0.04}s`;

        const itemsHTML = category.items
          .map(
            (item) => `
            <li class="menu-item-row" data-name="${item.name}" data-price="${item.price}">
              <div class="item-info">
                <span class="item-add-indicator" aria-hidden="true">+</span>
                <span class="item-name">${item.name}</span>
                ${item.weight ? `<span class="item-weight">${item.weight}</span>` : ""}
              </div>
              <span class="item-leader" aria-hidden="true"></span>
              <span class="item-price">₹${item.price}</span>
            </li>
          `
          )
          .join("");

        const addonHTML = category.addon
          ? `<div class="addon-note">
               <span>✨ Customization</span>
               <span>${category.addon}</span>
             </div>`
          : "";

        card.innerHTML = `
          <div>
            <div class="card-header">
              <div class="card-title-wrap">
                <span class="category-pill-badge">${category.title}</span>
              </div>
              <span class="category-count">${category.items.length} items</span>
            </div>
            <ul class="menu-items-list">
              ${itemsHTML}
            </ul>
          </div>
          ${addonHTML}
        `;

        menuGrid.appendChild(card);

        requestAnimationFrame(() => {
          card.classList.add("visible");
        });
      });

      menuGrid.querySelectorAll(".menu-item-row").forEach((row) => {
        row.addEventListener("click", () => {
          const name = row.dataset.name;
          const price = Number(row.dataset.price);
          const indicator = row.querySelector(".item-add-indicator");

          const existingIndex = selectedTray.findIndex((i) => i.name === name);
          if (existingIndex > -1) {
            selectedTray.splice(existingIndex, 1);
            row.classList.remove("selected");
            if (indicator) indicator.textContent = "+";
          } else {
            selectedTray.push({ name, price });
            row.classList.add("selected");
            if (indicator) indicator.textContent = "✓";
          }
          updateTastingTray();
        });
      });

      bindCardSpotlight();
      setTimeout(syncStickyFooter, 100);
    }

    categoryTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;

      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

      activeCategory = btn.dataset.category;
      renderMenu();
    });

    menuSearch.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });

    renderMenu();
  }

  // 8. Contact Form Handler (contact.html)
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      setTimeout(() => {
        formStatus.textContent = "✓ Thank you! Your inquiry has been received by Kaaffeella.";
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Inquiry";
      }, 600);
    });
  }

  // 9. Scroll Reveal Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
});
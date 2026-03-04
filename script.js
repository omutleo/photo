// script.js - Основной функционал приложения

// ============================================
// STATE & DOM ELEMENTS
// ============================================
let currentCategory = null;
let allSuppliers = [];

// DOM Elements
let loginScreen = null;
let loginForm = null;
let loginError = null;
let appScreen = null;
let logoutBtn = null;
let globalSearch = null;
let dashboardView = null;
let categoryView = null;
let categoriesContainer = null;
let suppliersContainer = null;
let currentCategoryTitle = null;
let currentCategoryCount = null;
let backToDashboard = null;
let totalSuppliersEl = null;
let totalCategoriesEl = null;
let loginModal = null;
let loginFormModal = null;
let loginErrorModal = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    buildAllSuppliers();
    
    // Check which page we're on and initialize accordingly
    loginScreen = document.getElementById('login-screen');
    appScreen = document.getElementById('app-screen');
    loginModal = document.getElementById('login-modal');
    
    if (loginScreen) {
        // We're on login.html
        initLoginPage();
    } else if (appScreen) {
        // We're on index.html
        initAppPage();
    }
});

function buildAllSuppliers() {
    Object.entries(database).forEach(([category, suppliers]) => {
        suppliers.forEach(supplier => {
            allSuppliers.push({
                ...supplier,
                category: category
            });
        });
    });
}

// ============================================
// LOGIN PAGE INITIALIZATION
// ============================================
function initLoginPage() {
    loginForm = document.getElementById('login-form');
    loginError = document.getElementById('login-error');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleLogin();
            return false;
        });
    }
    
    // Check if already logged in
    checkAuth();
}

// ============================================
// APP PAGE INITIALIZATION
// ============================================
function initAppPage() {
    // Get DOM elements
    logoutBtn = document.getElementById('logout-btn');
    globalSearch = document.getElementById('global-search');
    dashboardView = document.getElementById('dashboard-view');
    categoryView = document.getElementById('category-view');
    categoriesContainer = document.getElementById('categories-container');
    suppliersContainer = document.getElementById('suppliers-container');
    currentCategoryTitle = document.getElementById('current-category-title');
    currentCategoryCount = document.getElementById('current-category-count');
    backToDashboard = document.getElementById('back-to-dashboard');
    totalSuppliersEl = document.getElementById('total-suppliers');
    totalCategoriesEl = document.getElementById('total-categories');
    loginModal = document.getElementById('login-modal');
    loginFormModal = document.getElementById('login-form-modal');
    loginErrorModal = document.getElementById('login-error-modal');
    
    // Check authentication
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        showApp();
    } else {
        showLoginModal();
    }
    
    // Setup event listeners
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    if (backToDashboard) {
        backToDashboard.addEventListener('click', showDashboard);
    }
    
    if (globalSearch) {
        globalSearch.addEventListener('input', handleSearch);
    }
    
    if (loginFormModal) {
        loginFormModal.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleLoginModal();
            return false;
        });
    }
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true' && loginScreen && appScreen) {
        window.location.href = 'index.html';
    }
}

function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    console.log('Login attempt:', username, password);
    
    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        if (loginError) {
            loginError.style.display = 'block';
            setTimeout(() => {
                loginError.style.display = 'none';
            }, 3000);
        }
    }
}

function handleLoginModal() {
    const username = document.getElementById('username-modal').value.trim();
    const password = document.getElementById('password-modal').value.trim();
    
    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('isLoggedIn', 'true');
        if (loginModal) {
            loginModal.classList.add('hidden');
        }
        showApp();
    } else {
        if (loginErrorModal) {
            loginErrorModal.style.display = 'block';
            setTimeout(() => {
                loginErrorModal.style.display = 'none';
            }, 3000);
        }
    }
}

function handleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

function showLoginModal() {
    if (loginModal) {
        loginModal.classList.remove('hidden');
        if (appScreen) {
            appScreen.classList.add('hidden');
        }
    }
}

// ============================================
// APP DISPLAY FUNCTIONS
// ============================================
function showApp() {
    if (loginModal) {
        loginModal.classList.add('hidden');
    }
    if (appScreen) {
        appScreen.classList.remove('hidden');
    }
    
    // Update stats
    if (totalSuppliersEl) {
        totalSuppliersEl.textContent = allSuppliers.length;
    }
    if (totalCategoriesEl) {
        totalCategoriesEl.textContent = Object.keys(database).length;
    }
    
    // Render categories
    renderCategories();
}

function showDashboard() {
    currentCategory = null;
    if (dashboardView) {
        dashboardView.classList.remove('hidden');
    }
    if (categoryView) {
        categoryView.classList.add('hidden');
    }
    if (globalSearch) {
        globalSearch.value = '';
    }
    renderCategories();
}

function showCategory(categoryName) {
    currentCategory = categoryName;
    if (currentCategoryTitle) {
        currentCategoryTitle.textContent = categoryName;
    }
    const suppliers = database[categoryName];
    if (currentCategoryCount) {
        currentCategoryCount.textContent = `${suppliers.length} поставщиков`;
    }
    
    if (dashboardView) {
        dashboardView.classList.add('hidden');
    }
    if (categoryView) {
        categoryView.classList.remove('hidden');
    }
    
    renderSuppliers(suppliers);
}

// ============================================
// RENDERING FUNCTIONS
// ============================================
function renderCategories() {
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = '';
    
    Object.entries(database).forEach(([category, suppliers]) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <i class="fas ${categoryIcons[category] || 'fa-folder'} category-icon"></i>
            <div class="category-title">${category}</div>
            <div class="category-count">${suppliers.length} поставщиков</div>
        `;
        card.addEventListener('click', () => showCategory(category));
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showCategory(category);
            }
        });
        categoriesContainer.appendChild(card);
    });
}

function renderSuppliers(suppliers) {
    if (!suppliersContainer) return;
    
    suppliersContainer.innerHTML = '';
    
    if (!suppliers || suppliers.length === 0) {
        suppliersContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Поставщики не найдены</p>
            </div>
        `;
        return;
    }

    suppliers.forEach((supplier, index) => {
        const item = document.createElement('div');
        item.className = 'supplier-item';
        item.style.animationDelay = `${index * 0.05}s`;
        
        let detailsHTML = '';
        
        if (supplier.contact) {
            detailsHTML += `
                <div class="detail-item">
                    <i class="fas fa-user detail-icon"></i>
                    <div>
                        <div class="detail-label">Контакт</div>
                        <div class="detail-text">${supplier.contact}</div>
                    </div>
                </div>
            `;
        }
        
        if (supplier.email) {
            detailsHTML += `
                <div class="detail-item">
                    <i class="fas fa-envelope detail-icon"></i>
                    <div>
                        <div class="detail-label">Email</div>
                        <div class="detail-text">${supplier.email}</div>
                    </div>
                </div>
            `;
        }
        
        if (supplier.products) {
            detailsHTML += `
                <div class="detail-item">
                    <i class="fas fa-box detail-icon"></i>
                    <div>
                        <div class="detail-label">Продукция</div>
                        <div class="detail-text">${supplier.products}</div>
                    </div>
                </div>
            `;
        }
        
        if (supplier.payment) {
            detailsHTML += `
                <div class="detail-item">
                    <i class="fas fa-credit-card detail-icon"></i>
                    <div>
                        <div class="detail-label">Условия оплаты</div>
                        <div class="detail-text">${supplier.payment}</div>
                    </div>
                </div>
            `;
        }
        
        const contactBtn = supplier.email ? 
            `<a href="mailto:${supplier.email}" class="contact-btn"><i class="fas fa-envelope"></i> Написать</a>` : '';
        
        item.innerHTML = `
            <div class="supplier-name">${supplier.name}</div>
            <div class="supplier-details">
                ${detailsHTML}
            </div>
            ${contactBtn}
        `;
        
        suppliersContainer.appendChild(item);
    });
}

// ============================================
// SEARCH FUNCTION
// ============================================
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
        if (currentCategory) {
            renderSuppliers(database[currentCategory]);
        } else {
            renderCategories();
        }
        return;
    }

    if (currentCategory) {
        const filtered = database[currentCategory].filter(supplier => 
            supplier.name.toLowerCase().includes(query) ||
            (supplier.contact && supplier.contact.toLowerCase().includes(query)) ||
            (supplier.email && supplier.email.toLowerCase().includes(query)) ||
            (supplier.products && supplier.products.toLowerCase().includes(query))
        );
        renderSuppliers(filtered);
    } else {
        const filtered = allSuppliers.filter(supplier => 
            supplier.name.toLowerCase().includes(query) ||
            (supplier.contact && supplier.contact.toLowerCase().includes(query)) ||
            (supplier.email && supplier.email.toLowerCase().includes(query)) ||
            (supplier.products && supplier.products.toLowerCase().includes(query)) ||
            supplier.category.toLowerCase().includes(query)
        );
        
        if (currentCategoryTitle) {
            currentCategoryTitle.textContent = `Результаты поиска: "${query}"`;
        }
        if (currentCategoryCount) {
            currentCategoryCount.textContent = `${filtered.length} найдено`;
        }
        if (dashboardView) {
            dashboardView.classList.add('hidden');
        }
        if (categoryView) {
            categoryView.classList.remove('hidden');
        }
        renderSuppliers(filtered);
    }
}

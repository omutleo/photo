let currentCategory = null;
let allSuppliers = [];

// Login page elements
const loginScreen = document.getElementById('login-screen');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

// App page elements
const appScreen = document.getElementById('app-screen');
const logoutBtn = document.getElementById('logout-btn');
const globalSearch = document.getElementById('global-search');
const dashboardView = document.getElementById('dashboard-view');
const categoryView = document.getElementById('category-view');
const categoriesContainer = document.getElementById('categories-container');
const suppliersContainer = document.getElementById('suppliers-container');
const currentCategoryTitle = document.getElementById('current-category-title');
const currentCategoryCount = document.getElementById('current-category-count');
const backToDashboard = document.getElementById('back-to-dashboard');
const totalSuppliersEl = document.getElementById('total-suppliers');
const totalCategoriesEl = document.getElementById('total-categories');

// ============================================
// INITIALIZATION
// ============================================
function init() {
    // Build all suppliers array for global search
    Object.entries(database).forEach(([category, suppliers]) => {
        suppliers.forEach(supplier => {
            allSuppliers.push({
                ...supplier,
                category: category
            });
        });
    });

    // Update stats
    totalSuppliersEl.textContent = allSuppliers.length;
    totalCategoriesEl.textContent = Object.keys(database).length;

    // Check if user is already logged in
    checkAuth();

    // Event listeners
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    if (backToDashboard) {
        backToDashboard.addEventListener('click', showDashboard);
    }
    if (globalSearch) {
        globalSearch.addEventListener('input', handleSearch);
    }
}

// ============================================
// AUTHENTICATION
// ============================================
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true' && loginScreen && appScreen) {
        loginScreen.classList.add('hidden');
        appScreen.classList.remove('hidden');
        renderCategories();
    } else if (loginScreen && appScreen) {
        appScreen.classList.add('hidden');
        loginScreen.classList.remove('hidden');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication (in production, use server-side auth)
    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('isLoggedIn', 'true');
        loginScreen.classList.add('hidden');
        appScreen.classList.remove('hidden');
        renderCategories();
    } else {
        loginError.style.display = 'block';
        setTimeout(() => {
            loginError.style.display = 'none';
        }, 3000);
    }
}

function handleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    appScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    loginError.style.display = 'none';
    globalSearch.value = '';
    currentCategory = null;
}

// ============================================
// NAVIGATION
// ============================================
function showDashboard() {
    currentCategory = null;
    dashboardView.classList.remove('hidden');
    categoryView.classList.add('hidden');
    globalSearch.value = '';
    renderCategories();
}

function showCategory(categoryName) {
    currentCategory = categoryName;
    currentCategoryTitle.textContent = categoryName;
    const suppliers = database[categoryName];
    currentCategoryCount.textContent = `${suppliers.length} поставщиков`;
    
    dashboardView.classList.add('hidden');
    categoryView.classList.remove('hidden');
    
    renderSuppliers(suppliers);
}

// ============================================
// RENDERING
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
    
    if (suppliers.length === 0) {
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
        item.innerHTML = `
            <div class="supplier-name">${supplier.name}</div>
            <div class="supplier-details">
                ${supplier.contact ? `
                <div class="detail-item">
                    <i class="fas fa-user detail-icon"></i>
                    <div>
                        <div class="detail-label">Контакт</div>
                        <div class="detail-text">${supplier.contact}</div>
                    </div>
                </div>
                ` : ''}
                ${supplier.email ? `
                <div class="detail-item">
                    <i class="fas fa-envelope detail-icon"></i>
                    <div>
                        <div class="detail-label">Email</div>
                        <div class="detail-text">${supplier.email}</div>
                    </div>
                </div>
                ` : ''}
                ${supplier.products ? `
                <div class="detail-item">
                    <i class="fas fa-box detail-icon"></i>
                    <div>
                        <div class="detail-label">Продукция</div>
                        <div class="detail-text">${supplier.products}</div>
                    </div>
                </div>
                ` : ''}
                ${supplier.payment ? `
                <div class="detail-item">
                    <i class="fas fa-credit-card detail-icon"></i>
                    <div>
                        <div class="detail-label">Условия оплаты</div>
                        <div class="detail-text">${supplier.payment}</div>
                    </div>
                </div>
                ` : ''}
            </div>
            ${supplier.email ? `<a href="mailto:${supplier.email}" class="contact-btn"><i class="fas fa-envelope"></i> Написать</a>` : ''}
        `;
        suppliersContainer.appendChild(item);
    });
}

// ============================================
// SEARCH
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
        // Search within current category
        const filtered = database[currentCategory].filter(supplier => 
            supplier.name.toLowerCase().includes(query) ||
            (supplier.contact && supplier.contact.toLowerCase().includes(query)) ||
            (supplier.email && supplier.email.toLowerCase().includes(query)) ||
            (supplier.products && supplier.products.toLowerCase().includes(query))
        );
        renderSuppliers(filtered);
    } else {
        // Global search - show results in category view
        const filtered = allSuppliers.filter(supplier => 
            supplier.name.toLowerCase().includes(query) ||
            (supplier.contact && supplier.contact.toLowerCase().includes(query)) ||
            (supplier.email && supplier.email.toLowerCase().includes(query)) ||
            (supplier.products && supplier.products.toLowerCase().includes(query)) ||
            supplier.category.toLowerCase().includes(query)
        );
        
        currentCategoryTitle.textContent = `Результаты поиска: "${query}"`;
        currentCategoryCount.textContent = `${filtered.length} найдено`;
        dashboardView.classList.add('hidden');
        categoryView.classList.remove('hidden');
        renderSuppliers(filtered);
    }
}

// ============================================
// START APP
// ============================================
document.addEventListener('DOMContentLoaded', init);
```

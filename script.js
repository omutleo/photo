// script.js - Основной функционал приложения с добавлением поставщиков

// ============================================
// STATE & DOM ELEMENTS
// ============================================
let currentCategory = null;
let database = [];
let userSuppliers = []; // Пользовательские добавленные записи

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
let addSupplierBtn = null;
let addSupplierModal = null;
let addSupplierForm = null;
let modalClose = null;
let modalCancel = null;
let exportBtn = null;
let importBtn = null;
let importModal = null;
let importConfirm = null;
let importCancel = null;
let notification = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load database from localStorage or use default
    loadDatabase();
    
    // Check which page we're on and initialize accordingly
    loginScreen = document.getElementById('login-screen');
    appScreen = document.getElementById('app-screen');
    loginModal = document.getElementById('login-modal');
    
    if (loginScreen) {
        initLoginPage();
    } else if (appScreen) {
        initAppPage();
    }
});

function loadDatabase() {
    // Load default database
    database = JSON.parse(JSON.stringify(defaultDatabase));
    
    // Load user-added suppliers from localStorage
    const storedUserSuppliers = localStorage.getItem('htec_user_suppliers');
    if (storedUserSuppliers) {
        try {
            userSuppliers = JSON.parse(storedUserSuppliers);
            database = database.concat(userSuppliers);
        } catch (e) {
            console.error('Error loading user suppliers:', e);
            userSuppliers = [];
        }
    }
}

function saveUserSuppliers() {
    localStorage.setItem('htec_user_suppliers', JSON.stringify(userSuppliers));
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
    addSupplierBtn = document.getElementById('add-supplier-btn');
    addSupplierModal = document.getElementById('add-supplier-modal');
    addSupplierForm = document.getElementById('add-supplier-form');
    modalClose = document.getElementById('modal-close');
    modalCancel = document.getElementById('modal-cancel');
    exportBtn = document.getElementById('export-btn');
    importBtn = document.getElementById('import-btn');
    importModal = document.getElementById('import-modal');
    importConfirm = document.getElementById('import-confirm');
    importCancel = document.getElementById('import-cancel');
    notification = document.getElementById('notification');
    
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
    
    if (addSupplierBtn) {
        addSupplierBtn.addEventListener('click', openAddSupplierModal);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeAddSupplierModal);
    }
    
    if (modalCancel) {
        modalCancel.addEventListener('click', closeAddSupplierModal);
    }
    
    if (addSupplierForm) {
        addSupplierForm.addEventListener('submit', handleAddSupplier);
    }
    
    if (exportBtn) {
        exportBtn.addEventListener('click', exportDatabase);
    }
    
    if (importBtn) {
        importBtn.addEventListener('click', openImportModal);
    }
    
    if (importConfirm) {
        importConfirm.addEventListener('click', confirmImport);
    }
    
    if (importCancel) {
        importCancel.addEventListener('click', closeImportModal);
    }
    
    // Close modal on outside click
    if (addSupplierModal) {
        addSupplierModal.addEventListener('click', function(e) {
            if (e.target === addSupplierModal) {
                closeAddSupplierModal();
            }
        });
    }
    
    if (importModal) {
        importModal.addEventListener('click', function(e) {
            if (e.target === importModal) {
                closeImportModal();
            }
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
    
    updateStats();
    renderCategories();
}

function updateStats() {
    if (totalSuppliersEl) {
        totalSuppliersEl.textContent = database.length;
    }
    if (totalCategoriesEl) {
        const categories = getUniqueCategories();
        totalCategoriesEl.textContent = categories.length;
    }
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
    
    updateStats();
    renderCategories();
}

function showCategory(categoryName) {
    currentCategory = categoryName;
    if (currentCategoryTitle) {
        currentCategoryTitle.textContent = categoryName;
    }
    const suppliers = getSuppliersByCategory(categoryName);
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
// ADD SUPPLIER MODAL FUNCTIONS
// ============================================
function openAddSupplierModal() {
    if (addSupplierModal) {
        addSupplierModal.classList.remove('hidden');
    }
    if (addSupplierForm) {
        addSupplierForm.reset();
    }
}

function closeAddSupplierModal() {
    if (addSupplierModal) {
        addSupplierModal.classList.add('hidden');
    }
    if (addSupplierForm) {
        addSupplierForm.reset();
    }
}

function handleAddSupplier(e) {
    e.preventDefault();
    
    const name = document.getElementById('supplier-name').value.trim();
    const equipment = document.getElementById('supplier-equipment').value;
    const contact = document.getElementById('supplier-contact').value.trim();
    const email = document.getElementById('supplier-email').value.trim();
    const comments = document.getElementById('supplier-comments').value.trim();
    
    if (!name || !equipment) {
        showNotification('Заполните обязательные поля!', 'error');
        return;
    }
    
    const newSupplier = {
        name: name,
        equipment: equipment,
        contact: contact,
        email: email,
        comments: comments,
        dateAdded: new Date().toISOString()
    };
    
    // Add to user suppliers
    userSuppliers.push(newSupplier);
    
    // Add to main database
    database.push(newSupplier);
    
    // Save to localStorage
    saveUserSuppliers();
    
    // Show success notification
    showNotification('Поставщик успешно добавлен!', 'success');
    
    // Close modal
    closeAddSupplierModal();
    
    // Refresh view
    if (currentCategory) {
        showCategory(currentCategory);
    } else {
        updateStats();
        renderCategories();
    }
}

// ============================================
// EXPORT/IMPORT FUNCTIONS
// ============================================
function exportDatabase() {
    const dataStr = JSON.stringify(database, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `htec_database_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    
    showNotification('База данных экспортирована!', 'success');
}

function openImportModal() {
    if (importModal) {
        importModal.classList.remove('hidden');
    }
}

function closeImportModal() {
    if (importModal) {
        importModal.classList.add('hidden');
    }
    const fileInput = document.getElementById('import-file');
    if (fileInput) {
        fileInput.value = '';
    }
}

function confirmImport() {
    const fileInput = document.getElementById('import-file');
    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
        showNotification('Выберите файл для импорта!', 'error');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (!Array.isArray(importedData)) {
                throw new Error('Неверный формат файла');
            }
            
            // Validate data structure
            for (let item of importedData) {
                if (!item.name || !item.equipment) {
                    throw new Error('Неверный формат данных');
                }
            }
            
            // Replace database
            database = importedData;
            userSuppliers = [];
            
            // Save to localStorage
            saveUserSuppliers();
            
            showNotification('База данных успешно импортирована!', 'success');
            closeImportModal();
            updateStats();
            renderCategories();
            
        } catch (error) {
            showNotification('Ошибка импорта: ' + error.message, 'error');
        }
    };
    
    reader.onerror = function() {
        showNotification('Ошибка чтения файла!', 'error');
    };
    
    reader.readAsText(file);
}

// ============================================
// NOTIFICATION FUNCTION
// ============================================
function showNotification(message, type = 'success') {
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = 'notification ' + type;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// ============================================
// DATA FUNCTIONS
// ============================================
function getUniqueCategories() {
    const categories = [...new Set(database.map(item => item.equipment))];
    return categories.sort();
}

function getSuppliersByCategory(category) {
    return database.filter(item => item.equipment === category);
}

function searchSuppliers(query) {
    const lowerQuery = query.toLowerCase();
    return database.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.equipment.toLowerCase().includes(lowerQuery) ||
        (item.contact && item.contact.toLowerCase().includes(lowerQuery)) ||
        (item.email && item.email.toLowerCase().includes(lowerQuery)) ||
        (item.comments && item.comments.toLowerCase().includes(lowerQuery))
    );
}

// ============================================
// RENDERING FUNCTIONS
// ============================================
function renderCategories() {
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = '';
    
    const categories = getUniqueCategories();
    
    categories.forEach(category => {
        const suppliers = getSuppliersByCategory(category);
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
        
        // Mark new items
        if (supplier.dateAdded) {
            const dateAdded = new Date(supplier.dateAdded);
            const now = new Date();
            const hoursDiff = (now - dateAdded) / (1000 * 60 * 60);
            if (hoursDiff < 24) {
                item.classList.add('new-item');
            }
        }
        
        item.style.animationDelay = `${index * 0.05}s`;
        
        let detailsHTML = '';
        
        if (supplier.contact) {
            detailsHTML += `
                <div class="detail-item">
                    <i class="fas fa-user detail-icon"></i>
                    <div>
                        <div class="detail-label">Контактное лицо</div>
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
                        <div class="detail-label">Почта</div>
                        <div class="detail-text">${supplier.email}</div>
                    </div>
                </div>
            `;
        }
        
        if (supplier.equipment) {
            detailsHTML += `
                <div class="detail-item">
                    <i class="fas fa-cogs detail-icon"></i>
                    <div>
                        <div class="detail-label">Оборудование</div>
                        <div class="detail-text">${supplier.equipment}</div>
                    </div>
                </div>
            `;
        }
        
        const copyBtn = supplier.email ? 
            `<button class="copy-email-btn" data-email="${supplier.email}" title="Копировать email">
                <i class="fas fa-copy"></i> Копировать
            </button>` : '';
        
        item.innerHTML = `
            <div class="supplier-name">${supplier.name}</div>
            <div class="supplier-details">
                ${detailsHTML}
            </div>
            ${copyBtn}
        `;
        
        suppliersContainer.appendChild(item);
    });
    
    // Add event listeners to copy buttons
    document.querySelectorAll('.copy-email-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const email = this.getAttribute('data-email');
            copyToClipboard(email, this);
        });
    });
}

// ============================================
// COPY TO CLIPBOARD FUNCTION
// ============================================
function copyToClipboard(text, button) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyNotification(button, 'Email скопирован!');
        }).catch(err => {
            fallbackCopyToClipboard(text, button);
        });
    } else {
        fallbackCopyToClipboard(text, button);
    }
}

function fallbackCopyToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyNotification(button, 'Email скопирован!');
    } catch (err) {
        showCopyNotification(button, 'Ошибка копирования', true);
    }
    
    document.body.removeChild(textArea);
}

function showCopyNotification(button, message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification' + (isError ? ' error' : '');
    notification.textContent = message;
    
    const rect = button.getBoundingClientRect();
    notification.style.position = 'fixed';
    notification.style.left = rect.left + 'px';
    notification.style.top = (rect.bottom + 10) + 'px';
    notification.style.zIndex = '10000';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// ============================================
// SEARCH FUNCTION
// ============================================
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
        if (currentCategory) {
            const suppliers = getSuppliersByCategory(currentCategory);
            renderSuppliers(suppliers);
        } else {
            renderCategories();
        }
        return;
    }

    const filtered = searchSuppliers(query);
    
    if (currentCategory) {
        const categoryFiltered = filtered.filter(item => item.equipment === currentCategory);
        renderSuppliers(categoryFiltered);
    } else {
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

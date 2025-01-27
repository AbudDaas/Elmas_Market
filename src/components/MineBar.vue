<template>
    <div>
        
        <nav :class="{'close': isSidebarClosed}" id="sidebar">
            <ul>
                <li>
                    <span class="logo">MyShop.com</span>
                    <button @click="toggleSidebar" id="toggle-btn" :class="{'rotate': isSidebarClosed}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>
                    </button>
                </li>
                <li class="active">
                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/></svg>
                    <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/></svg>
                    <span>campaigns</span>
                    </a>
                </li>
                <li>
                    <button @click="toggleSubMenu('freshfood')" :class="{ rotate: activeSubMenu === 'freshfood' }" class="dropdown-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M640-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170T640-80Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-480 0q-33 0-56.5-23.5T80-240v-304q0-8 1.5-16t4.5-16l80-184h-6q-17 0-28.5-11.5T120-800v-40q0-17 11.5-28.5T160-880h280q17 0 28.5 11.5T480-840v40q0 17-11.5 28.5T440-760h-6l66 152q-19 10-36 21t-32 25l-84-198h-96l-92 216v304h170q5 21 13.5 41.5T364-160H160Zm480-440q-42 0-71-29t-29-71q0-42 29-71t71-29v200q0-42 29-71t71-29q42 0 71 29t29 71H640Z"/></svg>
                    <span>freshfood</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
                    </button>
                    <ul v-show="activeSubMenu === 'freshfood'" class="sub-menu show">
                        <div>
                            <li><a href="#">fruits</a></li>
                            <li><a href="#">vegetables</a></li>
                            <li><a href="#">fresh fruit juice</a></li>
                        </div>
                    </ul>
                </li>
                <li>
                    <button @click="toggleSubMenu('Food')" :class="{ rotate: activeSubMenu === 'Food' }" class="dropdown-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z"/></svg>
                        <span>Food</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
                    </button>
                    <ul v-show="activeSubMenu === 'Food'" class="sub-menu show">
                        <div>
                            <li><a href="#">canned food</a></li>
                            <li><a href="#">local food</a></li>
                            <li><a href="#">fast food</a></li>
                        </div>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M482-40 294-400q-71 3-122.5-41T120-560q0-51 29.5-92t74.5-58q18-91 89.5-150.5T480-920q95 0 166.5 59.5T736-710q45 17 74.5 58t29.5 92q0 75-53 119t-119 41L482-40ZM280-480q15 0 29.5-5t26.5-17l22-22 26 16q21 14 45.5 21t50.5 7q26 0 50.5-7t45.5-21l26-16 22 22q12 12 26.5 17t29.5 5q33 0 56.5-23.5T760-560q0-30-19-52.5T692-640l-30-4-2-32q-5-69-57-116.5T480-840q-71 0-123 47.5T300-676l-2 32-30 6q-30 6-49 27t-19 51q0 33 23.5 56.5T280-480Zm202 266 108-210q-24 12-52 18t-58 6q-27 0-54.5-6T372-424l110 210Zm-2-446Z"/></svg>
                    <span>snacks</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm286-180q0-39 27.5-66.5T700-394q39 0 66.5 27.5T794-300q0 39-27.5 66.5T700-206q-39 0-66.5-27.5T606-300Zm234-340q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-140 40q-26 0-43 17t-17 43q0 26 17 43t43 17q26 0 43-17t17-43q0-26-17-43t-43-17Zm0 440q59 0 99.5-40.5T840-300q0-59-40.5-99.5T700-440q-59 0-99.5 40.5T560-300q0 59 40.5 99.5T700-160Z"/></svg>
                    <span>home supplies</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    
  </template>
  
<script>
export default {
    name:"MineBar",
    data() {
    return {
      isSidebarClosed: true,
      activeSubMenu: null,
    };
  },
    methods: {
        toggleSidebar() {
        this.isSidebarClosed = !this.isSidebarClosed;
        },
        toggleSubMenu(menuName) {
        if (this.activeSubMenu === menuName) {
            // Close the active submenu
            this.activeSubMenu = null;
        } else {
            // Open the selected submenu
            this.activeSubMenu = menuName;
        }

        // If the sidebar is closed, automatically open it when toggling submenus
        if (this.isSidebarClosed) {
            this.isSidebarClosed = false;
        }
        },
        closeAllSubMenus() {
        this.activeSubMenu = null;
        },
    },
};
</script>

<style>
@import "../style/minebar.css"
</style>
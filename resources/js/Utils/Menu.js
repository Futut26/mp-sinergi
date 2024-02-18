import { router } from "@inertiajs/react";


const MenuDashboard = [
    {
        role: "staff",
        menu: [
            {
                name: "Kelola Properti",
                url: "/manage_property",
                icon: "fas fa-home",
            },
            {
                name: "Pengaturan Akun",
                url: "/profile",
                icon: "fas fa-user-circle",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],

    },
    {
        role: "marketing",
        menu: [
            {
                name: "Manage Customer Order" ,
                url: "/admin/article",
                icon: "fas fa-users",
            },
            {
                name: "Pengaturan Akun",
                url: "/profile",
                icon: "fas fa-user-circle",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],
    },
    {
        role: "pimpinan",
        menu: [

            {
                name: "Sales Report",
                url: "/admin",
                icon: "fas fa-chart-line",
            },
            {
                name: "Pengaturan Akun",
                url: "/profile",
                icon: "fas fa-user-circle",
            },
            {
                name: "Pengaturan Akun",
                url: "/profile",
                icon: "fas fa-user-circle",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],
    },
    {
        role: "konsumen",
        menu: [
            {
                name: "Pengaturan Akun",
                url: "/profile",
                icon: "fas fa-user-circle",
            },
            {
                name: "Infomasi Pribadi",
                url: "/personal-data",
                icon: "fas fa-user-lock",
            },
            {
                name: "Transaksi",
                url: "/",
                icon: "fas fa-money-check-alt",
            },
            {
                name: "Back to Front Page",
                url: "/",
                icon: "fas fa-pager",
            }
        ],
    }
];

export default MenuDashboard;

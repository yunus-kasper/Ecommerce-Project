import {
  BellIcon,
  Camera,
  ChartNoAxesColumn,
  ChevronDown,
  LayoutDashboard,
  MessageSquareIcon,
  MoonIcon,
  Search,
} from "lucide-react";

const links = [
  { icon: MoonIcon },
  { icon: MessageSquareIcon },
  { icon: BellIcon },
];

const dashboard = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Customers ",
    path: "/customers",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    path: "/products",
    icon: LayoutDashboard,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    path: "/users",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: LayoutDashboard,
  },
  {
    name: "Sales",
    path: "/sales",
    icon: LayoutDashboard,
  },
  {
    name: "Stocks",
    path: "/stocks",
    icon: LayoutDashboard,
  },
];

const orderSummary = [
  {
    price: 254,
    stats: "Total Revenue",
    icon: LayoutDashboard,
  },
  {
    price: 254,
    stats: "Total Orders",
    icon: LayoutDashboard,
  },
  {
    price: 254,
    stats: "Completed Orders",
    icon: LayoutDashboard,
  },
  {
    price: 254,
    stats: "Pending Orders",
    icon: LayoutDashboard,
  },
  {
    price: 254,
    stats: "Cancelled/Returned Orders",
    icon: LayoutDashboard,
  },
];

import React from "react";

const salesData = [
  {
    category: "Spiritual & Religious",
    totalOrders: 230,
    revenue: "₹5,600K",
    mostSold: "Adiyogi Shiva",
  },
  {
    category: "Nature & Wildlife",
    totalOrders: 180,
    revenue: "₹4,200K",
    mostSold: "Tree of Life",
  },
  {
    category: "Geometric & Abstract",
    totalOrders: 90,
    revenue: "₹2,300K",
    mostSold: "Om Symbol",
  },
  {
    category: "Typography & Quotes",
    totalOrders: 76,
    revenue: "₹1,900K",
    mostSold: "Stay Humble / Believe",
  },
  {
    category: "Festival & Occasion",
    totalOrders: 70,
    revenue: "₹1,867K",
    mostSold: "Diwali (Diyas, Shubh Labh)",
  },
];

const recentTransactions = [
  { price: "₹2,030", items: 4, time: "05:27 PM", image: "/name1.jpg" },
  { price: "₹2,030", items: 4, time: "05:27 PM", image: "/name1.jpg" },
  { price: "₹2,030", items: 4, time: "05:27 PM", image: "/name1.jpg" },
];

const ordersData = [
  {
    id: "#12345",
    customer: "Neha Pal",
    total: "₹120K",
    status: "Pending",
    date: "Today",
    action: "View/Edit",
  },
  {
    id: "#12344",
    customer: "Lisa Ray",
    total: "₹89K",
    status: "Shipped",
    date: "Yesterday",
    action: "Track",
  },
  {
    id: "#12343",
    customer: "Ankit Mehra",
    total: "₹149K",
    status: "Delivered",
    date: "18 Jul 2025",
    action: "View",
  },
  {
    id: "#12342",
    customer: "Nisha Verma",
    total: "₹199K",
    status: "Cancelled",
    date: "18 Jul 2025",
    action: "View/Edit",
  },
  {
    id: "#12341",
    customer: "Jason Clark",
    total: "₹75K",
    status: "Processing",
    date: "17 Jul 2025",
    action: "View",
  },
  {
    id: "#12340",
    customer: "Ayesha Noor",
    total: "₹180K",
    status: "Returned",
    date: "16 Jul 2025",
    action: "View",
  },
  {
    id: "#12339",
    customer: "Ali Khan",
    total: "₹210K",
    status: "Delivered",
    date: "15 Jul 2025",
    action: "View",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Shipped":
      return "bg-blue-100 text-blue-700";
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "Cancelled":
      return "bg-gray-200 text-gray-600";
    case "Processing":
      return "bg-sky-100 text-sky-700";
    case "Returned":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

function Dashboard() {
  return (
    <section className="bg-gray-50">
      <div className="w-full flex justify-between items-center px-20 py-3 bg-white shadow">
        {/* Logo */}
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Search Bar */}
        <div className="flex items-center ">
          <div className="flex-1 max-w-md mx-6">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-white">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none flex-1 text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Icon Links */}
          <div className="flex items-center gap-4">
            {links.map(({ icon: Icon }, index) => (
              <div
                key={index}
                to="#"
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                {Icon && <Icon className="w-6 h-6 text-gray-700" />}
              </div>
            ))}
          </div>

          <div className="px-2 flex gap-2 items-start text-white">
            <div className="relative group w-10 h-10 mt-1 rounded-full overflow-hidden hover:border-white/50 transition-all duration-300">
              <img
                src={"/name1.jpg"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => inputRef.current.click()}
              >
                <Camera className="text-white w-5 h-5" />
              </div>
              <input type="file" className="hidden" accept="image/*" />
            </div>
            <div className="text-black leading-4">
              <p className="text-base font-medium">Rohit Sharma</p>
              <p className="font-xs text-gray-600 font-light">Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-start">
        <div className=" sticky top-0 w-1/6 bg-[#383838] p-6 h-full">
          {dashboard.map(({ name, path, icon: Icon }) => (
            <div className="flex gap-2 text-white p-4 items-center">
              {Icon && <Icon size={16} />}
              <h1 className="font-light">{name}</h1>
            </div>
          ))}
        </div>
        <div className="h-dvh my-4 flex flex-col gap-4 bg-gray-100 w-5/6 mx-4">
          <div className="flex flex-col p-4 bg-white shadow-md border border-gray-100 rounded-md">
            <h1 className="text-3xl mb-4">Overview</h1>
            <div className="grid grid-cols-5 gap-4">
              {orderSummary.map(({ price, stats, icon: Icon }) => (
                <div className="aspect-auto bg-gray-100 py-6 rounded-lg px-2 flex gap-4 items-start justify-between">
                  <div className="max-w-30">
                    <h1 className="text-black font-medium text-2xl">{price}</h1>
                    <p className="text-[#414141] leading-5">{stats}</p>
                  </div>
                  <Icon></Icon>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3/4 p-4 bg-white shadow-md border border-gray-100 rounded-md flex justify-between items-start">
              <div className="flex gap-4 items-start">
                <h1 className="text-[30px] mb-4">Analytics Report</h1>
                <ChartNoAxesColumn size={30} />
              </div>
              <div className="border px-4 py-2 flex gap-2 rounded-md border-black items-center">
                <ChevronDown></ChevronDown>
                <h1 className="text-lg">2024</h1>
              </div>
            </div>
            <div className="w-1/4 p-4 bg-white border shadow-md rounded-lg flex flex-col gap-4">
              <h1 className="">My Account</h1>
              <div className=" p-4 flex bg-green-700 rounded-md justify-between">
                <div className="flex flex-col gap-2 text-white ">
                  <h1 className="text-base">Rohit Sharma</h1>
                  <p className="text-sm font-light">Total Balance</p>
                  <h1 className="text-xl ">$2,877.00</h1>
                </div>
                <div>Wallet</div>
              </div>
              <button className="border border-green-500 py-2 text-center rounded-lg text-green-600">
                Withdraw
              </button>
              <div>
                <div className="flex justify-between">
                  <h1>Recent Transaction</h1>
                  <button>View All</button>
                </div>
                <div className="flex flex-col gap-2 my-2">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-8 h-8 rounded-full object-contain"
                          src={transaction.image}
                          alt={transaction.name}
                        />
                        <div className="flex flex-col">
                          <p>Order Payment</p>
                          <p className="text-gray-700 font-light text-sm">
                            - {transaction.items} items
                          </p>
                        </div>
                        <div></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1>{transaction.price}</h1>
                        <p className="text-xs">{transaction.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3/5 p-4 bg-white shadow-md border border-gray-100 rounded-md">
              <h1 className="text-[30px] mb-4 font-semibold">
                Category-wise Sales
              </h1>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="p-3 text-sm font-medium text-gray-600">
                      Category
                    </th>
                    <th className="p-3 text-sm font-medium text-gray-600">
                      Total Orders
                    </th>
                    <th className="p-3 text-sm font-medium text-gray-600">
                      Revenue
                    </th>
                    <th className="p-3 text-sm font-medium text-gray-600">
                      Most Sold Product
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 text-gray-800">{item.category}</td>
                      <td className="p-3 text-gray-800">{item.totalOrders}</td>
                      <td className="p-3 text-gray-800">{item.revenue}</td>
                      <td className="p-3 text-gray-800">{item.mostSold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-2/5 p-4 bg-white border shadow-md rounded-lg flex flex-col gap-4">
              <h1 className="">My Account</h1>
              <div className=" p-4 flex bg-green-700 rounded-md justify-between">
                <div className="flex flex-col gap-2 text-white ">
                  <h1 className="text-base">Rohit Sharma</h1>
                  <p className="text-sm font-light">Total Balance</p>
                  <h1 className="text-xl ">$2,877.00</h1>
                </div>
                <div>Wallet</div>
              </div>
              <button className="border border-green-500 py-2 text-center rounded-lg text-green-600">
                Withdraw
              </button>
              <div>
                <div className="flex justify-between">
                  <h1>Recent Transaction</h1>
                  <button>View All</button>
                </div>
                <div className="flex flex-col gap-2 my-2">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-8 h-8 rounded-full object-contain"
                          src={transaction.image}
                          alt={transaction.name}
                        />
                        <div className="flex flex-col">
                          <p>Order Payment</p>
                          <p className="text-gray-700 font-light text-sm">
                            - {transaction.items} items
                          </p>
                        </div>
                        <div></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1>{transaction.price}</h1>
                        <p className="text-xs">{transaction.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3/5 p-4 bg-white shadow-md border border-gray-100 rounded-md">
      <h1 className="text-[24px] mb-4 font-semibold">Recent Orders Table</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="p-3 text-sm font-medium text-gray-600">Order ID</th>
            <th className="p-3 text-sm font-medium text-gray-600">Customer</th>
            <th className="p-3 text-sm font-medium text-gray-600">Total</th>
            <th className="p-3 text-sm font-medium text-gray-600">Status</th>
            <th className="p-3 text-sm font-medium text-gray-600">Date</th>
            <th className="p-3 text-sm font-medium text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 text-gray-800">{order.id}</td>
              <td className="p-3 text-gray-800">{order.customer}</td>
              <td className="p-3 text-gray-800">{order.total}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="p-3 text-gray-800">{order.date}</td>
              <td className="p-3 text-blue-500 cursor-pointer hover:underline">{order.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            <div className="w-2/5 p-4 bg-white border shadow-md rounded-lg flex flex-col gap-4">
              <h1 className="">My Account</h1>
              <div className=" p-4 flex bg-green-700 rounded-md justify-between">
                <div className="flex flex-col gap-2 text-white ">
                  <h1 className="text-base">Rohit Sharma</h1>
                  <p className="text-sm font-light">Total Balance</p>
                  <h1 className="text-xl ">$2,877.00</h1>
                </div>
                <div>Wallet</div>
              </div>
              <button className="border border-green-500 py-2 text-center rounded-lg text-green-600">
                Withdraw
              </button>
              <div>
                <div className="flex justify-between">
                  <h1>Recent Transaction</h1>
                  <button>View All</button>
                </div>
                <div className="flex flex-col gap-2 my-2">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-8 h-8 rounded-full object-contain"
                          src={transaction.image}
                          alt={transaction.name}
                        />
                        <div className="flex flex-col">
                          <p>Order Payment</p>
                          <p className="text-gray-700 font-light text-sm">
                            - {transaction.items} items
                          </p>
                        </div>
                        <div></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1>{transaction.price}</h1>
                        <p className="text-xs">{transaction.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

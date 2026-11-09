function AdminDashboard() {
  const stats = [
    { title: "Total Products", value: "120" },
    { title: "Total Orders", value: "85" },
    { title: "Total Customers", value: "64" },
    { title: "Total Revenue", value: "৳85,500" },
  ];

  const recentOrders = [
    { id: "#TF1001", customer: "Ayesha", amount: 1850, status: "Delivered" },
    { id: "#TF1002", customer: "Nusrat", amount: 2500, status: "Processing" },
    { id: "#TF1003", customer: "Mim", amount: 1200, status: "Pending" },
  ];

  return (
    <main className="min-h-screen bg-[#090711] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Welcome to TAHMINA FASHION administration panel.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-[#1a1425] p-7 rounded-2xl border border-purple-900"
            >
              <p className="text-gray-400 mb-3">{stat.title}</p>
              <h2 className="text-3xl font-bold text-purple-400">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1425] rounded-2xl p-7 mt-10 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6">
            Recent Orders
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-4">Order ID</th>
                <th className="py-4">Customer</th>
                <th className="py-4">Amount</th>
                <th className="py-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-800">
                  <td className="py-4">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">৳{order.amount}</td>
                  <td className="py-4 text-purple-400">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}

export default AdminDashboard;
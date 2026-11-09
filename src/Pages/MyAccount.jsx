import { Link } from "react-router-dom";

function MyAccount() {
  const user = {
    name: "Tahmina Akter",
    email: "tahminaakteralo00@gmail.com",
    phone: "01715734986",
  };

  const orders = [
    {
      id: "#TF1001",
      date: "November 05, 2026",
      status: "Delivered",
      total: 1850,
    },
    {
      id: "#TF1002",
      date: "November 08, 2026",
      status: "Processing",
      total: 2500,
    },
  ];

  return (
    <main className="min-h-screen bg-[#090711] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          My Account
        </h1>

        <p className="text-gray-400 mb-10">
          Welcome back, {user.name}!
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#171321] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Profile Information
            </h2>

            <p className="mb-4">
              <span className="text-gray-400">Name:</span>
              <br />
              {user.name}
            </p>

            <p className="mb-4">
              <span className="text-gray-400">Email:</span>
              <br />
              {user.email}
            </p>

            <p>
              <span className="text-gray-400">Phone:</span>
              <br />
              {user.phone}
            </p>
          </div>

          <div className="md:col-span-2 bg-[#171321] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              My Orders
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700 text-gray-400">
                    <th className="py-4">Order ID</th>
                    <th className="py-4">Date</th>
                    <th className="py-4">Status</th>
                    <th className="py-4">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-800"
                    >
                      <td className="py-4">{order.id}</td>
                      <td className="py-4">{order.date}</td>
                      <td className="py-4 text-green-400">
                        {order.status}
                      </td>
                      <td className="py-4">
                        ৳{order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

export default MyAccount;
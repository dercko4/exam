import React, { useState, useEffect } from "react";

const App = () => {
  const data = [
    {
      name: "макароны",
      cost: "100р.",
      count: "1",
      id_product: "1",
      name_buyer: "Рустам",
      time_date: {
        time: "10:41",
        date: "21.11.2024"
      },
      status_product: "ready"
    },

    {
      name: "колбаса",
      cost: "350р.",
      count: "2",
      id_product: "2",
      name_buyer: "Анастасия",
      time_date: {
        time: "10:43",
        date: "22.11.2024"
      },
      status_product: "ready"
    },

    {
      name: "фуагра",
      cost: "500р.",
      count: "1",
      id_product: "3",
      name_buyer: "Александр",
      time_date: {
        time: "12:20",
        date: "19.11.2024"
      },
      status_product: "not_ready"
    },

    {
      name: "стрипсы",
      cost: "250р.",
      count: "5",
      id_product: "4",
      name_buyer: "Рустам",
      time_date: {
        time: "15:22",
        date: "20.11.2024"
      },
      status_product: "not_ready"
    },

    {
      name: "энергетик",
      cost: "100р.",
      count: "1",
      id_product: "5",
      name_buyer: "Анастасия",
      time_date: {
        time: "13:55",
        date: "21.11.2024"
      },
      status_product: "ready"
    },

    {
      name: "чай",
      cost: "50р.",
      count: "1",
      id_product: "6",
      name_buyer: "Рустам",
      time_date: {
        time: "10:43",
        date: "21.11.2024"
      },
      status_product: "ready"
    },

    {
      name: "буст аккаунта до титана",
      cost: "0р.",
      count: "5 дней",
      id_product: "7",
      name_buyer: "Анастасия",
      time_date: {
        time: "10:41",
        date: "21.11.2024"
      },
      status_product: "not_ready"
    },

    {
      name: "дебуст аккаунта до легенды",
      cost: "5000р.",
      count: "7 дней",
      id_product: "8",
      name_buyer: "Рустам",
      time_date: {
        time: "16:31",
        date: "05.11.2024"
      },
      status_product: "ready"
    },

    {
      name: "плов",
      cost: "15000р.",
      count: "999",
      id_product: "9",
      name_buyer: "Айвар",
      time_date: {
        time: "00:00",
        date: "22.11.2024"
      },
      status_product: "ready"
    },

    {
      name: "манты",
      cost: "300",
      count: "5",
      id_product: "10",
      name_buyer: "Айвар",
      time_date: {
        time: "00:00",
        date: "22.11.2024"
      },
      status_product: "ready"
    },
  ]

  const [clientName, setClientName] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const orders = data.filter(order => order.name_buyer.toLowerCase().includes(clientName.toLowerCase()));
    setFilteredOrders(orders);
  }, [clientName, data]);

  const statusColors = {
    ready: "green",
    not_ready: "red",
  };

  return (
    <div style={{ backgroundColor: "#808080", padding: "20px" }}>
      <input
        type="text"
        placeholder="Введите имя клиента"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <div>
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              margin: "10px 0",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ margin: "5% 0px", fontWeight: "bold" }}>Заказ №{order.id_product}</h3>
            <p style={{ marginLeft: "2%", marginRight: "2%"}}>
              <strong>Покупатель:</strong> {order.name_buyer}<br />
              <strong>Дата и время:</strong> {order.time_date.date} {order.time_date.time}<br />
              <strong>Товары/Услуги:</strong> {order.name} ({order.count} x {order.cost})<br />
              <strong>Статус:</strong> <span style={{ backgroundColor: statusColors[order.status_product] || "grey", color: "white", padding: "5px", borderRadius: "5px" }}>{order.status_product}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  const pOrder = order.order;
  const pAddress = order.address;
  return `Olá ${pOrder.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${pAddress.street}, N°: ${pAddress.number}, AP: ${pAddress.apartment}.`;
}
console.log(customerInfo(order));


const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pOrder = order.order;
  const pizzaKeys = Object.keys(pOrder.pizza);
  return `Olá ${order.name}, o total do seu pedido de ${pizzaKeys[0]}, ${pizzaKeys[1]} e ${pOrder.drinks.coke.type} é R$ ${order.payment.total},00.`
}

console.log(orderModifier(order));
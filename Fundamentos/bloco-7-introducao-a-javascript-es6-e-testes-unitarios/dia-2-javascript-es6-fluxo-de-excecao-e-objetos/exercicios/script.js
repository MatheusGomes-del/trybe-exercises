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
  
//"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

/*  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const nome = order.order.delivery.deliveryPerson
    const destinaraio = order.name
    const phone = order.phoneNumber
    const rua = order.address.street
    const numeroRua = order.address.number
    const apartmento = order.address.apartment

    console.log(`"Olá ${nome}, entrega para: ${destinaraio},Telefone: ${phone}, R. ${rua}, Nº: ${numeroRua}, AP: ${apartmento}".`)
}
  
  customerInfo(order);
*/  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let nome = order.order.delivery.deliveryPerson
    nome = 'Luiz Silva'
    const totalPrice = order.order.pizza.marguerita.price + order.order.drinks.coke.price + order.order.pizza.pepperoni.price - 5
    
    console.log(`Olá ${nome}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${totalPrice}`) 
  }
  
  orderModifier(order);
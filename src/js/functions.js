export function orderByProps(obj, order){
    let keysOffOrder = [];
    for (let key in obj){
      if (!order.includes(key)){
        keysOffOrder.push(key);
      }
    }
    const keysOfProps = [...order, ...keysOffOrder.sort()];
    
    return keysOfProps.map(key => {
      return {
        key: key, value: obj[key]
      }
    });
}

export function getSpecialAttack({special}){
    return special.map(({
        id, name, icon, description = 'Описание недоступно'
      }) => ({
        id, name, icon, description, 
      }));
}
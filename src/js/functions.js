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

export function getSpecialAttack(character){
    for (let item of character.special){
      if ('description' in item === false) {
        item.description = 'Описание недоступно';
      }
    }
    return character.special;
  }
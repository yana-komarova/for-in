function orderByProps(obj, order) {
    const result = [];
  
    for (const key in obj) {
      if (order.includes(key)) {
        result.push({ key, value: obj[key] });
      }
    }
  
    for (const key in obj) {
      if (!order.includes(key)) {
        result.push({ key, value: obj[key] });
      }
    }
  
    result.sort((a, b) => a.key.localeCompare(b.key));
  
    return result;
  }
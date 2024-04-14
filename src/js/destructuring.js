function destructuring(obj) {
    const { id, name, description = 'Описание недоступно', icon } = obj.special;
  
    return { id, name, description, icon };
  }
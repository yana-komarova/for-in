describe('destructuring', () => {
    it('should return an object with four fields', () => {
      const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
          },
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
          },
        ],
      };
  
      const result = destructuring(obj);
  
      expect(result).toEqual({
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      });
    });
  
    it('should handle objects with missing fields', () => {
      const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
          },
        ],
      };
  
      const result = destructuring(obj);
  
      expect(result).toEqual({
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...',
      });
    });
  });
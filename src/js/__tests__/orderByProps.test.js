describe('orderByProps', () => {
    it('should return an array of objects with keys and values', () => {
      const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
      const order = ['name', 'level'];
      const result = orderByProps(obj, order);
      expect(result).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
      ]);
    });
  
    it('should handle objects with missing keys', () => {
      const obj = { name: 'мечник', health: 10, attack: 80, defence: 40 };
      const order = ['name', 'level'];
      const result = orderByProps(obj, order);
      expect(result).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
      ]);
    });
  
    it('should handle objects with duplicate keys', () => {
      const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40, level: 3 };
      const order = ['name', 'level'];
      const result = orderByProps(obj, order);
      expect(result).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'level', value: 3 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
      ]);
    });
  });
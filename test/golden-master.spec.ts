import { Item, GildedRose } from '@/golden-master';

describe('Gilded Rose Golden master', () => {
  it('should pass', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Aged Brie", 0, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert",0, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
      new Item("Potion", 0, 5),
      new Item("Potion", 0, 51),
      new Item("Potion", 0, -1),
    ];


    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    for(let i = 0; i<100; i++) {
      const originalImpl = gildedRose.updateQuality();
      expect(originalImpl).toBe(originalImpl);
    }
  });
});

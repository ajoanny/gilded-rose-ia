import { Item, GildedRose } from '../app/golden-master';

describe('Gilded Rose - Golden Master', () => {
  describe('Normal items', () => {
    it('should decrease quality and sellIn by 1 for normal items', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
      expect(items[0].sellIn).toBe(9);
    });

    it('should decrease quality by 2 when sellIn date has passed', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 0, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(18);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });

    it('should never have negative quality', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 5, 0)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it('should continue decreasing sellIn even when quality is 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 3, 0)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
      expect(gildedRose.items[0].sellIn).toBe(2);
    });
  });

  describe('Aged Brie', () => {
    it('should increase quality as it gets older', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(21);
      expect(gildedRose.items[0].sellIn).toBe(9);
    });

    it('should increase quality by 2 after sell date has passed', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(22);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });

    it('should never have quality greater than 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(50);
    });

    it('should not exceed quality 50 when expired', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', -1, 49)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(50);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('should never decrease in quality', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(80);
    });

    it('should never decrease sellIn date', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toBe(10);
    });

    it('should maintain quality even when expired', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(80);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });
  });

  describe('Backstage passes', () => {
    it('should increase quality by 1 when sellIn is more than 10 days', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(21);
      expect(gildedRose.items[0].sellIn).toBe(14);
    });

    it('should increase quality by 2 when sellIn is 10 days or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(22);
      expect(gildedRose.items[0].sellIn).toBe(9);
    });

    it('should increase quality by 3 when sellIn is 5 days or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(23);
      expect(gildedRose.items[0].sellIn).toBe(4);
    });

    it('should drop quality to 0 after concert', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });

    it('should never have quality greater than 50', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(50);
    });

    it('should increase quality by 2 when sellIn is exactly 10', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(22);
    });

    it('should increase quality by 3 when sellIn is exactly 5', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(23);
    });

    it('should increase quality by 3 when sellIn is 1', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(23);
    });
  });

  describe('Multiple items', () => {
    it('should update all items correctly', () => {
      const items = [
        new Item('Normal Item', 10, 20),
        new Item('Aged Brie', 10, 20),
        new Item('Sulfuras, Hand of Ragnaros', 10, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)
      ];
      const gildedRose = new GildedRose(items);
      gildedRose.updateQuality();

      expect(gildedRose.items[0].quality).toBe(19);
      expect(gildedRose.items[1].quality).toBe(21);
      expect(gildedRose.items[2].quality).toBe(80);
      expect(gildedRose.items[3].quality).toBe(23);
    });

    it('should handle empty items array', () => {
      const gildedRose = new GildedRose([]);
      const items = gildedRose.updateQuality();
      expect(items).toEqual([]);
    });
  });

  describe('Edge cases', () => {
    it('should handle item with quality 1 and expired sellIn', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', -1, 1)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it('should handle Aged Brie with quality 49 and expired', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', -1, 49)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(50);
    });

    it('should handle backstage pass on the day of concert', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(0);
    });

    it('should handle multiple updates on same item', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 5, 10)]);
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(7);
      expect(gildedRose.items[0].sellIn).toBe(2);
    });
  });
});

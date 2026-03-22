import { Item, GildedRose } from '@/gilded-rose.ai.2';

describe('GildedRose', () => {
  it('simple item: quality 10, sellIn 10 - should decrease quality by 1 and sellIn by 1', () => {
    const gildedRose = new GildedRose([new Item('Simple Item', 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(9);
  });

  it('simple item: quality 0, sellIn 10 - quality should remain 0 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Simple Item', 10, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(9);
  });

  it('simple item: quality -1, sellIn 10 - quality should remain -1 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Simple Item', 10, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(-1);
    expect(items[0].sellIn).toBe(9);
  });

  it('simple item: quality 10, sellIn 0 - quality should decrease by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Simple Item', 0, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(-1);
  });

  it('simple item: quality 10, sellIn -1 - quality should decrease by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Simple Item', -1, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(-2);
  });

  it('simple item: quality 51, sellIn 10 - quality should decrease by 1 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Simple Item', 10, 51)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(9);
  });

  it('Aged Brie: quality 10, sellIn 10 - quality should increase by 1 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(11);
    expect(items[0].sellIn).toBe(9);
  });

  it('Aged Brie: quality 10, sellIn 0 - quality should increase by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Aged Brie: quality 12, sellIn -1 - quality should increase by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 12)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(14);
    expect(items[0].sellIn).toBe(-2);
  });

  it('Aged Brie: quality 50, sellIn 10 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(9);
  });

  it('Aged Brie: quality 51, sellIn 10 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 51)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(51);
    expect(items[0].sellIn).toBe(9);
  });

  it('Aged Brie: quality 50, sellIn -1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(-2);
  });

  it('Aged Brie: quality 49, sellIn 0 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 11, sellIn 10 - quality should increase by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 11)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(9);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn 11 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(6);
    expect(items[0].sellIn).toBe(10);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn 6 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(7);
    expect(items[0].sellIn).toBe(5);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn 5 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(4);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn 4 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(3);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn 1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(0);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn 0 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 5, sellIn -1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-2);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality -1, sellIn 11 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(10);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality -1, sellIn 6 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(5);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality -1, sellIn 1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(2);
    expect(items[0].sellIn).toBe(0);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 50, sellIn 11 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(10);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 50, sellIn 6 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(5);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 49, sellIn 6 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(5);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 50, sellIn 1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 49, sellIn 1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);
  });

  it('Backstage passes to a TAFKAL80ETC concert: quality 48, sellIn 1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 48)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);
  });

  it('Sulfuras, Hand of Ragnaros: quality 5, sellIn 5 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(5);
  });

  it('Sulfuras, Hand of Ragnaros: quality 5, sellIn 0 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(0);
  });

  it('Sulfuras, Hand of Ragnaros: quality 5, sellIn -5 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -5, 5)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(-5);
  });

  it('Sulfuras, Hand of Ragnaros: quality -1, sellIn 5 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(-1);
    expect(items[0].sellIn).toBe(5);
  });

  it('Sulfuras, Hand of Ragnaros: quality -1, sellIn 0 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(-1);
    expect(items[0].sellIn).toBe(0);
  });

  it('Sulfuras, Hand of Ragnaros: quality -1, sellIn -1 - expected values as strings', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, -1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(-1);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Conjured item: quality 10, sellIn 1 - quality should decrease by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Item Conjured', 1, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(0);
  });

  it("Conjured item expired: quality 10, sellIn 0 - quality should decrease by 4 and sellIn should decrease by 1", () => {
    const gildedRose = new GildedRose([new Item("Another item Conjured", 0, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(6);
    expect(items[0].sellIn).toBe(-1);
  });

  it('Conjured item: quality 10, sellIn -1 - quality should decrease by 2 and sellIn should decrease by 1', () => {
    const gildedRose = new GildedRose([new Item('Yet another item Conjured', -1, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(6);
    expect(items[0].sellIn).toBe(-2);
  });
});

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  private static readonly MAX_QUALITY = 50;
  private static readonly MIN_QUALITY = 0;
  private static readonly EXPIRED_SELL_IN = 1;
  private static readonly BACKSTAGE_FIRST_THRESHOLD = 11;
  private static readonly BACKSTAGE_SECOND_THRESHOLD = 6;

  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private increaseQualityIfBelowMax(item: Item): void {
    if (item.quality < GildedRose.MAX_QUALITY) {
      item.quality = item.quality + 1;
    }
  }

  private decreaseQualityIfAboveMin(item: Item): void {
    if (item.quality > GildedRose.MIN_QUALITY) {
      item.quality = item.quality - 1;
    }
  }

  private updateAgedBrie(item: Item): void {
    this.increaseQualityIfBelowMax(item);
    if (item.sellIn < GildedRose.EXPIRED_SELL_IN) {
      this.increaseQualityIfBelowMax(item);
    }
  }

  private updateBackstagePasses(item: Item): void {
    this.increaseQualityIfBelowMax(item);
    if (item.sellIn < GildedRose.BACKSTAGE_FIRST_THRESHOLD) {
      this.increaseQualityIfBelowMax(item);
    }
    if (item.sellIn < GildedRose.BACKSTAGE_SECOND_THRESHOLD) {
      this.increaseQualityIfBelowMax(item);
    }
    if (item.sellIn < GildedRose.EXPIRED_SELL_IN) {
      item.quality = item.quality - item.quality;
    }
  }

  private updateSimpleItem(item: Item): void {
    this.decreaseQualityIfAboveMin(item);
    if (item.name.includes('Conjured')) {
      this.decreaseQualityIfAboveMin(item);
    }
    if (item.sellIn < GildedRose.EXPIRED_SELL_IN) {
      this.decreaseQualityIfAboveMin(item);
      if (item.name.includes('Conjured')) {
        this.decreaseQualityIfAboveMin(item);
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':
          this.updateAgedBrie(this.items[i]);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePasses(this.items[i]);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          this.updateSimpleItem(this.items[i]);
          break;
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }

    return this.items;
  }
}

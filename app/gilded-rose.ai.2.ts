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
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private increaseQualityIfBelowMax(item: Item): void {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private decreaseQualityIfAboveMin(item: Item): void {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }

  private updateAgedBrie(item: Item): void {
    this.increaseQualityIfBelowMax(item);
    if (item.sellIn < 1) {
      this.increaseQualityIfBelowMax(item);
    }
  }

  private updateBackstagePasses(item: Item): void {
    this.increaseQualityIfBelowMax(item);
    if (item.sellIn < 11) {
      this.increaseQualityIfBelowMax(item);
    }
    if (item.sellIn < 6) {
      this.increaseQualityIfBelowMax(item);
    }
    if (item.sellIn < 1) {
      item.quality = item.quality - item.quality;
    }
  }

  private updateSimpleItem(item: Item): void {
    this.decreaseQualityIfAboveMin(item);
    if (item.sellIn < 1) {
      this.decreaseQualityIfAboveMin(item);
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

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

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':
          this.updateAgedBrie(this.items[i]);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.increaseQualityIfBelowMax(this.items[i]);
          if (this.items[i].sellIn < 11) {
            this.increaseQualityIfBelowMax(this.items[i]);
          }
          if (this.items[i].sellIn < 6) {
            this.increaseQualityIfBelowMax(this.items[i]);
          }
          if (this.items[i].sellIn < 1) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          this.decreaseQualityIfAboveMin(this.items[i]);
          if (this.items[i].sellIn < 1) {
            this.decreaseQualityIfAboveMin(this.items[i]);
          }
          break;
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }

    return this.items;
  }
}

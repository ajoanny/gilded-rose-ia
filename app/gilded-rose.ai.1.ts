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

  updateQuality() {
    for (const item of this.items) {
      // Item type identification
      const isLegendary = item.name === 'Sulfuras, Hand of Ragnaros';
      const isAgedBrie = item.name === 'Aged Brie';
      const isBackstagePass = item.name === 'Backstage passes to a TAFKAL80ETC concert';
      const isConjured = item.name.toLowerCase().startsWith('conjured');

      // Skip legendary items - they never change
      if (isLegendary) {
        continue;
      }

      // Quality bounds helpers (inline to keep logic in updateQuality)
      const increaseQuality = (amount: number) => {
        item.quality = Math.min(50, item.quality + amount);
      };

      const decreaseQuality = (amount: number) => {
        item.quality = Math.max(0, item.quality - amount);
      };

      const isExpired = () => item.sellIn <= 0;

      // Update quality based on item type and expiration status
      if (isAgedBrie) {
        // Aged Brie increases quality over time (faster when expired)
        increaseQuality(isExpired() ? 2 : 1);
      } else if (isBackstagePass) {
        // Backstage passes have complex quality rules
        if (isExpired()) {
          item.quality = 0; // Worthless after concert
        } else if (item.sellIn <= 5) {
          increaseQuality(3);
        } else if (item.sellIn <= 10) {
          increaseQuality(2);
        } else {
          increaseQuality(1);
        }
      } else {
        // Normal and Conjured items degrade (faster when expired and if conjured)
        const baseRate = isConjured ? 2 : 1;
        const degradationRate = isExpired() ? baseRate * 2 : baseRate;
        decreaseQuality(degradationRate);
      }

      // Decrease sellIn date
      item.sellIn -= 1;
    }

    return this.items;
  }
}

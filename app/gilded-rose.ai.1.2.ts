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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      // Item type identification
      const isLegendary = item.name === 'Sulfuras, Hand of Ragnaros';
      const isAgedBrie = item.name === 'Aged Brie';
      const isBackstagePass = item.name === 'Backstage passes to a TAFKAL80ETC concert';
      const isConjured = item.name.toLowerCase().startsWith('conjured');

      // Legendary items never change
      if (isLegendary) {
        continue;
      }

      // Helper functions (inline to keep all logic in updateQuality)
      const increaseQuality = (amount: number) => {
        item.quality = Math.min(50, item.quality + amount);
      };

      const decreaseQuality = (amount: number) => {
        item.quality = Math.max(0, item.quality - amount);
      };

      // Update quality based on item type
      if (isAgedBrie) {
        increaseQuality(1);
      } else if (isBackstagePass) {
        if (item.sellIn > 10) {
          increaseQuality(1);
        } else if (item.sellIn > 5) {
          increaseQuality(2);
        } else if (item.sellIn > 0) {
          increaseQuality(3);
        }
      } else {
        // Normal and Conjured items
        const degradationRate = isConjured ? 2 : 1;
        decreaseQuality(degradationRate);
      }

      // Decrease sellIn
      item.sellIn -= 1;

      // Apply additional effects after sell date has passed
      if (item.sellIn < 0) {
        if (isAgedBrie) {
          increaseQuality(1);
        } else if (isBackstagePass) {
          item.quality = 0;
        } else {
          // Normal and Conjured items degrade faster
          const degradationRate = isConjured ? 2 : 1;
          decreaseQuality(degradationRate);
        }
      }
    }

    return this.items;
  }
}

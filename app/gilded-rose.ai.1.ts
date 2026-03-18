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
    const MAX_QUALITY = 50;
    const MIN_QUALITY = 0;

    for (const item of this.items) {
      // Item type matchers
      const isLegendary = item.name === 'Sulfuras, Hand of Ragnaros';
      const isAgedBrie = item.name === 'Aged Brie';
      const isBackstagePass = item.name === 'Backstage passes to a TAFKAL80ETC concert';
      const isConjured = item.name.toLowerCase().startsWith('conjured');
      const isExpired = item.sellIn <= 0;

      // Skip legendary items - they never change
      if (isLegendary) {
        continue;
      }

      // Quality adjustment helpers (inline to keep logic in updateQuality)
      const clampQuality = () => {
        item.quality = Math.max(MIN_QUALITY, Math.min(MAX_QUALITY, item.quality));
      };

      const adjustQuality = (delta: number) => {
        item.quality += delta;
        clampQuality();
      };

      // Calculate quality change based on item type
      let qualityDelta = 0;

      if (isAgedBrie) {
        // Aged Brie increases quality over time (faster when expired)
        qualityDelta = isExpired ? 2 : 1;
      } else if (isBackstagePass) {
        // Backstage passes: quality increases as concert approaches, drops to 0 after
        if (isExpired) {
          item.quality = MIN_QUALITY;
        } else if (item.sellIn <= 5) {
          qualityDelta = 3;
        } else if (item.sellIn <= 10) {
          qualityDelta = 2;
        } else {
          qualityDelta = 1;
        }
      } else {
        // Normal and Conjured items degrade (conjured degrade twice as fast)
        const baseRate = isConjured ? 2 : 1;
        const multiplier = isExpired ? 2 : 1;
        qualityDelta = -(baseRate * multiplier);
      }

      // Apply quality change (skip for backstage passes that expired)
      if (!(isBackstagePass && isExpired)) {
        adjustQuality(qualityDelta);
      }

      // Decrease sellIn date
      item.sellIn -= 1;
    }

    return this.items;
  }
}

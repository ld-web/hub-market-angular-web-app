import { Pipe, PipeTransform } from '@angular/core';

type Variant = 'label' | 'class';

@Pipe({
  name: 'stockStatus',
  standalone: true,
})
export class StockStatusPipe implements PipeTransform {
  transform(stock: number | null | undefined, variant: Variant = 'label'): string {
    const s = stock ?? 0;

    if (variant === 'class') {
      if (s === 0) return 'text-red-600';
      if (s < 10)  return 'text-amber-600';
      return 'text-green-600';
    }

    // variant === 'label'
    if (s === 0) return 'Rupture de stock';
    if (s < 10)  return 'Stock limité';
    return 'En stock';
  }
}

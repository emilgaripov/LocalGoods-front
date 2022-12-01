export type SortData = { sortBy: string, sortDirection: 'asc' | 'desc' } | null;

export type WhoAuth = 'user' | 'farmer';

export type Categories = 'milk' | 'meat' | 'vegetables' | 'fruits' | 'nuts' | 'berries'

export const categories: Categories[] = [
  'milk',
  'meat',
  'vegetables',
  'fruits',
  'nuts',
  'berries',
]

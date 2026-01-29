export type StampConfig = 
  | { type: 'icon'; iconKey: string; label: string; color?: string }
  | { type: 'emoji'; content: string; label: string }
  | { type: 'text'; content: string; label: string };

export const STAMP_REGISTRY: Record<string, StampConfig> = {
  'coffee': { type: 'icon', iconKey: 'FiCoffee', label: 'Coffee Time', color: 'text-amber-700' },
  'arch': { type: 'icon', iconKey: 'SiArchlinux', label: 'Arch User', color: 'text-cyan-600' },
  'code': { type: 'icon', iconKey: 'FiCode', label: 'Code', color: 'text-slate-700' },
  'heart': { type: 'icon', iconKey: 'FiHeart', label: 'Love', color: 'text-rose-500' },
  'react': { type: 'icon', iconKey: 'SiReact', label: 'React', color: 'text-blue-500' },
  'motion': { type: 'icon', iconKey: 'Motion01Icon', label: 'Motion', color: 'text-indigo-500' },

  'fire': { type: 'emoji', content: '🔥', label: 'Fire' },
  'rocket': { type: 'emoji', content: '🚀', label: 'Ship it' },
  'skull': { type: 'emoji', content: '💀', label: 'Dead' },
  'bug': { type: 'emoji', content: '🐛', label: 'Bug' },

  'lgtm': { type: 'text', content: 'LGTM', label: 'Looks Good' },
  'ship': { type: 'text', content: 'SHIP IT', label: 'Ship It' },
  'wip': { type: 'text', content: 'WIP', label: 'Work in Progress' },
};

export const AVAILABLE_STAMPS = Object.entries(STAMP_REGISTRY).map(([id, config]) => ({
  id,
  ...config
}));
export type StampConfig = 
  | { type: 'icon'; iconKey: string; label: string; color?: string }
  | { type: 'emoji'; content: string; label: string }
  | { type: 'text'; content: string; label: string };

export const STAMP_REGISTRY: Record<string, StampConfig> = {
  'arch': { 
    type: 'icon', 
    iconKey: 'SiArchlinux', 
    label: 'I use Arch btw', 
    color: 'text-cyan-600' 
  },
  'nest': { 
    type: 'icon', 
    iconKey: 'SiNestjs', 
    label: 'Backend Power',
  },
  'docker': { 
    type: 'icon', 
    iconKey: 'SiDocker', 
    label: 'Works on my machine', 
  },
  'ts': { 
    type: 'icon', 
    iconKey: 'SiTypescript', 
    label: 'Strict Mode',
  },

  'coffee': { 
    type: 'icon', 
    iconKey: 'FiCoffee', 
    label: 'Fuel',
  },
  'linux': {
    type: 'icon', 
    iconKey: 'SiLinux', 
    label: 'Linux User',
  },

  'bug': { type: 'emoji', content: '🐛', label: 'Debugging' },
  'fire': { type: 'emoji', content: '🔥', label: 'Hotfix' },
  'brain': { type: 'emoji', content: '🧠', label: 'Big Brain' },

  'sudo': { type: 'text', content: 'SUDO', label: 'Root' },
  'lgtm': { type: 'text', content: 'LGTM', label: 'Approved' },
  'ship': { type: 'text', content: 'DEPLOY', label: 'Ship It' },
};

export const AVAILABLE_STAMPS = Object.entries(STAMP_REGISTRY).map(([id, config]) => ({
  id,
  ...config
}));
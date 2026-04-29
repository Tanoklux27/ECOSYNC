export interface ConsumptionData {
  day: string;
  energy: number;
  water: number;
}

export interface Appliance {
  id: string;
  name: string;
  icon: string;
  type: 'energy' | 'water';
  consumption: number;
  unit: string;
  status: 'active' | 'idle';
  trend: 'up' | 'down' | 'stable';
  change: string;
  progress: number;
}

export interface Automation {
  id: string;
  name: string;
  description: string;
  type: 'eco' | 'water' | 'energy';
  active: boolean;
  savings: string;
  impact: string;
  affectedDevices: number;
}

export const WEEKLY_TRENDS: ConsumptionData[] = [
  { day: 'MON', energy: 10, water: 420 },
  { day: 'TUE', energy: 12, water: 380 },
  { day: 'WED', energy: 15, water: 550 },
  { day: 'THU', energy: 18, water: 300 },
  { day: 'FRI', energy: 11, water: 400 },
  { day: 'SAT', energy: 8, water: 280 },
  { day: 'SUN', energy: 12, water: 320 },
];

export const APPLIANCES: Appliance[] = [
  {
    id: 'hvac',
    name: 'HVAC System',
    icon: 'AirVent',
    type: 'energy',
    consumption: 84.2,
    unit: 'kWh',
    status: 'active',
    trend: 'up',
    change: '+4% vs LW',
    progress: 75,
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher',
    icon: 'Waves',
    type: 'water',
    consumption: 156,
    unit: 'Liters',
    status: 'idle',
    trend: 'down',
    change: '-12% vs LW',
    progress: 45,
  },
  {
    id: 'ev-charger',
    name: 'EV Charger',
    icon: 'Zap',
    type: 'energy',
    consumption: 52.0,
    unit: 'kWh',
    status: 'active',
    trend: 'stable',
    change: 'Stable',
    progress: 60,
  }
];

export const AUTOMATIONS: Automation[] = [
  {
    id: 'peak-eco',
    name: 'Peak Hours Eco Mode',
    description: 'Automatically dims lights and adjusts HVAC when energy demand is highest.',
    type: 'eco',
    active: true,
    impact: '-15% kWh',
    savings: '$42.00',
    affectedDevices: 12,
  },
  {
    id: 'smart-sprinkler',
    name: 'Smart Sprinkler',
    description: 'Based on local rain forecast. Skips cycles when precipitation is predicted.',
    type: 'water',
    active: true,
    impact: 'Idle',
    savings: '80% Rain Chance',
    affectedDevices: 4,
  },
  {
    id: 'ev-charge',
    name: 'EV Scheduled Charging',
    description: 'Charges during lowest tariff rates between 12:00 AM and 5:00 AM.',
    type: 'energy',
    active: true,
    impact: 'Next: 11:45 PM',
    savings: 'Off-peak',
    affectedDevices: 1,
  }
];

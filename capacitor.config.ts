import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.biorhythmcalculator',
  appName: 'biorhythm-calculator',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.3.7:3000',
    cleartext: true,
  },
};

export default config;

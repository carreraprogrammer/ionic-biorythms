import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.biorhythmcalculator',
  appName: 'biorhythm-calculator',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

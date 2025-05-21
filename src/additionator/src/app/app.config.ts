import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser'; // If using SSR/Hydration
// import { provideAnimations } from '@angular/platform-browser/animations'; // If using Angular Animations

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideClientHydration(), // Uncomment if you set up SSR
    // provideAnimations()      // Uncomment if you need animations
  ]
};
export default {
  // Rutas de los archivos de prueba
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).tsx"],

  // Directorios a ignorar
  testPathIgnorePatterns: ["/node_modules/"],

  // Directorios a buscar para las pruebas
  roots: ["<rootDir>/src"],

  // Configuración de transformación de archivos
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },

  // Configuración de módulos
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Configuración de reportes de cobertura
  coverageReporters: ["html", "text-summary"],

  // Otras opciones de configuración...
  testEnvironment: "jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};

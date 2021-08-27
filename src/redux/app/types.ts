export interface IApp {
  colorTheme: string
  colorSpectrum: Record<string, string>
}

export interface IChangeThemeColorsAction {
  type: string
  payload: string
}
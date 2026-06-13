import 'ogl'

declare module 'ogl' {
  interface CommonClass {
    renderer: any
    options: any
  }

  interface Simulation {
    options: any
    fbos: any
    cellScale: any
  }

  interface MouseClass {
    listenerTarget: any
    docTarget: any
    coords: any
  }
}

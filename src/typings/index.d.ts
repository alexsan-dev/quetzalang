declare module 'parser' {
  export function parse(code: string): unknown[]
}

declare var process: {
  stdout: {
    write(exp: unknown): void
  }
}
export function sleep(milliseconds: number) {
    return new Promise<boolean>(resolve =>
      setTimeout(() => resolve(true), milliseconds),
    );
  }
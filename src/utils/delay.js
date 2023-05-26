export default function delay(ms = 1000) {
  return new Promise((resolve) => {
    if (ms) {
      setTimeout(() => {
        resolve();
      }, ms);
    }
  });
}

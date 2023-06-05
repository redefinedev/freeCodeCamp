describe('Flaky Test', () => {
  it('should randomly pass or fail', () => {
    const randomNumber = Math.random();

    if (randomNumber > 0.5) {
      expect(true).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });
});

describe('Flaky Test', () => {
  it('should randomly pass or fail', () => {
    const randomNumber = Math.random();

    if (randomNumber > 0.5) {
      expect(true).to.equal(true);
    } else {
      expect(true).to.equal(false);
    }
  });
});

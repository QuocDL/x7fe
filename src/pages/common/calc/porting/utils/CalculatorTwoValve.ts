export function calculateTwoValve(intakeValve: number, exhaustValve: number) {
  const intakeHole = intakeValve * 1.414 - 3;
  const intakeSeat = intakeValve - 3;

  const exhaustHole = exhaustValve * 1.5554 - 3.3;
  const exhaustSeat = exhaustValve - 3;

  return {
    intakeHole: Number(intakeHole.toFixed(4)),
    intakeSeat,
    exhaustHole: Number(exhaustHole.toFixed(4)),
    exhaustSeat,
  };
}

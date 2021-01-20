'reach 0.1'

const R = Refined(UInt, (x) => x < 3);

export const main = Reach.App(
  {},
  [
    ['A', {getR: Fun([], R)}],
    ['B', {seeR: Fun([R], Null)}],
  ],
  (A, B) => {
    A.only(() => {
      const r = declassify(interact.getR());
    });
    A.publish(r);
    commit();
    B.only(() => {
      interact.seeR(r);
    });
  }
);

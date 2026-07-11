// ─── BIRTHDAY / DOB ──────────────────────────────────────────
// Powers the Hero XP bar: turns "days since last birthday" into an RPG-style
// level-up progress percentage.
const DOB = new Date(2004, 8, 30); // September 30, 2004

export function getBirthdayXP() {
  const now = new Date();
  const thisYearBday = new Date(now.getFullYear(), DOB.getMonth(), DOB.getDate());
  const isBirthday =
    now.getMonth() === DOB.getMonth() && now.getDate() === DOB.getDate();
  const lastBday =
    now >= thisYearBday
      ? thisYearBday
      : new Date(now.getFullYear() - 1, DOB.getMonth(), DOB.getDate());
  const nextBday =
    now >= thisYearBday
      ? new Date(now.getFullYear() + 1, DOB.getMonth(), DOB.getDate())
      : thisYearBday;
  const age = now.getFullYear() - DOB.getFullYear() - (now < thisYearBday ? 1 : 0);
  const xpPercent = isBirthday
    ? 0
    : Math.round(
        ((now.getTime() - lastBday.getTime()) /
          (nextBday.getTime() - lastBday.getTime())) *
          100,
      );
  return { age, xpPercent, isBirthday, nextLevel: age + 1 };
}

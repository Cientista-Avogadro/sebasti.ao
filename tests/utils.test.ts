import { describe, expect, it } from "vitest";
import { calculateDuration } from "../src/lib/utils";

describe("calculateDuration", () => {
  it("computes years and months for a closed range", () => {
    expect(calculateDuration("2024-01", "2025-02")).toEqual({ years: 1, months: 1 });
  });

  it("treats null end date as today", () => {
    const duration = calculateDuration("2024-10", null);
    expect(duration.years).toBeGreaterThanOrEqual(1);
  });

  it("handles ranges shorter than a month as zero", () => {
    expect(calculateDuration("2024-05", "2024-05")).toEqual({ years: 0, months: 0 });
  });

  it("never returns negative months across year boundaries", () => {
    const duration = calculateDuration("2023-11", "2024-01");
    expect(duration).toEqual({ years: 0, months: 2 });
  });
});

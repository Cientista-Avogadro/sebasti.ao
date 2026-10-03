import { describe, expect, it } from "vitest";
import en from "../messages/en.json";
import pt from "../messages/pt.json";

function flatten(obj: unknown, prefix = "", out: Record<string, unknown> = {}) {
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flatten(value, path, out);
    } else {
      out[path] = value;
    }
  }
  return out;
}

const enKeys = Object.keys(flatten(en));
const ptKeys = Object.keys(flatten(pt));

describe("i18n message files", () => {
  it("en and pt expose the same message keys", () => {
    const onlyEn = enKeys.filter((key) => !(key in flatten(pt)));
    const onlyPt = ptKeys.filter((key) => !(key in flatten(en)));
    expect(onlyEn, `keys missing in pt.json: ${onlyEn.join(", ")}`).toEqual([]);
    expect(onlyPt, `keys missing in en.json: ${onlyPt.join(", ")}`).toEqual([]);
  });

  it("no message value contains a double dash or emoji", () => {
    for (const [key, value] of Object.entries({ ...flatten(en), ...flatten(pt) })) {
      if (typeof value !== "string") continue;
      expect(value, key).not.toMatch(/--/);
      expect(value, key).not.toMatch(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u);
    }
  });
});

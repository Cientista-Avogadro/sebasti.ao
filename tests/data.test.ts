import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import en from "../messages/en.json";
import pt from "../messages/pt.json";
import { experiences, projects as experienceProjects } from "../src/data/experience";
import { projects, filterCategories } from "../src/data/projects";

type Messages = Record<string, unknown>;

const locales: Record<string, Messages> = { en: en as Messages, pt: pt as Messages };

function resolve(messages: Messages, key: string): unknown {
  return key.split(".").reduce<unknown>((node, part) => {
    if (node && typeof node === "object") return (node as Record<string, unknown>)[part];
    return undefined;
  }, messages);
}

describe("projects data integrity", () => {
  it("resolves every translation key in both locales", () => {
    for (const project of projects) {
      const keys = [
        project.taglineKey,
        project.descriptionKey,
        project.roleKey,
        project.impactKey,
        project.status.toLowerCase(),
        ...(project.metrics?.map((metric) => metric.labelKey) ?? []),
      ];
      for (const key of keys) {
        for (const [locale, messages] of Object.entries(locales)) {
          expect(resolve(messages, `projects.${key}`), `${locale}: projects.${key}`).toBeDefined();
        }
      }
    }
  });

  it("has a local screenshot for every linked project image", () => {
    for (const project of projects) {
      if (project.image) {
        expect(existsSync(`public${project.image}`), project.image).toBe(true);
      }
    }
  });

  it("only offers filter categories that exist in the data", () => {
    const allTech = new Set(projects.flatMap((project) => project.tech));
    for (const category of filterCategories) {
      for (const tech of category.techs) {
        expect(allTech.has(tech), tech).toBe(true);
      }
    }
  });
});

describe("experience data integrity", () => {
  it("resolves descriptions and highlights in both locales", () => {
    for (const experience of experiences) {
      for (const [locale, messages] of Object.entries(locales)) {
        expect(resolve(messages, `experience.${experience.descriptionKey}`), `${locale}: ${experience.company}`).toBeDefined();
        for (let i = 1; i <= experience.highlightsCount; i++) {
          expect(
            resolve(messages, `experience.${experience.highlightsKey}.${i}`),
            `${locale}: ${experience.company} highlight ${i}`
          ).toBeDefined();
        }
      }
    }
  });

  it("references only companies from the experience list in the shared project map", () => {
    const companies = new Set(experiences.map((experience) => experience.company));
    for (const project of experienceProjects) {
      expect(companies.has(project.company), project.name).toBe(true);
    }
  });
});

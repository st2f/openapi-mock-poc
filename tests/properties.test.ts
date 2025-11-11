import { describe, it, expect } from "vitest";
import { Configuration, DefaultApi } from "../client";

const api = new DefaultApi(
    new Configuration({
        basePath: "http://localhost:4010"
    })
);

describe("Properties API", () => {
    it("returns a list of properties", async () => {
        const res = await api.getProperties();
        expect(Array.isArray(res)).toBe(true);
    });

    it("returns a single property", async () => {
        const res = await api.getPropertyById({"id":"123"});
        expect(res).toHaveProperty("id");
    });
});

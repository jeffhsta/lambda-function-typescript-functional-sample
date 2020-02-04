import { expect } from "chai";
import createEntity from "@src/business/create-entity";

describe("Create entity", () => {
    it("returns an entity data structure", () => { // f*** dumb test
        const entity = createEntity({userId: "123"});

        expect(entity).to.have.property("userId");
        expect(entity.userId).to.be.eq("123");
    });
});
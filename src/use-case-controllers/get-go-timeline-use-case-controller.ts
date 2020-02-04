import { save as saveInDatabase } from "@src/ports/database";
import createEntity from "@src/business/create-entity";
import GetGoTimelineParams from "@src/domain/get-go-timeline-params";

export default async (params: GetGoTimelineParams) : Promise<Array<Record<string, any>>> => {
    console.log(`Got an user id ${params.userId}`);

    const entity = createEntity({ a: 123 });
    const savedEntity = await saveInDatabase(entity);
    console.log(savedEntity);

    return [{}];
};
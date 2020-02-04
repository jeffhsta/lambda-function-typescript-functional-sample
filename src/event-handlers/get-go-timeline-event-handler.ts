import getGoTimelineUseCaseController from "@src/use-case-controllers/get-go-timeline-use-case-controller";
import GetGoTimelineParams from "@src/domain/get-go-timeline-params";

const inputParser = (params: Record<string, any>) : GetGoTimelineParams => ({
    userId: params["userId"]
});

export const eventHandler = (event: Record<string, any>) : Array<Record<string, any>> => {
    // call input data parser by the event type (e.g. SQS, SNS, S3, Api Gateway, etc)
    // call the use case controller
    // call the error handler module if any erro occurs

    console.log(`Got the event ${event}`);
    const params = inputParser(event);
    return getGoTimelineUseCaseController(params);
};
import { IApiResponse } from '../models';
import * as Router from 'koa-router';

export function setResponse<T>(ctx: Router.IRouterContext, status: number, data?: T) {
    ctx.status = status;
    ctx.body = {
        data,
    } as IApiResponse<T>;
    return ctx;
}

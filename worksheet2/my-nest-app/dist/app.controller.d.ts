import { Article } from './dummydata/articles';
export declare class ArticlesController {
    constructor();
    getAll(): Article[];
    getById(id: string): Article | undefined;
}

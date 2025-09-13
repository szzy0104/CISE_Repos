import { Article } from './dummydata/articles';
export declare class ArticlesController {
    getAll(): Article[];
    getById(id: string): Article | undefined;
}

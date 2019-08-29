import { handleSubmitArticle } from '../src/client/js/interaction_Article'

describe('Test "handleSubmitArticle()" should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmitArticle).toBeDefined();
    });
});
describe('Test "handleSubmitArticle()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmitArticle).toBe("function");
    });
});
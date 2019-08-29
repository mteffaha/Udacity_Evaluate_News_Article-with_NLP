import {verifyUrl} from '../src/client/js/verifyUrl'



describe('Test to confirm that "verifyUrl()" should be a valid function' , () => {
    test('It should be a valid function', async () => {
        expect(typeof verifyUrl).toBe("function");
    });
});
describe('Test to confirm that "verifyUrl()" should be present' , () => {
    test('It should return true', async () => {
        expect(verifyUrl).toBeDefined();
    });
});

describe('Testing my function "verifyUrl()" for wrong url' , () => {
    var url = "//www.studentnewsdaily.com/daily-news-article/d-day-75th-anniversary/";
    test('It should return false', async () => {
        const link = verifyUrl(url);
        expect(link).toBe(false);
    });
});

describe('Test case to check "verifyUrl()" for correctly inputted url' , () => {
    var url = "https://www.studentnewsdaily.com/daily-news-article/d-day-75th-anniversary/";
    test('It should return true', async () => {
        const link = verifyUrl(url);
        expect(link).toBe(true);
    });
});


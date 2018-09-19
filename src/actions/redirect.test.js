import {REDIRECT_TO_NEW_PAGE, redirectToNewPage} from './redirect.js';

describe('redirectToNewPage', () => {
    it('Should return the action', () => {
        const redirect = true;
        const action = redirectToNewPage(redirect);
        expect(action.type).toEqual(REDIRECT_TO_NEW_PAGE);
        expect(action.redirect).toEqual(redirect);
    });
});
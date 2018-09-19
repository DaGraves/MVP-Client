export const REDIRECT_TO_NEW_PAGE = 'REDIRECT_TO_NEW_PAGE';
export const redirectToNewPage = (redirect) => ({
    type: REDIRECT_TO_NEW_PAGE,
    redirect
})
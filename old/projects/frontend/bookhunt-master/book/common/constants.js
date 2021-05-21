const baseUrl = "http://as3.findforme.in:8000/api/"

export const registerApi = baseUrl + 'account/register';
export const loginApi = baseUrl + 'account/login';
export const getAuthorsApi = baseUrl + 'authors/';
export const getGenresApi = baseUrl + 'genres/';
export const getBooksApi = baseUrl + 'book/';
export const getBookInfoApi = baseUrl + 'book/bookinfo/';
export const searchBookApi = baseUrl + 'book/search/';
export const bookUpvoteApi = baseUrl + 'book/upvote/';
export const bookDownVoteApi = baseUrl + 'book/downvote/';
export const bookCommentApi = baseUrl + 'book/comment/';
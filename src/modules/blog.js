export default function blogModule(http) {
  return {
    getBlogs: ({ limit = 10, page = 1 } = {}) =>
      http.get('/blogs', { params: { limit, page } }),

    postComment: (blogId, comment, rating = null) =>
      http.post(
        `/comment/${blogId}`,
        { comment, ...(rating && { rating }) },
        { useAuth: true }
      ),
  };
}

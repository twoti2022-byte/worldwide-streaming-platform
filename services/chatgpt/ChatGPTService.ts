export interface ViewerContext { viewerId: string; permissions: readonly string[]; }
export interface ChatGPTService {
  searchCatalog(query: string, context: ViewerContext): Promise<never>;
  recommendContent(context: ViewerContext): Promise<never>;
  answerMovieQuestion(question: string, context: ViewerContext): Promise<never>;
  getViewerContext(viewerId: string): Promise<ViewerContext>;
}

export class ChatGPTBoundaryNotImplemented implements ChatGPTService {
  async searchCatalog(): Promise<never> { throw new Error('ChatGPT catalog search is reserved for a future module.'); }
  async recommendContent(): Promise<never> { throw new Error('ChatGPT recommendations are reserved for a future module.'); }
  async answerMovieQuestion(): Promise<never> { throw new Error('ChatGPT movie Q&A is reserved for a future module.'); }
  async getViewerContext(viewerId: string): Promise<ViewerContext> { return { viewerId, permissions: [] }; }
}

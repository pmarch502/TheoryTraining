/**
 * Simple hash-based SPA router.
 */
export class Router {
  constructor() {
    this.routes = [];
    this.notFoundHandler = null;
    window.addEventListener('hashchange', () => this.resolve());
  }

  /** Register a route pattern with a handler function. */
  on(pattern, handler) {
    this.routes.push({ pattern, handler });
    return this;
  }

  /** Register a 404 handler. */
  onNotFound(handler) {
    this.notFoundHandler = handler;
    return this;
  }

  /** Resolve the current hash against registered routes. */
  resolve() {
    const hash = window.location.hash || '#/';
    for (const route of this.routes) {
      const match = hash.match(route.pattern);
      if (match) {
        route.handler(...match.slice(1));
        return;
      }
    }
    if (this.notFoundHandler) {
      this.notFoundHandler(hash);
    }
  }

  /** Navigate to a hash path. */
  static navigate(path) {
    window.location.hash = path;
  }
}

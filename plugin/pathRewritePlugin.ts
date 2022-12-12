import history from "connect-history-api-fallback";
const defaultKey = "index";

export default function pathRewritePlugin(multiPage) {
  const rules: any[] = [];
  Reflect.ownKeys(multiPage).forEach((key) => {
    const params = {
      from: `/${multiPage[key].name}`,
      to: `${multiPage[key].rootPage}`,
    };
    if (key === defaultKey) {
      params.from = "/*";
    }
    rules.push(params);
  });
  return {
    name: "path-rewrite-plugin",
    configureServer(server) {
      server.middlewares.use(
        history({
          htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
          disableDotRule: false,
          rewrites: rules,
        })
      );
    },
  };
}

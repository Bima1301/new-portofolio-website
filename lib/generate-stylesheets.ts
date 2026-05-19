export default function generateStylesheetObject(stylesheets: string[]) {
  return stylesheets.map((stylesheet) => ({
    rel: "stylesheet",
    url: stylesheet,
    precedence: "default",
  }));
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      file.body = file.body.replace(markdownLinkRegex, (match, text, url) => {
        const updatedUrl = url
          .toLowerCase()
          .replace(/%20/g, "-")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/\.md$/, "");
        return `[${text}](${updatedUrl})`;
      });

      const markdownImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      file.body = file.body.replace(markdownImageRegex, (match, altText, imageUrl) => {
        const updatedImageUrl = imageUrl.replace(/^.*?\/public/, '');
        return `![${altText}](${updatedImageUrl})`;
      });
    }
  });
  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._id.endsWith(".md")) {
      // console.log(file.body);
    }
  });
});

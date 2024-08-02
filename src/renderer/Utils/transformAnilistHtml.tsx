import DOMPurify from 'dompurify';

export default function transformAniListText(text: string): string {
  // Helper function to escape HTML special characters
  // const escapeHTML = (str: string): string =>
  //   str.replace(
  //     /[&<>"']/g,
  //     (m) =>
  //       ({
  //         '&': '&amp;',
  //         '<': '&lt;',
  //         '>': '&gt;',
  //         '"': '&quot;',
  //         "'": '&#39;',
  //       })[m] || m,
  //   );

  // Process the text
  const processedText = DOMPurify.sanitize(text, {
    USE_PROFILES: { html: true },
  })
    // Bold
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Italic
    .replace(/_(.*?)_/g, '<em>$1</em>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Headers
    .replace(/^######(.*)$/gm, '<div class="text-xs">$1</div>')
    .replace(/^#####(.*)$/gm, '<div class="text-sm">$1</div>')
    .replace(/^####(.*)$/gm, '<div class="text-base">$1</div>')
    .replace(/^###(.*)$/gm, '<div class="text-lg">$1</div>')
    .replace(/^##(.*)$/gm, '<div class="text-xl">$1</div>')
    .replace(/^#(.*)$/gm, '<div class="text-2xl">$1</div>')
    // Centered text
    .replace(
      /~~~([\s\S]*?)~~~/g,
      '<div style="text-align: center; display:flex; justify-content:center; flex-direction: column; align-items:center">$1</div>',
    )
    // Crossed out
    .replace(/~~(.*?)~~/g, '<del>$1</del>')
    // Line
    .replace(/~~(.*?)~~/g, '<del>$1</del>')
    // Spoiler
    .replace(/~!(.*?)!~/g, '<span class="spoiler">$1</span>')
    // Link
    .replace(/\[(.*?)\]\((https?:\/\/.*?)\)/g, '<a href="$2">$1</a>')
    // Image
    .replace(
      /img(\d+)\((https?:\/\/.*?)\)/g,
      '<img src="$2" width="$1" alt="AniList Image">',
    )
    .replace(/img\((https?:\/\/.*?)\)/g, '<img src="$1" alt="AniList Image">')
    // YouTube video
    .replace(
      /youtube\((https?:\/\/.*?)\)/g,
      '<iframe width="100%" height="315" src="$1" frameborder="0" allowfullscreen></iframe>',
    )
    // Webm video
    .replace(
      /webm\((https?:\/\/.*?)\)/g,
      '<video width="100%" controls><source src="$1" type="video/webm"></video>',
    )
    // Ordered list
    .replace(
      /(\d+\. .*(\n|$))+/g,
      (match) => `<ol>${match.replace(/\d+\. (.*)/g, '<li>$1</li>')}</ol>`,
    )
    // Unordered list
    .replace(
      /(- .*(\n|$))+/g,
      (match) => `<ul>${match.replace(/\d+\. (.*)/g, '<li>$1</li>')}</ul>`,
    )
    // Quote
    .replace(/^>(.*)/gm, '<blockquote>$1</blockquote>')
    // Code
    .replace(/``(.*?)``/g, '<code>$1</code>')
    // Horizontal rule (one or more dashes alone on a line)
    .replace(
      /^-+$/gm,
      '<div style="border-bottom:5px #ABB6C2 solid; border-radius:99px; height:1px; width:100%;"></div>',
    )
    // Line breaks
    .replace(/\n/g, '<br>');

  // processedText = escapeHTML(processedText);

  return processedText;
}

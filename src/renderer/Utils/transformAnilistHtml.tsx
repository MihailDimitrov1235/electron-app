import DOMPurify from 'dompurify';

export default function transformAniListText(text: string): string {
  const spoilerToggle = `
    window.toggleSpoiler = function(el) {
      if (el.classList.contains('revealed')) {
        el.innerHTML = 'Spoiler';
        el.classList.remove('revealed');
      } else {
        el.innerHTML = el.getAttribute('data-spoiler');
        el.classList.add('revealed');
      }
    };
  `;
  const openExternalLink = `
    window.openExternalLink = function(url) {
      if (window.electronAPI) {
        window.electronAPI.openUrl(url);
      }
    };
  `;

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
    // Link
    .replace(
      /\[(.*?)\]\((.*?https?:\/\/.*?)\)/g,
      '<button type="button" onClick="openExternalLink(\'$2\')" class="hover:text-primary underline">$1</button>',
    )
    // Image
    .replace(
      /img(\d+)\((https?:\/\/.*?)\)/g,
      '<img src="$2" width="$1" alt="AniList Image">',
    )
    .replace(/img\((https?:\/\/.*?)\)/g, '<img src="$1" alt="AniList Image">')
    .replace(
      /Img(\d+)\((https?:\/\/.*?)\)/g,
      '<img src="$2" width="$1" alt="AniList Image">',
    )
    .replace(/Img\((https?:\/\/.*?)\)/g, '<img src="$1" alt="AniList Image">')
    // YouTube video
    .replace(
      /youtube\((https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+).*?)\)/g,
      '<iframe height="315" src="https://www.youtube.com/embed/$2" frameborder="0" allowfullscreen class="aspect-video"></iframe>',
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
    .replace(
      /\*+/gm,
      '<div style="border-bottom:5px #ABB6C2 solid; border-radius:99px; height:1px; width:100%;"></div>',
    )
    // Spoiler
    .replace(
      /~!(.*?)!~/g,
      (_, content) =>
        ` <span class="bg-primary/70 cursor-pointer text-primary-background px-2 rounded-md select-none" onclick="window.toggleSpoiler(this)" data-spoiler="${DOMPurify.sanitize(
          content,
        )}" >Spoiler</span> `,
    )
    // Line breaks
    .replace(/\n/g, '<br>');

  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.textContent = spoilerToggle + openExternalLink;
    document.head.appendChild(script);
  }

  return processedText;
}

export default function getTimePassed(
  pastDate: number,
  inSeconds = true,
): string {
  let pastDateInMiliseconds = pastDate;
  if (inSeconds) {
    pastDateInMiliseconds *= 1000;
  }
  const now = Date.now();
  const diffInSeconds = Math.floor((now - pastDateInMiliseconds) / 1000);

  if (diffInSeconds < 60) {
    return 'less than a minute ago';
  }
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
  const years = Math.floor(diffInSeconds / 31536000);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}

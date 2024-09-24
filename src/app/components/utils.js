const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDateForArticle(incomingDate) {
  const freshDate = new Date(incomingDate);
  const month = MONTHS[freshDate.getMonth()];
  const day = freshDate.getDay();
  const year = freshDate.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default function completedCheck(e) {
  e.target.completed = e.target.checked;
  if (e.target.completed === true) {
    e.currentTarget.nextElementSibling.classList.add('marked');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('marked');
  }
}

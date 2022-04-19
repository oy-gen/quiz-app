import { elements } from './selectors.js';

export default function initializeNav() {
  elements.navHome.addEventListener('click', () => {
    elements.pageHome.className = 'page';
    elements.pageBookmark.className = 'page--hidden';
    elements.pageNew.className = 'page--hidden';
    elements.pageProfile.className = 'page--hidden';
    elements.navHeadline.innerHTML = 'Quiz-App';
  });

  elements.navBookmark.addEventListener('click', () => {
    elements.pageHome.className = 'page--hidden';
    elements.pageBookmark.className = 'page';
    elements.pageNew.className = 'page--hidden';
    elements.pageProfile.className = 'page--hidden';
    elements.navHeadline.innerHTML = 'Bookmark';
  });

  elements.navNew.addEventListener('click', () => {
    elements.pageHome.className = 'page--hidden';
    elements.pageBookmark.className = 'page--hidden';
    elements.pageNew.className = 'page';
    elements.pageProfile.className = 'page--hidden';
    elements.navHeadline.innerHTML = 'Create New';
  });

  elements.navProfile.addEventListener('click', () => {
    elements.pageHome.className = 'page--hidden';
    elements.pageBookmark.className = 'page--hidden';
    elements.pageNew.className = 'page--hidden';
    elements.pageProfile.className = 'page';
    elements.navHeadline.innerHTML = 'Profile';
  });
}

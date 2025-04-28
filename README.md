# Blog App

## Authorship
- Griffin Shewbart
- [gshew24](https://github.com/gshew24)

## Attribution
- Bootstrap 5, Normalize.css, jQuery libraries were used for frontend styling and functionality.
- Project guided with assistance from ChatGPT walkthroughs.

## User Story
> As a user interested in blogging resources,  
> I want to be able to view, add, edit, and delete blog entries,  
> So that I can keep track of blogs easily in one place.

## Narrative
This app was developed as part of a coding course project. The goal was to revisit an early assignment and upgrade it using newly learned skills such as JSON file loading, DOM manipulation, jQuery, Bootstrap styling, and GitHub deployment.  
This application allows users to log in (dummy login), view blog posts, add new blog posts, edit titles, and delete posts, all with a responsive, polished frontend.

## Screenshots
- App homepage:
  ![Homepage Screenshot](screenshots/homepage.screenshot.png)
- Edit/Delete functionality example:
  ![Edit/Delete Screenshot](screenshots/edit.screenshot.png)

## Code Snippet Highlight
```javascript
$(document).on('click', '.edit-btn', function() {
  const index = $(this).data('index');
  const newTitle = prompt('Edit the blog title:', blogEntries[index].title);
  if (newTitle) {
    blogEntries[index].title = newTitle;
    renderBlogs();
  }
});

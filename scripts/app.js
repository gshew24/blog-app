let blogEntries = [];

// Load JSON data when page loads
$(document).ready(function() {
  fetch('./scripts/data.json')
    .then(response => response.json())
    .then(data => {
      blogEntries = data;
      renderBlogs();
    });

  // Handle form submission
  $('#blog-form').submit(function(event) {
    event.preventDefault();
    const title = $('#blog-title').val();
    const link = $('#blog-link').val();
    if (title && link) {
      blogEntries.push({ title: title, link: link, author: "You" });
      renderBlogs();
      $('#blog-form')[0].reset();
    }
  });

  // Load sample data into form
  $('#load-sample').click(function() {
    $('#blog-title').val('Sample Blog Post');
    $('#blog-link').val('https://sample.com');
  });

  // Export data to console
  $('#export-data').click(function() {
    console.log(JSON.stringify(blogEntries, null, 2));
  });

  // Dummy login
  $('#login-btn').click(function() {
    const username = $('#username').val();
    if (username) {
      $('.navbar-text').text(`Welcome, ${username}`);
      $('#loginModal').modal('hide');
    }
  });
});



// Handle Edit Button Click
$(document).on('click', '.edit-btn', function() {
  const index = $(this).data('index');
  const newTitle = prompt('Edit the blog title:', blogEntries[index].title);
  if (newTitle) {
    blogEntries[index].title = newTitle;
    renderBlogs();
  }
});

// Handle Delete Button Click
$(document).on('click', '.delete-btn', function() {
  const index = $(this).data('index');
  
  if (confirm('Are you sure you want to delete this blog post?')) {
    blogEntries.splice(index, 1);  // Remove that blog post from the array
    renderBlogs();                 // Refresh the list on the page
  }
});




// Function to render blog posts
function renderBlogs() {
  $('#blog-items').empty();
  blogEntries.forEach((entry, index) => {
    $('#blog-items').append(`
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${entry.title}</h5>
          <p class="card-text">
            <a href="${entry.link}" target="_blank">${entry.link}</a>
          </p>
          <p class="card-subtitle mb-2 text-muted">By ${entry.author}</p>
          <button class="btn btn-sm btn-warning edit-btn mt-2" data-index="${index}">Edit</button>
          <button class="btn btn-sm btn-danger delete-btn mt-2 ms-2" data-index="${index}">Delete</button>
        </div>
      </div>
    `);
  });
}



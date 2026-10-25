$(document).ready(function () {
  // Fetch data from data.json using jQuery
  $.getJSON('./data.json', function (data) {
    let totalScore = 0;
    const $summaryList = $('#summary-list');

    $summaryList.empty();

    $.each(data, function (index, item) {
      totalScore += item.score;

      const categoryId = item.category.toLowerCase();

      const rowHTML = `
        <div class="summary-item" id="${categoryId}">
          <div class="category">
            <img src="${item.icon}" alt="${item.category} icon">
            <span>${item.category}</span>
          </div>
          <p class="score"><span class="num">${item.score}</span> / 100</p>
        </div>
      `;

      $summaryList.append(rowHTML);
    });

    const averageScore = Math.round(totalScore / data.length);
    $('.score-big').text(averageScore);
  }).fail(function () {
    console.error('Error: Could not load data.json. Make sure you are running Live Server.');
  });
});
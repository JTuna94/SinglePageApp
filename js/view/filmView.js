function render(characters) {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  characters.list.forEach(({ name, imageUrl2 }, index) => {
      if (index % 3 === 0) {
          const row = document.createElement('div');
          row.className = 'row';
          container.appendChild(row);
      }

      const col = document.createElement('div');
      col.className = 'col-sm-4 mb-3';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const image = document.createElement('img');
      image.className = 'image'
      image.src = imageUrl2;

      const header = document.createElement('div');
      header.className = 'card-header';
      header.textContent = name;

      cardBody.appendChild(image);
      cardBody.appendChild(header);

      col.appendChild(cardBody);

      container.lastChild.appendChild(col);
  });
}

export default { render };

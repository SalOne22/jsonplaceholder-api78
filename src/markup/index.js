export function makeFirstTableMarkup(items = []) {
  return items
    .map(({ id, name, username, email, website }, index) => {
      return `<tr data-userid="${id}">
    <th scope="row">${index + 1}</th>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${website}</td>
  </tr>`;
    })
    .join("");
}

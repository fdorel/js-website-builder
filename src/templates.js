import {row, col} from './utils';

// export function title(block) {
//   return `
//     <div class="row">
//       <div class="col-sm">
//         <h1>${block.value}</h1>
//       </div>
//     </div>
// `
// }

function title(block) {
  return row(col(`<h1>${block.value}</h1>`));
}

// export function text(block) {
//   return `
//     <div class="row">
//       <div class="col-sm">
//         <p>${block.value}</p>
//       </div>
//     </div>
// `
// }

function text(block) {
  return row(col(`<p>${block.value}</p>`));
}

// export function columns(block) {
    // map will iterate through the array with item
    //  ${html.join('')} - for removing the comas in the array
//   const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
//   return `
//     <div class="row">
//       ${html.join('')}               
//     </div>
// `
// }

function columns(block) {
  const html = block.value.map(item => col(item));
  return row(html.join(''));
}

// export function image(block) {
//   return `
//     <div class="row">
//       <img src="${block.value}"/>
//     </div>
//   `
// }

function image(block) {
  return row(`<img src="${block.value}"/>`);
}

export const templates = {
  title,
  text,
  columns,
  image
}
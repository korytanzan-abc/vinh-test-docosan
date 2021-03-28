const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/assets/images')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file.replace('@2x.png', '').replace('@3x.png', '');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map(name => {
      let replaceName = name.replace('.png', '');
      return `${replaceName}: require('./${replaceName}.png')`;
    })
    .join(',\n  ');

  const string = `export const images = {
  ${properties}
}

`;

  fs.writeFileSync('src/assets/images/index.ts', string, 'utf8');
};

generate();

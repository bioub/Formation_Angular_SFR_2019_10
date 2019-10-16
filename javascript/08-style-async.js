const fs = require("fs");

try {
  const content = fs.readFileSync(".editorconfig", { encoding: "UTF-8" });
  fs.writeFileSync(".editorconfig.copy", content);
  console.log("Copy done");
} catch (err) {
  console.log(err.message);
}

// Callback Hell / Pyramid of doom
fs.readFile(".editorconfig", { encoding: "UTF-8" }, (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(".editorconfig.copy", content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// Promise / Defer
// Historique : q, bluebird...
// Natif depuis ES6
fs.promises.readFile(".editorconfig", { encoding: "UTF-8" })
  .then((content) => fs.promises.writeFile(".editorconfig.copy", content))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err.message));

async function copyEditorConfig() {
  try {
    const content = await fs.promises.readFile(".editorconfig", { encoding: "UTF-8" });
    await fs.promises.writeFile(".editorconfig.copy", content);
    console.log("Copy done");
  } catch (err) {
    console.log(err.message);
  }
}

copyEditorConfig();

async function copyEditorConfigBis() {
  const content = await fs.promises.readFile(".editorconfig", { encoding: "UTF-8" });
  await fs.promises.writeFile(".editorconfig.copy", content);
  console.log("Copy done");
}

copyEditorConfigBis().catch(err => console.log(err.message));

// Top Level Await
// try {
//   const content = await fs.promises.readFile(".editorconfig", { encoding: "UTF-8" });
//   await fs.promises.writeFile(".editorconfig.copy", content);
//   console.log("Copy done");
// } catch (err) {
//   console.log(err.message);
// }

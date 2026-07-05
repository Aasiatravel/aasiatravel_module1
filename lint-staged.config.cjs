module.exports = {
  '*.{ts,tsx,js,jsx}': ['eslint --fix --max-warnings=0 --no-warn-ignored'],
  '*.{json,md,css}': ['prettier --write'],
};

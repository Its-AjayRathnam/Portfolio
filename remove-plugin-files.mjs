import path from 'path';
import del from 'del';

const distDir = path.resolve('dist');
const pattern = `${distDir}/_plugin-vue_export-helper-*.js`;

(async () => {
  try {
    await del(pattern);
    console.log('Removed matching files from dist directory');
  } catch (err) {
    console.error('Error during file removal:', err);
  }
})();

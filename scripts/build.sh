mkdir ./public/ar/

echo ">> afterroot: Building blog"
cd blog
npm run build

cd ..

echo ">> afterroot: Moving blog"
mv ./blog/build/* ./public/ar/

echo ">> afterroot: Building afterroot"
npm run build

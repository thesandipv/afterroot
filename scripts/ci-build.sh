chmod +x ./scripts/build.sh
chmod +x ./blog/scripts/moveBlog.sh
echo Run npm install on root
npm install
cd ./blog
echo Run npm install on blog
npm install
cd ..
./scripts/build.sh
# npm run export

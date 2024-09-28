chmod +x ./scripts/build.sh

echo ">> afterroot: Run npm install on root"
npm install

cd ./blog

echo ">> afterroot: Run npm install on blog"
npm install

echo ">> afterroot: Running build.sh"
cd ..
./scripts/build.sh

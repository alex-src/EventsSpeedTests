
# Use a for loop to run each test in a seperate process
# blue-tape is used, rather than node-tap, to ensure the test end cleanly

./node_modules/.bin/browserify ./scripts/platform-tape.js --im | ./node_modules/.bin/testling -x "$1"

for file in ./benchmark/*.js ; do
  if [ -e "$file" ] ; then
    ./node_modules/.bin/browserify "$file" --im | testling -x "$1"
  fi
done

#!/bin/bash

# This comman builds desktop app using electrion-build in a docker container
# Checked on Linux (Ubuntu 18) for Linux and Windows

 #--user $(id -u):$(id -g) \
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD##*/}-node-modules:/project/node_modules \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 #/bin/bash -c "yarn" \
 #/bin/bash -c " ./node_modules/.bin/vue-cli-service electron:build -l && mv dist_electron dist_electron_linux" \
 #/bin/bash -c " ./node_modules/.bin/vue-cli-service electron:build -w --x64 && mv dist_electron dist_electron_win_x64" \
 #/bin/bash -c " ./node_modules/.bin/vue-cli-service electron:build -w --ia32 && mv dist_electron dist_electron_win_ia32" \
 electronuserland/builder:wine
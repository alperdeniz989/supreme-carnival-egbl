#!/usr/bin/env sh
set -e
if [ ! -x "$(command -v gradle || true)" ]; then
  echo "Gradle is not installed locally. GitHub Actions uses Gradle through the wrapper setup in the workflow."
  exit 1
fi
gradle "$@"

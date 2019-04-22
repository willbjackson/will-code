
##check for git then git init

if [ -e /usr/bin/git ]; then

echo "git up and running"

git init

else echo "get git"

fi

##check for node

if [ -e /home/linuxbrew/.linuxbrew/bin/node ]; then

echo "node up and running"

else echo "get node"

## docker
mkdir .docker

touch \
  .docker/dockerfile \
  .docker/dockerup.yaml

## github
mkdir -p \
  .github/ISSUE_TEMPLATE \
  .github/PULL_REQUEST_TEMPLATE

touch \
  .github/ISSUE_TEMPLATE/issue-template.md \
  .github/PULL_REQUEST_TEMPLATE/pull-request-template.md

touch \
  .github/CODE-OF-CONDUCT.md \
  .github/CONTRIBUTING.md

## root
mkdir -p \
  client \
  src \

touch \
  client/.gitkeep \
  src/.gitkeep \
  test/.gitkeep

touch \
  .azureup.yaml \
  .dockerignore \
  .editorconfig \
  .gitignore \
  .markdownlint.yaml \
  CHANGELOG.md \
  LICENSE.txt \
  README.md
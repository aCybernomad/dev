GIT
==============================
git status

git add .

git commit -m "text"

git push -u origin koa <- namn på branchen


DOCKER
==============================

docker build -t iss:1 . <- iss = namnet. : = tag

docker run -d -p 3000:3000 iss:1 <- port i docker och port på datorn sen namnet som ovan

docker login -u undefined0x@protonmail.com
       password:


Tag and Push

tag  -> $ docker tag local-image:tag dockerhub-username/repository-name:tag

ex.  -> $ docker tag iss:1 bugzapper/koa-koa:1

push -> $ docker push dockerhub-username/repository-name:tag

ex. ->  $ docker push bugzapper/koa-koa:1

Pull
ex. ->  $ docker pull bugzapper/koa-koa:1




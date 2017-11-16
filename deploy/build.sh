#!/usr/bin/env bash

FROM=$PWD;
V=1.0.1

cd $FROM

echo 'build image';
docker rmi -f liyangwood/own-space
docker build -t liyangwood/own-space:$V .

echo 'push image';
docker push liyangwood/own-space:$V



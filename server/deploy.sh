#!/bin/bash
docker build -t me/lireddit:release .
docker push me/lireddit:release

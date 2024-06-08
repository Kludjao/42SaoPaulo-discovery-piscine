#!/bin/bash
if [ $# -eq 0 ]; then
   echo "No arguments suplied!"
else
    for ARG in $*; do
        mkdir ex$ARG
    done
fi
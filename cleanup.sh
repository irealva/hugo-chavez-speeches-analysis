#!/bin/bash
FILES=./data/2001/*
for f in $FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  sed '/\+\+/q' $f > $f\header\parsed.txt
   sed '/++/,$!d' $f > $f\speech\parsed.txt
   rm $f
done

# Remove ++ and !=
for f in $FILES
do
  echo "Removing excess stuff"
  # take action on each file. $f store current file name
  #cat $f
  sed -i '' -e 's/!=//g' $f
  sed -i '' -e 's/++//g' $f
done


## Installation

Install miniconda for your platform here:

http://conda.pydata.org/miniconda.html

````
>conda env create -f requirements.yml
````

This will install a boatload of libraries we need. Then, to use it,

````
>source activate textvis  [if you're on Windows, it's activate textvis]
````

````
(textvis)>
````
-----

>cd python
>jupyter notebook


When you want to shut down the python venv, you use:

````
>source deactivate
````
--------

## Cleaning up files

0) Place !=, ++

1) `gcsplit 1999.txt '/!=/' {*}`

2) `cleanup.sh`
BUT change the year!!!

3) Move header files to a folder and

4) For header: `cat * > merged.txt`

5) For speeches: `rename -N 0001 's/.*/1999.$N.txt/' *.txt`
BUT change the year!!!

--------

textkit text2words ../data/books/0008.txt | textkit filterpunc | textkit tokens2counts > ../outputdata/0008.csv

Without stop words
textkit text2words ../data/books/0008.txt | textkit filterpunc | textkit tokens2lower > ../outputdata/0008.txt

head -n5 ../outputdata/0008.txt

In english: textkit text2words ../outputdata/0008.txt | textkit filterwords | textkit filterlengths -m 3 > ../outputdata/0008_clean.txt

In spanish: textkit text2words ../outputdata/0008.txt | textkit filterwords -l spanish | textkit filterlengths -m 3 > ../outputdata/0008_clean.txt


For the word counter
textkit tokens2counts ../outputdata/0008_clean.txt > ../outputdata/0008.csv

----

#REVISAR
http://venezuela-us.org/es/wp-content/uploads/2009/06/

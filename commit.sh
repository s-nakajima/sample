#!/bin/bash -ex

CURDIR=`pwd`

samples=`ls`
for sample in ${samples}
do
	if [ ! -d $sample ]; then
		continue
	fi

	echo "cd ${CURDIR}/${sample}"
	cd ${CURDIR}/${sample}

	for file in `ls`
	do
		if [ "$file" = "nbproject" ]; then
			echo "rm -Rf nbproject"
			rm -Rf nbproject
		fi
		if [ "$file" = "bower_components" ]; then
			echo "rm -Rf bower_components"
			rm -Rf bower_components
		fi
		if [ "$file" = "vendors" ]; then
			echo "rm -Rf vendors"
			rm -Rf vendors
		fi
		if [ "$file" = "composer.lock" ]; then
			echo "rm -f composer.lock"
			rm -f composer.lock
		fi
	done

	echo "cd ${CURDIR}"
	cd ${CURDIR}
done

echo "git status"
git status

echo "git add --all ?"
echo -n "y(es)/q(uit) [y]> "
read ANS
if [ "$ANS" = "" ]; then
	ANS="y"
fi
if [ "$ANS" = "q" ]; then
	exit 1
fi

echo "git add --all"
git add --all

echo "git commit -m\"sample commit\""
git commit -m"sample commit"

echo "git push"
git push

#
#-- end of file --
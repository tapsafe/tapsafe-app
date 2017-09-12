all: android/app/src/main/res/mipmap-hdpi/ic_launcher.png android/app/src/main/res/mipmap-mdpi/ic_launcher.png android/app/src/main/res/mipmap-xhdpi/ic_launcher.png android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png

android/app/src/main/res/mipmap-hdpi/ic_launcher.png: icon.svg
	inkscape -z -e $@ -w 72 -h 72 $+

android/app/src/main/res/mipmap-mdpi/ic_launcher.png: icon.svg
	inkscape -z -e $@ -w 48 -h 48 $+

android/app/src/main/res/mipmap-xhdpi/ic_launcher.png: icon.svg
	inkscape -z -e $@ -w 96 -h 96 $+

android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png: icon.svg
	inkscape -z -e $@ -w 144 -h 144 $+

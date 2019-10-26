# Mooc-platform
An all-in-one gui app combining courses from all major MOOC platfroms. These include: Coursera, Edx, MitOCW, and FutureLearn.

All the courses are locally parsed, meaing you can browse the courses stored even when offline.

When online, though, additional benefits are added:
By choosing universities you are planning to apply to (catered towards students) the results are going to be sortered based on the courses that users with similar preferences click on.

## Installation
### For windows:

Head over to: (link to be added) and download the x86 file

### For mac:

Head over to: and downlaod the darwin app

### For linux:

Download the AppImage file.

## Running from source:

Note(!!!): If you want to try this you need to have installed python 3 and npm/node.js. Having the latest versions of both will probably result in fewer bugs and incompatibilities.

In case you want to run my project from your local machine rather than downlaod the packaged version follow these commands by opening the terminal:

1. Clone this repo with: ```git clone https://github.com/thanasis457/Mooc-platform.git mooc-platform```.
This will download all the files from this repository. You can replace "mooc-platform" with any name. That will be the name of the folder that contains all the files.

2. Run ```cd mooc-platform```. This will get you in the directory of the files. Again, replace "mooc-platform" with the name you decided to give to the folder.

3. Run ```npm install```. This will install electron, upon which the app is going to run.

4. Finally, run ``npm start``. The app should now start.

Since you are running the scripts yourself, every time you want to start the application you are going to have to type the commands 2 and 4.

## Issues when running from source
1. I haven't tested any python version earlier than 3.6

2. When having Anaconda installed conflicts may appear, so be sure to either disable it or uninstall it completely

### It is highly recommended to run from source rather than the packaged files since conflicts may appear



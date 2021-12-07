# cloudintelligenceworkshop.github.io
--------------------------------
This is an overview of the structure of the code for this webiste.
<br />
--------------------------------
<br />
For each conference that the workshop is part of, the website is eventually archived into the folders named by the year the workshop occured.
<br />
For example, the workshop that happened in 2019 is in the folder named "2019".
<br />
At the time of writing this, the 2021 workshop has yet to be copied into a folder named "2021".
<br />
This way, users can view previous workshops through links in the website's navigation.
<br />
---------------------------------
<br />
The common page elements like the top navigation and footer are componentized with plain javascript and files from js/components.
<br />
---------------------------------
<br />
The styles for the homepage are in the files with the "main_" prefix and then the rest of the pages are in "page_" prefix.
<br />
---------------------------------
<br />
The hero is currently a video with an image default.
If the new hero is just an image, then link to a non-existant video would be the easiest way, code-wise, to show an image instead.
There is room for improvement here.
<br />
---------------------------------
<br />
The underscored html files are the original file from the colorlib template
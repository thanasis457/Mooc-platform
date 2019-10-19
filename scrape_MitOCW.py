import scraper
import json
#MitOCW part
cnt=0
cc=scraper.MitOCW().courses()
for i in range(len(cc)):
    opened='/Users/thanasis/Desktop/mooc-platform/courses/MitOCW/course'+str(cnt)+'.json';
    with open(opened,"w+") as write:
        json.dump(cc[i]._dict(),write,indent=4)
    cnt+=1
opened='/Users/thanasis/Desktop/mooc-platform/courses/MitOCW/numofcourses.txt';
with open(opened,"w+") as w:
    w.write(str(cnt))

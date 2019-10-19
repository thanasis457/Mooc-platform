import scraper
import json
#FutureLearn part
cnt=0
cc=scraper.FutureLearn().courses()
for i in range(len(cc)):
    opened='/Users/thanasis/Desktop/mooc-platform/courses/FutureLearn/course'+str(cnt)+'.json';
    with open(opened,"w+") as write:
        json.dump(cc[i]._dict(),write,indent=4)
    cnt+=1
opened='/Users/thanasis/Desktop/mooc-platform/courses/FutureLearn/numofcourses.txt';
with open(opened,"w+") as w:
    w.write(str(cnt))

import scraper
import json
#Coursera part
cc=scraper.Coursera().courses()
cnt=0
for i in range(len(cc)):
    opened='/Users/thanasis/Desktop/mooc-platform/courses/courses/Coursera/'+str(cnt)+'.json';
    with open(opened,"w+") as write:
        json.dump(cc[i]._dict(),write,indent=4)
    cnt+=1
opened='/Users/thanasis/Desktop/mooc-platform/courses/Coursera/numofcourses.txt';
with open(opened,"w+") as w:
    w.write(str(cnt))

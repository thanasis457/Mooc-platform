import scraper
import json
#Edx part
cnt=0
cc=scraper.Edx().courses()
for i in range(len(cc)):
    opened='/Users/thanasis/Desktop/mooc-platform/courses/Edx/course'+str(cnt)+'.json';
    with open(opened,"w+") as write:
        json.dump(cc[i]._dict(),write,indent=4)
    cnt+=1
opened='/Users/thanasis/Desktop/mooc-platform/courses/Edx/numofcourses.txt';
with open(opened,"w+") as w:
    w.write(str(cnt))

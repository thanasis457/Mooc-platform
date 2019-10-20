import scraper
import json
#Coursera part
cc=scraper.Coursera().courses()
cnt=0
for i in range(len(cc)):
    opened=path.join('courses/Coursera/'+str(cnt)+'.json';)
    with open(opened,"w+") as write:
        json.dump(cc[i]._dict(),write,indent=4)
    cnt+=1
opened='courses/Coursera/numofcourses.txt';
with open(opened,"w+") as w:
    w.write(str(cnt))
